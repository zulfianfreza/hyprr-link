'use client'

import { BACKGROUND_LIST, BACKGROUND_TYPE, BUTTON_TYPE } from '@/types'
import { clsxtm } from '@/utils/clsxtm'
import { Theme, Links } from '@prisma/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface HyprrLinksProps {
  links: Links[]
  theme: Theme
}

export default function HyprrLinks({ links, theme }: HyprrLinksProps) {
  const [datas, setDatas] = useState(links)
  const [style, setStyle] = useState(theme)
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'linksUpdated') {
        setDatas(event.data.links)
      } else if (event.data.type === 'themeUpdated') {
        setStyle(event.data.theme)
      }
    })
  }, [])

  const backgroundType = style ? style.backgroundType : BACKGROUND_TYPE.SOLID
  const buttonType = style ? style.buttonType : BUTTON_TYPE.HARDSHADOW
  const buttonColor = style ? style.buttonColor : '#ffffff'
  const buttonFontColor = style ? style.buttonFontColor : '#000000'
  const shadowColor = style ? style.shadowColor : '#000000'

  const defaultStyle = {
    backgroundColor: buttonColor,
    color: buttonFontColor,
  }
  let buttonStyle: {}

  if (BACKGROUND_LIST.includes(backgroundType)) {
    switch (buttonType) {
      case BUTTON_TYPE.HARDSHADOW:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: `5px 5px 0 0 ${shadowColor}`,
          border: `1px solid ${shadowColor}`,
        }
        break
      case BUTTON_TYPE.HARDSHADOWROUNDED:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: `5px 5px 0 0 ${shadowColor}`,
          border: `1px solid ${shadowColor}`,
          borderRadius: '8px',
        }
        break
      case BUTTON_TYPE.HARDSHADOWROUNDEDFULL:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: `5px 5px 0 0 ${shadowColor}`,
          border: `1px solid ${shadowColor}`,
          borderRadius: '9999px',
        }
        break
      case BUTTON_TYPE.FILL:
        buttonStyle = {
          ...defaultStyle,
        }
        break
      case BUTTON_TYPE.FILLROUNDED:
        buttonStyle = {
          ...defaultStyle,
          borderRadius: '8px',
        }
        break
      case BUTTON_TYPE.FILLROUNDEDFULL:
        buttonStyle = {
          ...defaultStyle,
          borderRadius: '9999px',
        }
        break
      case BUTTON_TYPE.OUTLINE:
        buttonStyle = {
          backgroundColor: 'transparent',
          color: buttonFontColor,
          border: `1px solid ${buttonColor}`,
        }
        break
      case BUTTON_TYPE.OUTLINEROUNDED:
        buttonStyle = {
          backgroundColor: 'transparent',
          color: buttonFontColor,
          border: `1px solid ${buttonColor}`,
          borderRadius: '8px',
        }
        break
      case BUTTON_TYPE.OUTLINEROUNDEDFULL:
        buttonStyle = {
          backgroundColor: 'transparent',
          color: buttonFontColor,
          border: `1px solid ${buttonColor}`,
          borderRadius: '9999px',
        }
        break
      case BUTTON_TYPE.SOFTSHADOW:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.3)',
        }
        break
      case BUTTON_TYPE.SOFTSHADOWROUNDED:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
        }
        break
      case BUTTON_TYPE.SOFTSHADOWROUNDEDFULL:
        buttonStyle = {
          ...defaultStyle,
          boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.3)',
          borderRadius: '9999px',
        }
        break
    }
  } else {
    switch (style.backgroundType) {
      case BACKGROUND_TYPE.WIREFRAME:
        buttonStyle = {
          ...defaultStyle,
          backgroundColor: '#ffffff',
          boxShadow: `5px 5px 0 0 ${shadowColor}`,
          border: `1px solid ${shadowColor}`,
          color: 'black',
        }
        break
      case BACKGROUND_TYPE.MINERAL_BLUE:
      case BACKGROUND_TYPE.MINERAL_GREEN:
      case BACKGROUND_TYPE.MINERAL_ORANGE:
      case BACKGROUND_TYPE.MINERAL_YELLOW:
        buttonStyle = {
          ...defaultStyle,
          backgroundColor: 'transparent',
          border: `1.2px solid #d1d5db`,
          borderRadius: '9999px',
          color: 'black',
        }
        break
    }
  }

  return (
    <div className=' w-full flex md:px-0 mt-8 gap-y-4 flex-col'>
      {[...datas].map((link, index) =>
        link.active ? (
          <Link
            href={link.content}
            target='_blank'
            key={index}
            className={clsxtm(
              ' w-full flex items-center justify-center px-4 h-12',
              {
                'w-[calc(100%-4px)]':
                  buttonType === BUTTON_TYPE.HARDSHADOW ||
                  buttonType === BUTTON_TYPE.HARDSHADOWROUNDED ||
                  buttonType === BUTTON_TYPE.HARDSHADOWROUNDEDFULL,
              }
              // buttonStyle
            )}
            style={buttonStyle}
          >
            <p className=' text-sm'>{link.label}</p>
          </Link>
        ) : null
      )}
    </div>
  )
}
