import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET() {
  const islands = await prisma.worldIsland.findMany({ where: { active: true } })
  return NextResponse.json(islands)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { name, type, maxPlayers } = await req.json()
  const island = await prisma.worldIsland.create({ data: { name, type, maxPlayers: maxPlayers || 10 } })
  return NextResponse.json(island)
}

export async function DELETE(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { id } = await req.json()
  await prisma.worldIsland.update({ where: { id }, data: { active: false } })
  return NextResponse.json({ ok: true })
}
