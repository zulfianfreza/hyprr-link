import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div className=' min-h-screen w-full flex justify-center items-center'>
      <Link
        href='/signin'
        className=' py-2.5 px-4 border rounded-lg cursor-pointer'
      >
        Sign In
      </Link>
    </div>
  )
}
