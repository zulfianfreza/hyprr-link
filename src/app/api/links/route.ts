import { getCurrentUser } from '@/actions/getCurrentUser'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await request.json()

  const { type, label, content } = body

  const links = await db.links.create({
    data: {
      type,
      label,
      content,
      active: true,
      userId: currentUser.id,
    },
  })

  return NextResponse.json(links)
}

export async function GET(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const links = await db.links.findMany({
    where: {
      userId: currentUser.id,
    },
  })

  return NextResponse.json(links)
}
