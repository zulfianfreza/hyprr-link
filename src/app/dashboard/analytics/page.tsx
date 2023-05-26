import Container from '@/components/Container'
import Logo from '@/components/navbar/Logo'
import { Metadata } from 'next'
import React from 'react'

export const metadata = {
  title: 'Analytics',
  openGraph: {
    title: 'Analytics',
  },
}

export default function AnalyticsPage() {
  return (
    <Container>
      <div className=' w-full h-full flex flex-col gap-y-4 justify-center items-center'>
        <Logo className=' filter grayscale opacity-25' />
        <p className=' text-center font-bold text-gray-400 leading-tight'>
          Coming Soon.
        </p>
      </div>
    </Container>
  )
}
