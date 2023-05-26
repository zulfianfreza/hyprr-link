import { db } from '@/lib/db'
import { getCurrentUser } from './getCurrentUser'

export async function getTheme() {
  //   try {
  const currentUser = await getCurrentUser()

  const theme = await db.theme.findUnique({
    where: {
      userId: currentUser?.id,
    },
  })

  return theme
  //   } catch (error: any) {
  //     throw new Error(error)
  //   }
}
