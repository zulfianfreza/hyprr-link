import { db } from '@/lib/db'

export async function getUserByUsername(username: string) {
  const user = await db.user.findFirst({
    where: {
      username,
    },
  })
  if (!user) {
    return null
  }

  return user
}

export async function getThemeByUsername(username: string) {
  const user = await getUserByUsername(username)
  if (!user) {
    return null
  }
  const theme = await db.theme.findUnique({
    where: {
      userId: user?.id,
    },
  })

  return theme
}

export async function getLinksByUsername(username: string) {
  const user = await getUserByUsername(username)
  if (!user) {
    return null
  }
  const links = await db.links.findMany({
    where: {
      userId: user?.id,
    },
  })

  return links
}
