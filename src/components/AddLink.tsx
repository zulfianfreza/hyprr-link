'use client'

import { clsxtm } from '@/utils/clsxtm'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiChevronDoubleRight, HiPlus, HiX } from 'react-icons/hi'
import { isValidUrl } from '@/utils/isValidUrl'
import { Input } from './atoms'
import { refetchLinks } from '@/lib/hotReloadIframe'
import { Links } from '.prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLink } from '@/api/links'

interface AddLinksProps {
  links: Links[]
}

export default function AddLink({ links }: AddLinksProps) {
  const [addLink, setAddLink] = useState<boolean>(false)
  const [url, setUrl] = useState('')
  const [displayDialog, setDisplayDialog] = useState(false)

  const queryClient = useQueryClient()

  const createLinkMutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries(['links'])
      refetchLinks()
    },
  })

  const handleCreateLink = () => {
    createLinkMutation.mutate({ label: 'Title', content: url, type: 'Link' })
    setAddLink(!addLink)
    setUrl('')
    toast.success('Success')
  }

  return (
    <>
      {!addLink ? (
        <>
          <div
            className=' bg-violet-700 px-4 py-2.5 text-white w-full h-12 rounded-full flex justify-center items-center gap-x-2 cursor-pointer'
            onClick={() => setAddLink(!addLink)}
          >
            <HiPlus />
            <p className=' font-semibold text-sm'>Add Link</p>
          </div>
        </>
      ) : (
        <div className=' rounded-[24px] bg-white overflow-hidden'>
          <div className=' flex flex-col py-6'>
            <div className=' px-6'>
              <div className=' flex justify-between'>
                <h1 className=' text-gray-900 font-bold'>Enter URL</h1>
                <div
                  onClick={() => setAddLink(!addLink)}
                  className=' p-2 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer hover:text-gray-900'
                >
                  <HiX size={20} />
                </div>
              </div>
              <div className='flex mt-2 gap-x-4'>
                <Input
                  label='URL'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button
                  className={clsxtm(
                    ' bg-violet-700 rounded-full px-8 text-white disabled:bg-neutral-300 font-semibold disabled:text-neutral-400'
                  )}
                  disabled={!isValidUrl(url)}
                  onClick={handleCreateLink}
                >
                  Add
                </button>
              </div>
            </div>
            <hr className=' my-6' />

            <div className=' px-6'>
              <div className=' flex justify-between text-sm'>
                <p className=' text-gray-600 font-semibold'>
                  Inspired by your interest
                </p>
                <div
                  className='flex items-center text-violet-700 gap-x-1 hover:underline cursor-pointer '
                  onClick={() => setDisplayDialog(!displayDialog)}
                >
                  <p className='  font-semibold '>Show all</p>
                  <HiChevronDoubleRight />
                </div>
              </div>
              <div className='mt-4 overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch]'>
                <div className=' flex gap-4'>
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className=' flex flex-col'>
                      <div className=' h-[88px] w-[88px] bg-gray-100'></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayDialog ? (
        <div className=' fixed inset-0 z-50 bg-black/30 backdrop-blur transition-all flex sm:items-center items-end justify-center p-0 sm:p-4'>
          <div
            className=' fixed inset-0 z-50'
            onClick={() => setDisplayDialog(!displayDialog)}
          ></div>
          <div className={clsxtm('fixed z-50 max-w-5xl w-full p-0 sm:p-4')}>
            <div className=' rounded-t-lg sm:rounded-[24px] overflow-y-auto bg-white translate transition-all duration-300 w-full h-auto mx-auto'>
              {/* Header */}
              <div className=' p-6 border-b relative'>
                <div className=' text-center'>
                  <p className=' font-semibold'>Add to hyprr.link</p>
                </div>
                <div className=' p-2 hover:bg-gray-100 rounded-lg cursor-pointer absolute -translate-y-1/2 top-1/2 right-4'>
                  <HiX className=' ' size={20} />
                </div>
              </div>
              <div className=' max-h-[500px] overflow-y-auto'>
                <div className=' h-[1000px]'></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
