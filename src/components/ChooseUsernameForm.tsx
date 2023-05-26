'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ChooseUsernameForm() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const handleSubmit = useCallback(async () => {
    const res = await axios.patch('/api/user', {
      username,
    })

    if (res.status !== 200) {
      toast.error('Something went wrong')
    }

    router.push('/dashboard')
  }, [username, router])
  return (
    <>
      <div className=' space-y-3 mt-16'>
        <div className=' w-full bg-gray-100 h-12 rounded-lg focus-within:ring-2 focus-within:ring-black hover:ring-2 hover:ring-gray-300 hover:focus-within:ring-2 hover:focus-within:ring-black'>
          <div className=' flex items-center h-full gap-x-1'>
            <label htmlFor='' className=' text-sm text-gray-500 ml-4'>
              hyprr.link/
            </label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=' w-full bg-transparent h-12 pr-4 focus:outline-none'
            />
          </div>
        </div>
      </div>
      <p className=' mt-4 text-gray-500 text-sm text-center'>
        By continuing, you agree to receive offers, news and update from hyprr.
      </p>
      <div className=' flex flex-col mt-8 items-center gap-y-2'>
        <div
          className=' w-full h-12 rounded-full bg-violet-700 text-white font-semibold flex justify-center items-center cursor-pointer'
          onClick={handleSubmit}
        >
          <p>Continue</p>
        </div>
      </div>
    </>
  )
}
