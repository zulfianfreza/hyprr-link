import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

export async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    })

    if (!currentUser) {
      return null
    }

    return currentUser
  } catch (error: any) {
    return null
  }
}
