import { getCurrentUser } from '@/actions/getCurrentUser'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await request.json()

  const {
    buttonType,
    buttonColor,
    buttonFontColor,
    shadowColor,
    backgroundPrimary,
    backgroundSecondary,
    backgroundType,
    fontColor,
    fontFamily,
  } = body

  const theme = await db.theme.upsert({
    create: {
      buttonType: 'hardshadow',
      buttonColor: '#ffffff',
      buttonFontColor: '#000000',
      shadowColor: '#000000',
      backgroundPrimary: '#ffffff',
      backgroundSecondary: '#ffffff',
      backgroundType: 'SOLID',
      fontColor: '#000000',
      fontFamily: 'Poppins',
      userId: currentUser.id,
    },
    where: {
      userId: currentUser.id,
    },
    update: {
      buttonType,
      buttonColor,
      buttonFontColor,
      shadowColor,
      backgroundPrimary,
      backgroundSecondary,
      backgroundType,
      fontColor,
      fontFamily,
    },
  })

  return NextResponse.json(theme)
}

export async function GET(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const theme = await db.theme.findUnique({
    where: {
      userId: currentUser?.id,
    },
  })

  return NextResponse.json(theme)
}
