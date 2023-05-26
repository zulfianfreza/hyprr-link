'use client'

import React, { Fragment } from 'react'
import MenuItem from './MenuItem'
import {
  HiExternalLink,
  HiOutlineChartBar,
  HiOutlineChevronDown,
  HiOutlineCog,
  HiOutlineLink,
  HiOutlineLogout,
  HiOutlinePuzzle,
  HiOutlineShare,
} from 'react-icons/hi'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react'
import { User } from '@prisma/client'
import Avatar from '../Avatar'
import Logo from './Logo'

interface NavbarProps {
  currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const MENU = [
    {
      label: 'Links',
      href: '/dashboard',
      icon: HiOutlineLink,
    },
    {
      label: 'Appearance',
      href: '/dashboard/appearance',
      icon: HiOutlinePuzzle,
    },
    {
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: HiOutlineChartBar,
    },

    {
      label: 'Settings',
      href: '/dashboard/settings',
      icon: HiOutlineCog,
    },
  ]

  return (
    <>
      <div className=' p-0  fixed w-full bg-gray-100 md:p-2 pb-0 md:pb-0 z-50'>
        <div className=' flex items-center w-full bg-white shadow-sm rounded-none md:rounded-full border-b-[1px] md:border-b-0 px-3 py-3'>
          <Logo />
          <div className=' gap-x-2 hidden md:flex w-full overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] '>
            {MENU.map((menu, index) => (
              <MenuItem
                key={index}
                label={menu.label}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </div>
          <div className='flex flex-row-reverse items-center gap-x-4 pl-4 flex-1'>
            <div className='flex gap-x-2 flex-row-reverse items-center'>
              <Popover className=' relative h-10'>
                {({ open }) => (
                  <>
                    <Popover.Button className=' rounded-full focus:ring-2 focus:ring-black focus:ring-offset-2'>
                      <Avatar src={currentUser?.image} />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute right-0 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-xs'>
                        <div className='overflow-hidden rounded-[20px] shadow-lg ring-1 ring-black ring-opacity-5'>
                          <div className=' bg-white p-6'>
                            <div className=' flex gap-x-6 items-center'>
                              <div className=''>
                                <Avatar src={currentUser?.image} />
                              </div>
                              <div className=''>
                                <h1 className=' font-bold text-lg'>
                                  @{currentUser?.username}
                                </h1>
                                <p className=' text-sm text-gray-500'>
                                  {process.env.NEXT_PUBLIC_BASE_URL}
                                  {currentUser?.username}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=' p-2 pb-4 bg-white'>
                            <div
                              className='flex hover:bg-gray-100 h-12 px-4 rounded-2xl items-center cursor-pointer gap-x-4 text-gray-700'
                              onClick={() =>
                                signOut({ callbackUrl: '/signin' })
                              }
                            >
                              <HiOutlineLogout size={20} />
                              <p>Logout</p>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}${currentUser?.username}`}
                target='_blank'
                className=' px-4 py-2 text-sm pr-5 rounded-full bg-violet-700 flex h-10 font-semibold items-center gap-x-2 text-white cursor-pointer hover:bg-violet-600'
              >
                <HiExternalLink />
                Visit
              </Link>
              <div className=' px-4 py-2 pr-5 text-sm rounded-full border-[1px] border-violet-700 h-10 font-semibold flex items-center gap-x-2 text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white'>
                <HiOutlineShare />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
