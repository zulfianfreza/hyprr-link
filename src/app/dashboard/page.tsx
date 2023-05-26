import { getLinks } from '@/actions/getLinks'
import DashboardScreen from '@/components/screen/DashboardScreen'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home - hyprr',
}

export default async function DashboardPage() {
  return <DashboardScreen />
}
