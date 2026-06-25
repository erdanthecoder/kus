import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function PUT(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'No token' }, { status: 401 })
  }
  const payload = verifyToken(auth.slice(7))
  if (!payload) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
  try {
    const data = await req.json()
    const allowed = ['name', 'language', 'background', 'avatar']
    const updateData: any = {}
    for (const key of allowed) {
      if (data[key] !== undefined) updateData[key] = data[key]
    }
    if (data.stars !== undefined) updateData.stars = data.stars
    if (data.housePoints !== undefined) updateData.housePoints = data.housePoints
    const user = await prisma.user.update({
      where: { id: payload.id },
      data: updateData,
    })
    return NextResponse.json({
      id: user.id, name: user.name, email: user.email, role: user.role,
      language: user.language, background: user.background, avatar: user.avatar,
      stars: user.stars, housePoints: user.housePoints,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}