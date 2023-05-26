'use client'

import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation'
import { clsxtm } from '@/utils/clsxtm'

interface MenuItemProps {
  label: string
  href: string
  icon: IconType
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, icon: Icon }) => {
  const pathname = usePathname()

  const active =
    pathname === href
      ? pathname.split('/').includes(href.split('/')[1])
      : pathname.split('/').includes(href.split('/')[2])

  return (
    <Link
      href={href}
      className={clsxtm(
        ' self-auto px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 font-semibold flex items-center gap-x-1',
        {
          'text-gray-900': active,
        }
      )}
    >
      <Icon size={20} />
      {label}
    </Link>
  )
}

export default MenuItem
