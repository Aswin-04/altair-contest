'use client'

import Image from 'next/image'
import { sliderData } from '@/lib/constants'

export default function FocusAreas() {
  return (
    <div className='mx-auto container flex flex-wrap items-center justify-center gap-20'>
      {sliderData.map(({ img, title }) => (
        <div
          className='relative h-[280px] w-md min-w-76 overflow-hidden rounded-lg bg-secondary/50'
          key={title}
        >
          <Image
            src={img}
            alt={title}
            className='h-full w-full object-cover'
          ></Image>
          <div className='absolute bottom-0  w-full py-8 bg-black/40'>
            <h2 className='font-semibold text-2xl text-white text-wrap text-center'>
              {title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}
