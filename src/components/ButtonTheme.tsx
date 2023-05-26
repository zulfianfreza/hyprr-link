import { BUTTON_TYPE } from '@/types'
import { clsxtm } from '@/utils/clsxtm'
import React from 'react'

interface ButtonThemeProps {
  active: boolean
  onClick?: () => void
  type: BUTTON_TYPE
}

export default function ButtonTheme({
  active,
  onClick,
  type,
}: ButtonThemeProps) {
  let buttonStyle

  switch (type) {
    case BUTTON_TYPE.FILL:
      buttonStyle = 'bg-black'
      break
    case BUTTON_TYPE.FILLROUNDED:
      buttonStyle = 'bg-black rounded-lg'
      break
    case BUTTON_TYPE.FILLROUNDEDFULL:
      buttonStyle = 'bg-black rounded-full'
      break
    case BUTTON_TYPE.OUTLINE:
      buttonStyle = 'border border-black'
      break
    case BUTTON_TYPE.OUTLINEROUNDED:
      buttonStyle = 'border border-black rounded-lg'
      break
    case BUTTON_TYPE.OUTLINEROUNDEDFULL:
      buttonStyle = 'border border-black rounded-full'
      break
    case BUTTON_TYPE.SOFTSHADOW:
      buttonStyle = 'shadow-lg'
      break
    case BUTTON_TYPE.SOFTSHADOWROUNDED:
      buttonStyle = 'rounded-lg shadow-lg'
      break
    case BUTTON_TYPE.SOFTSHADOWROUNDEDFULL:
      buttonStyle = 'shadow-lg rounded-full'
      break
    case BUTTON_TYPE.HARDSHADOW:
      buttonStyle =
        'w-[calc(100%-4px)] h-10 border border-black shadow-[4px_4px_0_0_#000]'
      break
    case BUTTON_TYPE.HARDSHADOWROUNDED:
      buttonStyle =
        'w-[calc(100%-4px)] h-10 rounded-lg border border-black shadow-[4px_4px_0_0_#000]'
      break
    case BUTTON_TYPE.HARDSHADOWROUNDEDFULL:
      buttonStyle =
        'w-[calc(100%-4px)] h-10  rounded-full border border-black shadow-[4px_4px_0_0_#000]'
      break
    default:
      buttonStyle = 'bg-black'
      break
  }
  return (
    <div
      className={clsxtm(' flex-1 h-10', {
        ' ring-2 ring-violet-300 ring-offset-8 rounded': active,
      })}
    >
      <button
        className={clsxtm(' w-full h-full', buttonStyle)}
        onClick={onClick}
      />
    </div>
  )
}
