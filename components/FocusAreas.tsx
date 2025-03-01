'use client'

import Image from 'next/image'
import { sliderData } from '@/lib/constants'

export default function FocusAreas() {
  return (
    <div className='mx-auto container flex flex-wrap items-center justify-center gap-20 '>
      {sliderData.map(({ img, title }) => (
        <div  key={title} className=' p-2 sm:p-4 rounded-lg  border border-primary ring-1 ring-primary shadow-lg shadow-primary  bg-black/50 backdrop-blur-3xl'>
          <div
            className='relative h-[260px] w-[290px] sm:w-md  min-w-70 overflow-hidden rounded-lg '
          >
            <Image
              src={img}
              alt={title}
              className='h-full w-full object-cover'
            ></Image>
            <div className='absolute bottom-0  w-full py-8 bg-black/60'>
              <h2 className='font-semibold text-2xl text-cyan-200 text-wrap text-center'>
                {title}
              </h2>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
