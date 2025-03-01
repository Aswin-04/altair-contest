'use client'

import Image from 'next/image'
import { sliderData } from '@/lib/constants'

export default function FocusAreas() {
  return (
    <div className='container mx-auto flex flex-wrap items-center justify-center gap-20'>
      {sliderData.map(({ img, title }) => (
        <div
          key={title}
          className='border-primary ring-primary shadow-primary rounded-lg border bg-black/50 p-2 ring-1 shadow-lg backdrop-blur-3xl sm:p-4'
        >
          <div className='relative h-[260px] w-[290px] min-w-70 overflow-hidden rounded-lg sm:w-md'>
            <Image
              src={img}
              alt={title}
              className='h-full w-full object-cover'
            ></Image>
            <div className='absolute bottom-0 w-full bg-black/60 py-8'>
              <h2 className='text-center text-2xl font-semibold text-wrap text-cyan-200'>
                {title}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
