import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const user = await prisma.user.findUnique({ where: { id: payload.id } })
  if (!user || user.stars < 30) return NextResponse.json({ error: 'Not enough stars' }, { status: 400 })

  const updated = await prisma.user.update({
    where: { id: payload.id },
    data: { stars: { decrement: 30 }, housePoints: { increment: 1 } },
  })
  return NextResponse.json({ stars: updated.stars, housePoints: updated.housePoints })
}
