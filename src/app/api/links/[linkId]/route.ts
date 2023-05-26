import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

interface IParams {
  linkId: string
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  const body = await request.json()

  const { label, content, active } = body

  const link = await db.links.update({
    where: {
      id: params.linkId,
    },
    data: {
      label,
      content,
      active,
    },
  })

  return NextResponse.json(link)
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const link = await db.links.delete({
    where: {
      id: params.linkId,
    },
  })

  return NextResponse.json(link)
}
