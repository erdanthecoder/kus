import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { homeworkId, answers } = await req.json()
  const existing = await prisma.homeworkSubmission.findUnique({
    where: { homeworkId_userId: { homeworkId, userId: payload.id } },
  })
  if (existing) {
    const updated = await prisma.homeworkSubmission.update({
      where: { id: existing.id },
      data: { answers: JSON.stringify(answers), submitted: true },
    })
    return NextResponse.json(updated)
  }
  const submission = await prisma.homeworkSubmission.create({
    data: { homeworkId, userId: payload.id, answers: JSON.stringify(answers), submitted: true },
  })
  return NextResponse.json(submission)
}

export async function PUT(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { id, score, feedback } = await req.json()
  const updated = await prisma.homeworkSubmission.update({
    where: { id },
    data: { score: parseInt(score), feedback },
  })
  return NextResponse.json(updated)
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')?.replace('Bearer ', '')
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = verifyToken(auth)
  if (!payload || payload.role !== 'teacher') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const submissions = await prisma.homeworkSubmission.findMany({
    include: { homework: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(submissions)
}
