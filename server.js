const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { Server } = require('socket.io')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  const io = new Server(httpServer, {
    cors: { origin: '*', methods: ['GET', 'POST'] },
  })

  const islands = new Map()
  const players = new Map()

  io.on('connection', (socket) => {
    socket.on('join-island', ({ islandId, user }) => {
      socket.join(islandId)
      if (!islands.has(islandId)) {
        islands.set(islandId, { players: [], state: 'waiting', gameState: null })
      }
      const island = islands.get(islandId)
      const playerData = { ...user, socketId: socket.id, x: 400, y: 300, skin: user.avatar || '👨‍🍳' }
      if (!island.players.find(p => p.id === user.id)) {
        island.players.push(playerData)
      }
      players.set(socket.id, { islandId, userId: user.id })
      io.to(islandId).emit('island-update', island)
      io.to(islandId).emit('player-joined', { id: user.id, name: user.name, avatar: user.avatar })
    })

    socket.on('player-move', ({ islandId, x, y }) => {
      const player = players.get(socket.id)
      if (!player) return
      const island = islands.get(islandId)
      if (island) {
        const p = island.players.find(p => p.socketId === socket.id)
        if (p) { p.x = x; p.y = y }
        socket.to(islandId).emit('player-moved', { socketId: socket.id, x, y })
      }
    })

    socket.on('send-message', ({ islandId, message }) => {
      const player = players.get(socket.id)
      if (!player) return
      const island = islands.get(islandId)
      const p = island?.players.find(p => p.socketId === socket.id)
      io.to(islandId).emit('chat-message', {
        id: socket.id + Date.now(),
        userId: p?.id || 'unknown',
        userName: p?.name || 'Unknown',
        avatar: p?.avatar || '👨‍🍳',
        message,
        timestamp: Date.now(),
      })
    })

    socket.on('start-game', ({ islandId, gameType }) => {
      const island = islands.get(islandId)
      if (island) {
        island.state = 'playing'
        island.gameState = { type: gameType, startedAt: Date.now() }
        io.to(islandId).emit('game-started', island.gameState)
      }
    })

    socket.on('game-action', ({ islandId, action, data }) => {
      socket.to(islandId).emit('game-action-broadcast', { socketId: socket.id, action, data })
    })

    socket.on('end-game', ({ islandId }) => {
      const island = islands.get(islandId)
      if (island) {
        island.state = 'waiting'
        island.gameState = null
        io.to(islandId).emit('game-ended')
      }
    })

    socket.on('disconnect', () => {
      const player = players.get(socket.id)
      if (player) {
        const island = islands.get(player.islandId)
        if (island) {
          island.players = island.players.filter(p => p.socketId !== socket.id)
          io.to(player.islandId).emit('island-update', island)
          io.to(player.islandId).emit('player-left', { socketId: socket.id })
          if (island.players.length === 0) {
            islands.delete(player.islandId)
          }
        }
        players.delete(socket.id)
      }
    })
  })

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
