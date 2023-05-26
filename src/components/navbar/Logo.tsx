'use client'

import { clsxtm } from '@/utils/clsxtm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href='/'
      className={clsxtm(
        ' mx-0 md:mx-4 inline-block w-10 h-10 relative',
        className
      )}
    >
      <Image
        alt='Pvrple Logo'
        src='/images/logo.png'
        fill={true}
        className=' cursor-pointer object-contain'
      />
      {/* <p className=" text-2xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
        hyprr
      </p> */}
    </Link>
  )
}

export default Logo
