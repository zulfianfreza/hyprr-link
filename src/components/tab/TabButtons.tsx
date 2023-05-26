'use client'
import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Theme } from '@prisma/client'
import ButtonTheme from '../ButtonTheme'
import ColorPicker from '../ColorPicker'
import { BUTTON_TYPE } from '@/types'
import { refetchTheme } from '@/lib/hotReloadIframe'
// import { refetchTheme } from '@/lib/hotReloadIframe'

interface TabButtonsProps {
  theme: Theme | null
  // refetchLink?: () => void
}

export default function TabButtons({ theme }: TabButtonsProps) {
  const router = useRouter()
  const [displayButtonColorPicker, setDisplayButtonColorPicker] =
    useState(false)
  const [displayButtonFontColorPicker, setDisplayButtonFontColorPicker] =
    useState(false)
  const [displayShadowColorPicker, setDisplayShadowColorPicker] =
    useState(false)

  const [buttonType, setButtonType] = useState(
    theme?.buttonType ?? BUTTON_TYPE.FILL
  )
  const [buttonColor, setButtonColor] = useState(
    theme?.buttonColor ?? '#ffffff'
  )
  const [shadowColor, setShadowColor] = useState(
    theme?.shadowColor ?? '#000000'
  )
  const [buttonFontColor, setButtonFontColor] = useState(
    theme?.buttonFontColor ?? '#000000'
  )

  // const handleUpdateButtonType = async (type: string) => {
  //   const res = await axios.patch('/api/theme', {
  //     buttonType: type,
  //   })

  //   if (res.status !== 200) {
  //     toast.error('Something went wrong')
  //   }

  //   toast.success('Success')
  //   router.refresh()
  //   hotReloadIframe()
  // }

  // const handleUpdateButtonColor = async () => {
  //   const res = await axios.patch('/api/theme', {
  //     buttonColor,
  //   })
  //   if (res.status !== 200) {
  //     toast.error('Something went wrong')
  //   }
  //   setDisplayButtonColorPicker(!displayButtonColorPicker)
  //   toast.success('Success')
  //   router.refresh()
  //   hotReloadIframe()
  // }

  const handleUpdateButtonTheme = useCallback(
    async (buttonType?: BUTTON_TYPE) => {
      const res = await axios.patch('/api/theme', {
        buttonType,
        buttonColor,
        buttonFontColor,
        shadowColor,
      })
      if (res.status !== 200) {
        toast.error('Something went wrong')
      }
      toast.success('Success')
      router.refresh()
      refetchTheme()
    },
    [buttonColor, buttonFontColor, shadowColor, router]
  )

  const handleUpdateButtonType = (type: BUTTON_TYPE) => {
    // setButtonType(type)
    handleUpdateButtonTheme(type)
  }

  const handleUpdateButtonColor = () => {
    // setButtonColor(buttonColor)
    setDisplayButtonColorPicker(!displayButtonColorPicker)
    handleUpdateButtonTheme()
  }

  const handleUpdateButtonFontColor = () => {
    // setButtonFontColor(buttonFontColor)
    setDisplayButtonFontColorPicker(!displayButtonFontColorPicker)
    handleUpdateButtonTheme()
  }

  const handleUpdateShadowColor = () => {
    // setShadowColor(shadowColor)
    setDisplayShadowColorPicker(!displayShadowColorPicker)
    handleUpdateButtonTheme()
  }

  const onBlurButtonColor = () => {
    handleUpdateButtonTheme()
  }

  const onBlurButtonFontColor = () => {
    handleUpdateButtonTheme()
  }

  const onBlurShadowColor = () => {
    handleUpdateButtonTheme()
  }

  return (
    <>
      <div className=' mt-8'>
        <div className=''>
          <h1 className=' font-bold text-xl text-gray-900'>Buttons</h1>
        </div>
        <div className=' p-6 bg-white rounded-[24px] mt-2'>
          <div className=''>
            <p className=' text-gray-700 text-sm'>Fill</p>
            <div className=' flex justify-between gap-x-6 mt-2 items-center'>
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.FILL}
                type={BUTTON_TYPE.FILL}
                onClick={() => handleUpdateButtonType(BUTTON_TYPE.FILL)}
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.FILLROUNDED}
                type={BUTTON_TYPE.FILLROUNDED}
                onClick={() => handleUpdateButtonType(BUTTON_TYPE.FILLROUNDED)}
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.FILLROUNDEDFULL}
                type={BUTTON_TYPE.FILLROUNDEDFULL}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.FILLROUNDEDFULL)
                }
              />
            </div>
          </div>
          <div className=' mt-8'>
            <p className=' text-gray-700 text-sm'>Outline</p>
            <div className=' flex justify-between gap-x-6 mt-2'>
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.OUTLINE}
                type={BUTTON_TYPE.OUTLINE}
                onClick={() => handleUpdateButtonType(BUTTON_TYPE.OUTLINE)}
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.OUTLINEROUNDED}
                type={BUTTON_TYPE.OUTLINEROUNDED}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.OUTLINEROUNDED)
                }
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.OUTLINEROUNDEDFULL}
                type={BUTTON_TYPE.OUTLINEROUNDEDFULL}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.OUTLINEROUNDEDFULL)
                }
              />
            </div>
          </div>
          <div className=' mt-8'>
            <p className=' text-gray-700 text-sm'>Soft Shadow</p>
            <div className=' flex justify-between gap-x-6 mt-2'>
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.SOFTSHADOW}
                type={BUTTON_TYPE.SOFTSHADOW}
                onClick={() => handleUpdateButtonType(BUTTON_TYPE.SOFTSHADOW)}
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.SOFTSHADOWROUNDED}
                type={BUTTON_TYPE.SOFTSHADOWROUNDED}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.SOFTSHADOWROUNDED)
                }
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.SOFTSHADOWROUNDEDFULL}
                type={BUTTON_TYPE.SOFTSHADOWROUNDEDFULL}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.SOFTSHADOWROUNDEDFULL)
                }
              />
            </div>
          </div>
          <div className=' mt-8'>
            <p className=' text-gray-700 text-sm'>Hard Shadow</p>
            <div className=' flex justify-between gap-x-6 mt-4'>
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.HARDSHADOW}
                type={BUTTON_TYPE.HARDSHADOW}
                onClick={() => handleUpdateButtonType(BUTTON_TYPE.HARDSHADOW)}
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.HARDSHADOWROUNDED}
                type={BUTTON_TYPE.HARDSHADOWROUNDED}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.HARDSHADOWROUNDED)
                }
              />
              <ButtonTheme
                active={theme?.buttonType === BUTTON_TYPE.HARDSHADOWROUNDEDFULL}
                type={BUTTON_TYPE.HARDSHADOWROUNDEDFULL}
                onClick={() =>
                  handleUpdateButtonType(BUTTON_TYPE.HARDSHADOWROUNDEDFULL)
                }
              />
            </div>
          </div>
          <ColorPicker
            label='Button Color'
            displayColorPicker={displayButtonColorPicker}
            setDisplayColorPicker={() =>
              setDisplayButtonColorPicker(!displayButtonColorPicker)
            }
            onClickOutside={handleUpdateButtonColor}
            color={buttonColor}
            setColor={(colors) => setButtonColor(colors.hex)}
            onBlur={onBlurButtonColor}
            onChange={(e) => setButtonColor(e.target.value)}
          />
          <ColorPicker
            label='Button Font Color'
            displayColorPicker={displayButtonFontColorPicker}
            setDisplayColorPicker={() =>
              setDisplayButtonFontColorPicker(!displayButtonFontColorPicker)
            }
            onClickOutside={handleUpdateButtonFontColor}
            color={buttonFontColor}
            setColor={(colors) => setButtonFontColor(colors.hex)}
            onBlur={onBlurButtonFontColor}
            onChange={(e) => setButtonFontColor(e.target.value)}
          />
          {theme?.buttonType === BUTTON_TYPE.HARDSHADOW ||
          theme?.buttonType === BUTTON_TYPE.HARDSHADOWROUNDED ||
          theme?.buttonType === BUTTON_TYPE.HARDSHADOWROUNDEDFULL ? (
            <ColorPicker
              label='Shadow Color'
              displayColorPicker={displayShadowColorPicker}
              setDisplayColorPicker={() =>
                setDisplayShadowColorPicker(!displayShadowColorPicker)
              }
              onClickOutside={handleUpdateShadowColor}
              color={shadowColor}
              setColor={(colors) => setShadowColor(colors.hex)}
              onBlur={onBlurShadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
