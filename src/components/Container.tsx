'use client'

import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=' w-full md:w-[calc(100vw-316px)] lg:w-[calc(100vw-435px)] min-h-screen  xl:w-[calc(100vw-568px)] pt-24 md:pt-28 pb-16'>
      <div className=' max-w-[640px] w-full mx-auto p-4 h-full'>{children}</div>
    </div>
  )
}

export default Container
