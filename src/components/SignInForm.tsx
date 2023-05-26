'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { Input } from './atoms'

export default function SignInForm() {
  return (
    <>
      <div className=' space-y-3 mt-16'>
        <Input label='Username' />
        <Input label='Password' />
      </div>
      <p className=' text-violet-700 underline mt-4 text-sm'>
        Forgot password?
      </p>
      <div className=' flex flex-col mt-4 items-center gap-y-2'>
        <div className=' w-full h-12 rounded-full bg-violet-700 text-white font-semibold flex justify-center items-center text-sm'>
          <p>Login</p>
        </div>
        <p className=' text-sm'>or</p>
        <div
          className=' w-full h-12 rounded-full border border-gray-200 flex justify-center items-center text-sm font-semibold gap-x-2 cursor-pointer'
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <FcGoogle size={24} />
          <p>Continue with Google</p>
        </div>
      </div>
    </>
  )
}
