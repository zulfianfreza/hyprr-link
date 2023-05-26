import { getCurrentUser } from '@/actions/getCurrentUser'
import { getLinks } from '@/actions/getLinks'
import {
  getLinksByUsername,
  getThemeByUsername,
  getUserByUsername,
} from '@/actions/getUsername'
import HyprrScreen from '@/components/screen/HyprrScreen'
import React from 'react'

interface IParams {
  params: {
    username: string
  }
}

export async function generateMetadata({ params }: IParams) {
  const user = await getUserByUsername(params.username)

  return {
    title: `${user?.profileTitle} - hyprr`,
  }
}

export default async function Page({ params }: IParams) {
  const links = await getLinksByUsername(params.username)
  const theme = await getThemeByUsername(params.username)
  const user = await getUserByUsername(params.username)

  return !links && !theme ? (
    <div className=' h-screen w-full flex justify-center items-center'>
      <div className=' max-w-lg w-full'>
        <p className=' text-center text-2xl font-semibold'>
          This profile is not yet verified. Please check back soon
        </p>
      </div>
    </div>
  ) : (
    <HyprrScreen links={links!} theme={theme!} user={user!} />
  )
}
