import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET() {
  const announcements = await prisma.announcement.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: { teacher: { select: { id: true, name: true, avatar: true } } },
  })
  return NextResponse.json(announcements)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { content, type } = await req.json()
  const announcement = await prisma.announcement.create({ data: { content, type: type || 'normal', teacherId: payload.id } })
  return NextResponse.json(announcement)
}
