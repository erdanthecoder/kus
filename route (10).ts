import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET() {
  const actions = await prisma.adminAction.findMany({ where: { active: true } })
  return NextResponse.json(actions)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { type, data } = await req.json()
  const action = await prisma.adminAction.create({ data: { type, data, createdBy: payload.id, active: true } })
  return NextResponse.json(action)
}

export async function DELETE(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { type } = await req.json()
  await prisma.adminAction.updateMany({ where: { type, active: true }, data: { active: false } })
  return NextResponse.json({ ok: true })
}
