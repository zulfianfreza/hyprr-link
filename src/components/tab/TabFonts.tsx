'use client'
import { clsxtm } from '@/utils/clsxtm'
import React, { useCallback, useEffect, useState } from 'react'
import { Theme } from '@prisma/client'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { HiChevronDown, HiOutlineCheck, HiOutlineX, HiX } from 'react-icons/hi'
import ColorPicker from '../ColorPicker'
import { FONT_LIST } from '@/lib/data/font'
import { Input } from '../atoms'
import { getLinks } from '@/actions/getLinks'
import { refetchLinks, refetchTheme } from '@/lib/hotReloadIframe'

interface TabFontsProps {
  theme: Theme | null
}

export default function TabFonts({ theme }: TabFontsProps) {
  const router = useRouter()

  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [fontColor, setFontColor] = useState(theme?.fontColor ?? '#000000')
  const [displayDialog, setDisplayDialog] = useState(false)
  const [listFont, setListFont] = useState(FONT_LIST)
  const [searchFont, setSearchFont] = useState('')
  const [selectedFont, setSelectedFont] = useState('')
  const [style, setStyle] = useState(theme)

  const fontFamily = theme ? theme.fontFamily : 'Poppins'
  const themeFont = FONT_LIST.find((font) => font.label === fontFamily)

  const handleUpdateFontColor = useCallback(async () => {
    const res = await axios.patch('/api/theme', {
      fontColor: fontColor,
    })
    if (res.status !== 200) {
      toast.error('Something went wrong')
    }
    setDisplayColorPicker(!displayColorPicker)
    toast.success('Success')
    router.refresh()
    refetchTheme()
  }, [fontColor, router, displayColorPicker])

  const onBlurColor = async () => {
    const res = await axios.patch('/api/theme', {
      fontColor: fontColor,
    })
    if (res.status !== 200) {
      toast.error('Something went wrong')
    }
    toast.success('Success')
    router.refresh()
  }

  const handleSearchFont = (e: any) => {
    if (searchFont != '') {
      let results = [...FONT_LIST]
      results = results.filter((font) => {
        return font.label.toLowerCase().indexOf(searchFont.toLowerCase()) !== -1
      })
      setListFont(results)
    } else {
      setListFont(FONT_LIST)
    }

    setSearchFont(e.target.value)
  }

  const handleUpdateFont = useCallback(async () => {
    const res = await axios.patch('/api/theme', {
      fontFamily: selectedFont,
    })

    if (res.status !== 200) {
      toast.error('Something went wrong')
    }
    setDisplayDialog(!displayDialog)
    setSearchFont('')
    setSelectedFont('')
    toast.success('Success')
    router.refresh()
    refetchTheme()
  }, [selectedFont, displayDialog, router])

  return (
    <>
      <div className=' mt-8'>
        <div className=''>
          <h1 className=' font-bold text-xl text-gray-900'>Fonts</h1>
        </div>
        <div className=' p-6 bg-white rounded-[24px] mt-2'>
          <div className=''>
            <p className=' text-gray-700 text-sm'>Font</p>
            <div className='flex gap-x-2 mt-2'>
              <div className=' h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center '>
                <p className={themeFont?.value.className}>Aa</p>
              </div>
              <div
                className=' w-full h-12 border rounded-lg flex items-center justify-between px-4 cursor-pointer'
                onClick={() => setDisplayDialog(!displayDialog)}
              >
                <p className=' text-sm'>{fontFamily!}</p>
                <HiChevronDown size={16} />
              </div>
            </div>
          </div>
          <ColorPicker
            label='Color'
            color={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            setColor={(colors) => setFontColor(colors.hex)}
            onBlur={onBlurColor}
            onClickOutside={handleUpdateFontColor}
            displayColorPicker={displayColorPicker}
            setDisplayColorPicker={() =>
              setDisplayColorPicker(!displayColorPicker)
            }
          />
        </div>
      </div>
      {displayDialog ? (
        <div className=' fixed inset-0 z-50 bg-black/30 backdrop-blur transition-all flex sm:items-center items-end justify-center p-0 sm:p-4'>
          <div
            className=' fixed inset-0 z-50'
            onClick={() => {
              setSearchFont('')
              setSelectedFont('')
              setDisplayDialog(!displayDialog)
            }}
          ></div>
          <div className={clsxtm('fixed z-50 max-w-lg w-full p-0 sm:p-4')}>
            <div className=' rounded-t-lg sm:rounded-[24px] overflow-y-auto bg-white translate transition-all duration-300 w-full h-auto mx-auto'>
              {/* Header */}
              <div className=' p-4 border-b relative'>
                <div className=' text-center'>
                  <p className=' font-semibold'>Select Font</p>
                </div>
                <div
                  className=' p-2 hover:bg-gray-100 rounded-lg cursor-pointer absolute -translate-y-1/2 top-1/2 right-4'
                  onClick={() => {
                    setSearchFont('')
                    setSelectedFont('')
                    setDisplayDialog(!displayDialog)
                  }}
                >
                  <HiOutlineX className=' ' size={20} />
                </div>
              </div>
              <div className=' max-h-[360px] min-h-[360px] overflow-y-auto p-4 px-2'>
                <div className=' px-2 mb-4'>
                  <Input
                    label='Search by font name'
                    value={searchFont}
                    onChange={handleSearchFont}
                  />
                </div>
                {searchFont}
                {listFont.map((font, index) => (
                  <button
                    key={index}
                    className={clsxtm(
                      ' w-full h-12 rounded-full flex items-center justify-between cursor-pointer hover:bg-gray-100 px-6',
                      {
                        ' bg-violet-200 hover:bg-violet-200':
                          font.label === selectedFont,
                      }
                    )}
                    onClick={() => setSelectedFont(font.label)}
                  >
                    <p className={font.value.className}>{font.label}</p>
                    {font.label === selectedFont ? (
                      <p className=' font-light text-sm flex items-center gap-x-2'>
                        <HiOutlineCheck size={20} /> Selected
                      </p>
                    ) : null}
                  </button>
                ))}
              </div>
              <div className=' p-4'>
                <button
                  onClick={handleUpdateFont}
                  disabled={Object.keys(selectedFont).length === 0}
                  className=' w-full h-12 rounded-full bg-violet-700 flex items-center justify-center text-white disabled:bg-neutral-300 font-semibold disabled:text-neutral-400'
                >
                  <p className=' '>Save</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
