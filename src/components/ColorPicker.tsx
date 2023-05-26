import React from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import { Input } from './atoms'

interface ColorPickerProps {
  label: string
  displayColorPicker?: boolean
  setDisplayColorPicker?: () => void
  onClickOutside?: () => void
  color?: string
  setColor?: (colors: ColorResult) => void
  onBlur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ColorPicker({
  label,
  displayColorPicker,
  setDisplayColorPicker,
  onClickOutside,
  color,
  setColor,
  onBlur,
  onChange,
}: ColorPickerProps) {
  return (
    <div className=' mt-8'>
      <p className=' text-gray-700 text-sm'>{label}</p>

      <div className='flex mt-2 gap-x-2 relative'>
        {displayColorPicker ? (
          <>
            <div className=' fixed inset-0' onClick={onClickOutside}></div>
            <ChromePicker
              className=' absolute z-20 bottom-6 left-6'
              onChange={setColor}
              color={color}
            />
          </>
        ) : null}
        <div
          className={` h-12 w-12 rounded-lg overflow-hidden border cursor-pointer`}
          style={{ backgroundColor: color }}
          onClick={setDisplayColorPicker}
        />
        <div className=' w-48'>
          <Input
            label={label}
            value={color}
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
