'use client'
import { Theme, Links, User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { Balsamiq_Sans, Space_Mono } from 'next/font/google'
import { clsxtm } from '@/utils/clsxtm'
import { BACKGROUND_LIST, BACKGROUND_TYPE } from '@/types'
import {
  FONT_LIST,
  balsamiqSans,
  plusJakartaSans,
  poppins,
  spaceMono,
} from '@/lib/data/font'
import HyprrLinks from '../HyprrLinks'
import Avatar from '../Avatar'
import Logo from '../navbar/Logo'

interface HyprrScreenProps {
  theme: Theme
  links: Links[]
  user: User
}

export default function HyprrScreen({ theme, links, user }: HyprrScreenProps) {
  const [style, setStyle] = useState(theme)
  const [profile, setProfile] = useState(user)

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'themeUpdated') {
        setStyle(event.data.theme)
      } else if (event.data.type === 'profileUpdated') {
        setProfile(event.data.profile)
      }
    })
  }, [])

  let themeStyle

  let themeClass

  const fontFamily = style ? style.fontFamily : 'Poppins'
  const fontColor = style ? style.fontColor : '#000000'
  const backgroundType = style ? style.backgroundType : BACKGROUND_TYPE.SOLID
  const backgroundPrimary = style ? style.backgroundPrimary : '#ffffff'
  const backgroundSecondary = style ? style.backgroundSecondary : '#ffffff'
  const profileTitle = profile.profileTitle
    ? profile.profileTitle
    : `@${profile.username}`
  const bio = profile.bio ? profile.bio : profile.bio

  const themeFont = FONT_LIST.find((font) => font.label === fontFamily)?.value
    .className

  const defaultTheme = {
    color: fontColor ? fontColor : '#000000',
  }

  if (
    [
      BACKGROUND_TYPE.SOLID as string,
      BACKGROUND_TYPE.GRADIENT as string,
    ].includes(backgroundType)
  ) {
    switch (backgroundType) {
      case BACKGROUND_TYPE.SOLID:
        themeStyle = {
          ...defaultTheme,
          backgroundColor: backgroundPrimary ? backgroundPrimary : '#ffffff',
        }
        themeClass = themeFont
        break
      case BACKGROUND_TYPE.GRADIENT:
        themeStyle = {
          ...defaultTheme,
          backgroundImage: `linear-gradient(to top right, ${backgroundPrimary}, ${backgroundSecondary})`,
        }
        themeClass = themeFont
        break
    }
  } else {
    switch (backgroundType) {
      case BACKGROUND_TYPE.CUBE:
        themeClass = `bg-cube ${themeFont}`
        themeStyle = {
          ...defaultTheme,
        }
        break
      case BACKGROUND_TYPE.COLORFUL:
        themeClass = `bg-colorful ${themeFont}`
        themeStyle = {
          ...defaultTheme,
        }
        break
      case BACKGROUND_TYPE.POLKA:
        themeClass = `bg-polka ${themeFont}`
        themeStyle = {
          ...defaultTheme,
        }
        break
      case BACKGROUND_TYPE.WIREFRAME:
        themeClass = `${balsamiqSans.className} text-black`
        break
      case BACKGROUND_TYPE.MINERAL_BLUE:
        themeClass = `bg-[#e0f6ff] ${spaceMono.className} text-black`

        break
      case BACKGROUND_TYPE.MINERAL_GREEN:
        themeClass = `bg-[#e0faee] ${spaceMono.className} text-black`

        break
      case BACKGROUND_TYPE.MINERAL_ORANGE:
        themeClass = `bg-[#ffeee1] ${spaceMono.className} text-black`

        break
      case BACKGROUND_TYPE.MINERAL_YELLOW:
        themeClass = `bg-[#fff8e0] ${spaceMono.className} text-black`

        break
    }
  }

  return (
    <div
      className={clsxtm(
        ' w-full min-h-screen bg-white flex flex-col justify-between',
        themeClass
      )}
      style={themeStyle}
    >
      <div className=' max-w-xl mx-auto pt-16 relative p-4 pb-0 w-full'>
        <div className=' flex flex-col md:flex-row items-center justify-center gap-y-4'>
          <div className=' flex flex-col justify-center items-center gap-x-8'>
            <Avatar src={user.image} className=' h-20 w-20' />
            <div className=' flex flex-col gap-y-2 mt-2 flex-1'>
              <div className=' text-center md:text-start'>
                <p className=' text-xl font-bold '>{profileTitle}</p>
                <p className=' font-medium text-center'>{bio}</p>
              </div>
            </div>
          </div>
        </div>
        <HyprrLinks links={links} theme={theme} />
      </div>
      <div
        className={clsxtm(
          ' py-8 flex items-center  justify-center justify-self-end font-semibold gap-x-1',
          plusJakartaSans.className
        )}
      >
        <Logo className='' />
        <p className={clsxtm(' text-gray-800', plusJakartaSans.className)}>
          hyprr
        </p>
      </div>
    </div>
  )
}
