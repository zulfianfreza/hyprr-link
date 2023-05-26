import ChooseUsernameForm from '@/components/ChooseUsernameForm'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Username - hyprr',
}
export const revalidate = 60

export default function UsernamePage() {
  return (
    <div className=' bg-white min-h-screen flex'>
      <div className=' w-full md:w-2/3'>
        <div className=' p-10 flex justify-center'>
          <div className=' pt-28 w-[640px] flex justify-center flex-col p-10'>
            <div className=' text-center'>
              <h1 className=' text-4xl font-bold'>Welcome to hyprr.link</h1>
              <p className=' text-gray-500'>Choose your hyprr username.</p>
            </div>
            <ChooseUsernameForm />
            <p className=' text-center mt-4 text-sm'>
              Already have an account?{' '}
              <Link href='/login' className=' text-violet-700 underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=' hidden md:flex w-1/3 bg-violet-900 h-screen'></div>
    </div>
  )
}
