'use client'

import { clsxtm } from '@/utils/clsxtm'
import React, { useCallback, useState } from 'react'
import { Theme } from '@prisma/client'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Balsamiq_Sans } from 'next/font/google'
import ColorPicker from '../ColorPicker'
import { BACKGROUND_TYPE } from '@/types'
import { refetchTheme } from '@/lib/hotReloadIframe'

const balsamiqSans = Balsamiq_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface TabThemesProps {
  theme: Theme | null
}

export default function TabThemes({ theme }: TabThemesProps) {
  const router = useRouter()
  const [
    displayBackgroundPrimaryColorPicker,
    setDisplayBackgroundPrimaryColorPicker,
  ] = useState(false)
  const [backgroundPrimary, setBackgroundPrimary] = useState(
    theme?.backgroundPrimary ? theme?.backgroundPrimary : '#ffffff'
  )
  const [
    displayBackgroundSecondaryColorPicker,
    setDisplayBackgroundSecondaryColorPicker,
  ] = useState(false)
  const [backgroundSecondary, setBackgroundSecondary] = useState(
    theme?.backgroundSecondary ?? '#ffffff'
  )

  const handleUpdateBgTheme = useCallback(
    async (backgroundType?: BACKGROUND_TYPE) => {
      const res = await axios.patch('/api/theme', {
        backgroundType,
        backgroundPrimary,
        backgroundSecondary,
      })
      if (res.status !== 200) {
        toast.error('Something went wrong')
      }
      toast.success('Success')
      router.refresh()
      refetchTheme()
    },
    [backgroundPrimary, router, backgroundSecondary]
  )

  const handleUpdatebackgroundPrimary = async () => {
    setDisplayBackgroundPrimaryColorPicker(!displayBackgroundPrimaryColorPicker)
    handleUpdateBgTheme()
  }

  const handleUpdatebackgroundSecondary = async () => {
    setDisplayBackgroundSecondaryColorPicker(
      !displayBackgroundSecondaryColorPicker
    )
    handleUpdateBgTheme()
  }

  const handleUpdateBgType = async (type: BACKGROUND_TYPE) => {
    handleUpdateBgTheme(type)
  }

  const onBlurbackgroundPrimary = () => {
    handleUpdateBgTheme()
  }

  const onBlurbackgroundSecondary = () => {
    handleUpdateBgTheme()
  }
  return (
    <>
      <div className=' mt-8'>
        <div className=''>
          <h1 className=' font-bold text-xl text-gray-900'>Themes</h1>
        </div>
        <div className=' p-6 bg-white rounded-[24px] mt-2'>
          <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
              <div className=' border-[1.5px] aspect-[10/16] rounded-xl w-full flex justify-center items-center text-center uppercase border-dashed border-black'>
                <p className=' text-lg'>
                  Create <br />
                  Your <br />
                  Own
                </p>
              </div>
              <p className=' text-gray-700 text-sm'>Custom</p>
            </div>
            <div
              className={clsxtm(
                'flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              )}
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.WIREFRAME)}
            >
              <div
                className={clsxtm(
                  ' w-full aspect-[10/16]',
                  balsamiqSans.className,
                  {
                    'ring-2 ring-violet-300 rounded-lg p-2':
                      theme?.backgroundType === BACKGROUND_TYPE.WIREFRAME,
                  }
                )}
              >
                <div className=' bg-white border border-gray-200 w-full h-full rounded-lg '>
                  <div className=' flex flex-col p-4 gap-y-2 justify-center h-full'>
                    <div className=' w-full h-4 border border-black shadow-[2px_2px_0_0_#000000] flex items-center justify-center'>
                      <p className={' text-[8px]'}>Link</p>
                    </div>
                    <div className=' w-full h-4 border border-black shadow-[2px_2px_0_0_#000000] flex items-center justify-center'>
                      <p className={' text-[8px]'}>Link</p>
                    </div>
                    <div className=' w-full h-4 border border-black shadow-[2px_2px_0_0_#000000] flex items-center justify-center'>
                      <p className={' text-[8px]'}>Link</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className=' text-gray-700 text-sm'>Wireframe</p>
            </div>
            <div
              className={clsxtm(
                'flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              )}
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.MINERAL_BLUE)}
            >
              <div
                className={clsxtm(
                  ' w-full aspect-[10/16]',
                  balsamiqSans.className,
                  {
                    'ring-2 ring-violet-300 rounded-lg p-2':
                      theme?.backgroundType === BACKGROUND_TYPE.MINERAL_BLUE,
                  }
                )}
              >
                <div className=' bg-[#e0f6ff] border border-gray-200 w-full h-full rounded-lg '>
                  <div className=' flex flex-col p-4 gap-y-2 justify-center h-full'>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                  </div>
                </div>
              </div>
              <p className=' text-gray-700 text-sm'>Mineral Blue</p>
            </div>
            <div
              className={clsxtm(
                'flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              )}
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.MINERAL_GREEN)}
            >
              <div
                className={clsxtm(
                  ' w-full aspect-[10/16]',
                  balsamiqSans.className,
                  {
                    'ring-2 ring-violet-300 rounded-lg p-2':
                      theme?.backgroundType === BACKGROUND_TYPE.MINERAL_GREEN,
                  }
                )}
              >
                <div className=' bg-[#e0faee] border border-gray-200 w-full h-full rounded-lg '>
                  <div className=' flex flex-col p-4 gap-y-2 justify-center h-full'>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                  </div>
                </div>
              </div>
              <p className=' text-gray-700 text-sm'>Mineral Green</p>
            </div>
            <div
              className={clsxtm(
                'flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              )}
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.MINERAL_ORANGE)}
            >
              <div
                className={clsxtm(
                  ' w-full aspect-[10/16]',
                  balsamiqSans.className,
                  {
                    'ring-2 ring-violet-300 rounded-lg p-2':
                      theme?.backgroundType === BACKGROUND_TYPE.MINERAL_ORANGE,
                  }
                )}
              >
                <div className=' bg-[#ffeee1] border border-gray-200 w-full h-full rounded-lg '>
                  <div className=' flex flex-col p-4 gap-y-2 justify-center h-full'>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                  </div>
                </div>
              </div>
              <p className=' text-gray-700 text-sm'>Mineral Orange</p>
            </div>
            <div
              className={clsxtm(
                'flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              )}
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.MINERAL_YELLOW)}
            >
              <div
                className={clsxtm(
                  ' w-full aspect-[10/16]',
                  balsamiqSans.className,
                  {
                    'ring-2 ring-violet-300 rounded-lg p-2':
                      theme?.backgroundType === BACKGROUND_TYPE.MINERAL_YELLOW,
                  }
                )}
              >
                <div className=' bg-[#fff8e0] border border-gray-200 w-full h-full rounded-lg '>
                  <div className=' flex flex-col p-4 gap-y-2 justify-center h-full'>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                    <div className=' w-full h-4 border-[1.2px] rounded-full border-gray-300'></div>
                  </div>
                </div>
              </div>
              <p className=' text-gray-700 text-sm'>Mineral Yellow</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-8'>
        <div className=''>
          <h1 className=' font-bold text-xl text-gray-900'>Backgrounds</h1>
        </div>
        <div className=' p-6 bg-white rounded-[24px] mt-2'>
          <div className='grid grid-cols-4 gap-6'>
            <div
              className='flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.SOLID)}
            >
              <div
                className={clsxtm(' w-full aspect-[10/16]', {
                  'ring-2 ring-violet-300 rounded-lg p-2':
                    theme?.backgroundType === BACKGROUND_TYPE.SOLID,
                })}
              >
                <div className=' bg-gray-700 w-full h-full rounded-lg '></div>
              </div>
              <p className=' text-gray-700 text-sm'>Solid</p>
            </div>
            <div
              className='flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.GRADIENT)}
            >
              <div
                className={clsxtm(' w-full aspect-[10/16]', {
                  'ring-2 ring-violet-300 rounded-lg p-2':
                    theme?.backgroundType === BACKGROUND_TYPE.GRADIENT,
                })}
              >
                <div className=' bg-gradient-to-tr h-full from-amber-500 to-pink-500 w-full rounded-xl bg-violet-700  '></div>
              </div>
              <p className=' text-gray-700 text-sm'>Gradient</p>
            </div>
            <div
              className='flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.CUBE)}
            >
              <div
                className={clsxtm(' w-full aspect-[10/16]', {
                  'ring-2 ring-violet-300 rounded-lg p-2':
                    theme?.backgroundType === BACKGROUND_TYPE.CUBE,
                })}
              >
                <div className=' aspect-[10/16] rounded-xl w-full h-full bg-cube'></div>
              </div>
              <p className=' text-gray-700 text-sm'>Cube</p>
            </div>
            <div
              className='flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.COLORFUL)}
            >
              <div
                className={clsxtm(' w-full aspect-[10/16]', {
                  'ring-2 ring-violet-300 rounded-lg p-2':
                    theme?.backgroundType === BACKGROUND_TYPE.COLORFUL,
                })}
              >
                <div className=' aspect-[10/16] rounded-xl w-full h-full bg-colorful'></div>
              </div>
              <p className=' text-gray-700 text-sm'>Colorful</p>
            </div>
            <div
              className='flex flex-col justify-center items-center gap-y-2 cursor-pointer'
              onClick={() => handleUpdateBgType(BACKGROUND_TYPE.POLKA)}
            >
              <div
                className={clsxtm(' w-full aspect-[10/16]', {
                  'ring-2 ring-violet-300 rounded-lg p-2':
                    theme?.backgroundType === BACKGROUND_TYPE.POLKA,
                })}
              >
                <div className=' aspect-[10/16] rounded-xl w-full h-full bg-polka'></div>
              </div>
              <p className=' text-gray-700 text-sm'>Polka</p>
            </div>
          </div>
          {theme?.backgroundType === BACKGROUND_TYPE.SOLID ||
          theme?.backgroundType === BACKGROUND_TYPE.GRADIENT ? (
            <ColorPicker
              label='Background'
              displayColorPicker={displayBackgroundPrimaryColorPicker}
              setDisplayColorPicker={() =>
                setDisplayBackgroundPrimaryColorPicker(
                  !displayBackgroundPrimaryColorPicker
                )
              }
              onClickOutside={handleUpdatebackgroundPrimary}
              color={backgroundPrimary}
              setColor={(colors) => setBackgroundPrimary(colors.hex)}
              onBlur={onBlurbackgroundPrimary}
              onChange={(e) => setBackgroundPrimary(e.target.value)}
            />
          ) : null}
          {theme?.backgroundType === BACKGROUND_TYPE.GRADIENT ? (
            <ColorPicker
              label='Background'
              displayColorPicker={displayBackgroundSecondaryColorPicker}
              setDisplayColorPicker={() =>
                setDisplayBackgroundSecondaryColorPicker(
                  !displayBackgroundSecondaryColorPicker
                )
              }
              onClickOutside={handleUpdatebackgroundSecondary}
              color={backgroundSecondary}
              setColor={(colors) => setBackgroundSecondary(colors.hex)}
              onBlur={onBlurbackgroundSecondary}
              onChange={(e) => setBackgroundSecondary(e.target.value)}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
