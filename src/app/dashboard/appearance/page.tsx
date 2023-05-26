import { getCurrentUser } from '@/actions/getCurrentUser'
import { getTheme } from '@/actions/getTheme'
import Container from '@/components/Container'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/atoms/tabs'
import TabButtons from '@/components/tab/TabButtons'
import TabFonts from '@/components/tab/TabFonts'
import TabProfile from '@/components/tab/TabProfile'
import TabThemes from '@/components/tab/TabThemes'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Appearance',
}

export default async function AppearancePage() {
  const theme = await getTheme()
  const currentUser = await getCurrentUser()
  const TABS = [
    {
      label: 'Profile',
      value: 'profile',
    },
    {
      label: 'Themes & Backgrounds',
      value: 'themes',
    },
    {
      label: 'Icons & Buttons',
      value: 'buttons',
    },
    {
      label: 'Fonts',
      value: 'fonts',
    },
  ]
  return (
    <Container>
      <Tabs defaultValue='profile' className=' w-full'>
        <TabsList className='flex justify-between h-fit bg-white overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] rounded-full'>
          {TABS.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className=' data-[state=active]:bg-violet-700 flex-1 data-[state=active]:text-white py-2.5 px-8 rounded-full hover:bg-violet-700 hover:text-white'
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='profile'>
          <TabProfile user={currentUser} />
        </TabsContent>
        <TabsContent value='themes'>
          <TabThemes theme={theme} />
        </TabsContent>
        <TabsContent value='buttons'>
          <TabButtons theme={theme} />
        </TabsContent>
        <TabsContent value='fonts'>
          <TabFonts theme={theme} />
        </TabsContent>
      </Tabs>
    </Container>
  )
}
