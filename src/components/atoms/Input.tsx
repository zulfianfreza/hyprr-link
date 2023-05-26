'use client'

import { clsxtm } from '@/utils/clsxtm'
import React from 'react'

interface InputProps {
  label: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  value?: string | number
  onBlur?: () => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  type = 'text',
  onChange,
  value,
  id,
  onBlur,
  onKeyDown,
}: InputProps) {
  return (
    <div className=' w-full relative'>
      <input
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder=' '
        id={id}
        onKeyDown={onKeyDown}
        className={clsxtm(
          'peer w-full p-2 pt-5 leading-[48px] text-sm pl-4 bg-gray-100 rounded-lg outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:ring-black focus:ring-2 hover:ring-2 hover:ring-gray-200'
        )}
      />
      <label
        htmlFor={id}
        className={clsxtm(
          'absolute text-sm duration-150 transform -translate-y-2.5 scale-[0.85] top-[13px] z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 text-gray-500 truncate pointer-events-none'
        )}
      >
        {label}
      </label>
    </div>
  )
}
