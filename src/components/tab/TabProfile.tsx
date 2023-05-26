'use client'

import { clsxtm } from '@/utils/clsxtm'
import React, { KeyboardEvent, useCallback, useState } from 'react'
import { Input } from '../atoms'
import { User } from '@prisma/client'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { refetchProfile } from '@/lib/hotReloadIframe'
import Avatar from '../Avatar'

interface TabProfileProps {
  user: User
}

export default function TabProfile({ user }: TabProfileProps) {
  const router = useRouter()
  const [profileTitle, setProfileTitle] = useState(
    user.profileTitle ? user.profileTitle : `@${user.username}`
  )
  const [bio, setBio] = useState(user.bio ? user.bio : '')

  const handleUpdateProfile = useCallback(async () => {
    const res = await axios.patch('/api/user', { profileTitle, bio })
    if (res.status !== 200) {
      toast.error('Something went wrong')
    }

    router.refresh()
    toast.success('Success')
    refetchProfile(res.data)
  }, [router, profileTitle, bio])

  const onBlurProfileTitle = () => {
    if (profileTitle === user.profileTitle) return null
    handleUpdateProfile()
  }

  const onKeyDownProfileTitle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdateProfile()
    }
  }

  const onBlurBio = () => {
    if (bio === user.bio) return null
    handleUpdateProfile()
  }

  return (
    <div className=' mt-8'>
      <div className=''>
        <h1 className=' font-bold text-xl text-gray-900'>Profile</h1>
      </div>
      <div className=' p-6 bg-white rounded-[24px] mt-2'>
        <div className='flex gap-x-4'>
          {/* <div className=' h-24 w-24 rounded-full bg-gray-900'></div> */}
          <Avatar src={user.image} className=' w-24 h-24' />
          <div className=' flex flex-col flex-1 gap-y-2'>
            <div className=' w-full h-12 flex text-sm justify-center cursor-pointer hover:bg-violet-800 rounded-full items-center text-white font-semibold bg-violet-700'>
              <p>Choose an image</p>
            </div>
            <div className=' w-full h-12 flex text-sm justify-center rounded-full items-center text-gray-900 cursor-pointer hover:bg-gray-200 font-semibold border border-gray-200'>
              <p>Remove</p>
            </div>
          </div>
        </div>
        <div className=' mt-4 flex flex-col gap-y-2'>
          <Input
            label='Profile Title'
            value={profileTitle}
            onChange={(e) => setProfileTitle(e.target.value)}
            onBlur={onBlurProfileTitle}
            onKeyDown={onKeyDownProfileTitle}
          />
          <div className=' w-full relative'>
            <textarea
              placeholder=' '
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              onBlur={onBlurBio}
              className={clsxtm(
                'peer w-full p-2 pt-6 h-24 text-sm pl-4 bg-gray-100 rounded-lg outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-black hover:ring-2 hover:ring-gray-200'
              )}
            ></textarea>
            <label
              className={clsxtm(
                'absolute text-sm duration-150 transform -translate-y-2.5 scale-[0.85] top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 text-gray-500 truncate'
              )}
            >
              Bio
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
