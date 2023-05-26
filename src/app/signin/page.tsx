import Link from 'next/link'
import React from 'react'
import SignInForm from '@/components/SignInForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - hyprr',
}

export default function SignPage() {
  return (
    <div className=' bg-white min-h-screen flex'>
      <div className=' w-full md:w-2/3'>
        <div className=' p-10 flex justify-center'>
          <div className=' pt-28 w-[640px] flex justify-center flex-col p-10'>
            <div className=' text-center'>
              <h1 className=' text-4xl font-bold'>Welcome Back</h1>
              <p className=' text-gray-500 text-sm'>Login to your hyprr.link</p>
            </div>
            <SignInForm />
            <p className=' text-center mt-8 text-sm'>
              Don&apos; have an account?{' '}
              <Link href='/' className=' text-violet-700 underline'>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=' hidden md:flex w-1/3 bg-violet-200 h-screen'></div>
    </div>
  )
}
