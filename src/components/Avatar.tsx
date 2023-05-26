'use client'

import { clsxtm } from '@/utils/clsxtm'
import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src?: string | null | undefined
  initial?: string
  className?: string
}

export default function Avatar({ src, initial, className }: AvatarProps) {
  return src ? (
    <div
      className={clsxtm(
        ' w-10 h-10 relative rounded-full overflow-hidden',
        className
      )}
    >
      <Image src={src!} alt='Avatar' fill={true} />
    </div>
  ) : (
    <div
      className={clsxtm(
        ' h-10 w-10 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center justify-center',
        className
      )}
    >
      <p>{initial}</p>
    </div>
  )
}
