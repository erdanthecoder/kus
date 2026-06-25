import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const homework = await prisma.homework.findMany({
    orderBy: { createdAt: 'desc' },
    include: { submissions: { where: { userId: payload.id } } },
  })
  return NextResponse.json(homework)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { title, description, subject, year, dueDate, questions } = await req.json()
  const homework = await prisma.homework.create({
    data: { title, description, subject, year, dueDate, questions: JSON.stringify(questions), createdBy: payload.id },
  })
  return NextResponse.json(homework)
}
