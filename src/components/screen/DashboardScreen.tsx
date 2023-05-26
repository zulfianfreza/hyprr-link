'use client'
import { getLinks } from '@/api/links'
import AddLink from '@/components/AddLink'
import Container from '@/components/Container'
import { CardLink } from '@/components/card/CardLink'
import Logo from '@/components/navbar/Logo'
import { refetchLinks } from '@/lib/hotReloadIframe'
import { Links } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export default function DashboardScreen() {
  const {
    data: links,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  return (
    <Container>
      <div className=' w-full h-full'>
        <AddLink links={links} />
        {isLoading ? (
          <div className=' w-full h-full flex flex-col gap-y-4 justify-center items-center'>
            <p>Loading...</p>
          </div>
        ) : links.length === 0 ? (
          <div className=' w-full h-full flex flex-col gap-y-4 justify-center items-center'>
            <Logo className=' filter grayscale opacity-25' />
            <p className=' text-center font-bold text-gray-400 leading-tight'>
              Show the world who you are. <br />
              Add a link to get started.
            </p>
          </div>
        ) : (
          <div className=' mt-8 space-y-4'>
            {links.map((link: Links) => (
              <CardLink key={link.id} link={link} />
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
