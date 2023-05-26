import Container from '@/components/Container'
import Logo from '@/components/navbar/Logo'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Settings - hyprr',
}
export const revalidate = 60

export default function SettingsPage() {
  return (
    <Container>
      <div className=' w-full h-full flex flex-col gap-y-4 justify-center items-center'>
        <Logo className=' filter grayscale opacity-25' />
        <p className=' text-center font-bold text-gray-400 leading-tight'>
          Coming Very Soon.
        </p>
      </div>
    </Container>
  )
}
