import { getCurrentUser } from '@/actions/getCurrentUser'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await request.json()

  const { username, profileTitle, bio } = body

  const user = await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      username,
      profileTitle,
      bio,
    },
  })

  return NextResponse.json(user)
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.error()
  }

  const currentUser = await db.user.findUnique({
    where: { email: session.user.email },
  })

  if (!currentUser) {
    return NextResponse.error()
  }

  return NextResponse.json(currentUser)
}
