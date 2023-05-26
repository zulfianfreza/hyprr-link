import { getLinks } from '@/api/links'
import { getTheme } from '@/api/theme'
import { Links, Theme, User } from '@prisma/client'
import axios from 'axios'

export const refetchLinks = async () => {
  const iframe = document.getElementById('preview-page') as HTMLIFrameElement

  const links = await getLinks()

  if (!iframe) return

  iframe.contentWindow?.postMessage(
    {
      type: 'linksUpdated',
      links,
    },
    '*'
  )
}

export const refetchProfile = (profile: User) => {
  const iframe = document.getElementById('preview-page') as HTMLIFrameElement

  // const links = await axios.get('/api/user/links');

  if (!iframe) return

  iframe.contentWindow?.postMessage(
    {
      type: 'profileUpdated',
      profile,
    },
    '*'
  )
}

export const refetchTheme = async () => {
  const iframe = document.getElementById('preview-page') as HTMLIFrameElement

  const theme = await getTheme()

  if (!iframe) return

  iframe.contentWindow?.postMessage(
    {
      type: 'themeUpdated',
      theme,
    },
    '*'
  )
}

interface IParams {
  links?: Links[] | null
  theme?: Theme | null
}

export const hotReloadIframe = async ({ links, theme }: IParams) => {
  const iframe = document.getElementById('preview-page') as HTMLIFrameElement

  if (!iframe) return

  iframe.contentWindow?.postMessage(
    {
      type: 'linksUpdated',
      links,
      theme,
    },
    '*'
  )
}
