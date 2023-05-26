'use client'
import Link from 'next/link'
import React from 'react'
import { HiExternalLink } from 'react-icons/hi'

interface PreviewPageProps {
  domain: string
}

export default function PreviewPage({ domain }: PreviewPageProps) {
  return (
    <div className='p-4 border-l-[1px] fixed right-0 h-screen hidden md:block border-gray-200 md:w-[316px] lg:w-[435px] xl:w-[568px] mt-20'>
      <div className=' flex items-center justify-center -translate-y-24 flex-col relative z-50'>
        <div className=' w-[352px] h-[724px] rounded-[56px] bg-black md:scale-50 lg:scale-[0.6] xl:scale-[0.65] relative translate-y-6 overflow-hidden z-10'>
          <div className=' relative h-full w-full p-3 overflow-hidden'>
            <div className=' w-[100px] h-6 bg-black rounded-full absolute top-5 left-1/2 -translate-x-1/2'></div>
            <iframe
              src={domain}
              className=' h-full w-full rounded-[48px]'
              id='preview-page'
            />
          </div>
        </div>
        <div className=' absolute bottom-8 z-50'>
          {/* <Link
            href={`${process.env.BASE_URL}/julianreza`}
            target="_blank"
            className=" flex text-violet-900 font-semibold cursor-pointer items-center gap-x-1 hover:underline border rounded-lg px-4 py-2.5"
          >
            <HiExternalLink /> {process.env.BASE_URL}/julianreza
          </Link> */}
        </div>
      </div>
    </div>
  )
}
