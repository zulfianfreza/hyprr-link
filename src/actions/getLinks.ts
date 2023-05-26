import { db } from '@/lib/db'
import { getCurrentUser } from './getCurrentUser'

export async function getLinks() {
  try {
    const currentUser = await getCurrentUser()

    const links = await db.links.findMany({
      where: {
        userId: currentUser?.id,
      },
    })

    return links
  } catch (error: any) {
    throw new Error(error)
  }
}
