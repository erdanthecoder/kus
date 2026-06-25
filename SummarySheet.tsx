import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { userId, amount } = await req.json()
  if (!userId || !amount || amount <= 0) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  await prisma.user.update({ where: { id: userId }, data: { housePoints: { increment: amount }, stars: { increment: amount * 10 } } })
  return NextResponse.json({ ok: true })
}
