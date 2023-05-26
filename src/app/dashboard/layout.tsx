import { getCurrentUser } from '@/actions/getCurrentUser'
import PreviewPage from '@/components/PreviewPage'
import Navbar from '@/components/navbar/Navbar'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  if (currentUser?.username === null || currentUser?.username === '') {
    redirect('/username')
  }

  return (
    <>
      <Navbar currentUser={currentUser} />
      <div className=' flex bg-gray-100'>
        {children}
        <PreviewPage
          domain={`${process.env.BASE_URL}${currentUser?.username}`}
        />
      </div>
    </>
  )
}
