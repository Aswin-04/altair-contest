import Image from 'next/image'
import altairLogo from '@/public/altair-logo.png'
import sairamLogo from '@/public/sairam-icon.png'
import { instagramIcon, linkedinIcon } from '@/lib/icons'

export default function Footer() {
  return (
    <div className='bg-gray-900'>
      <div className='mx-auto max-w-[1440px] pt-16 pb-8 lg:pt-8'>
        <div className='padding-x flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-around'>
          <div className='w-fit rounded-sm bg-white/80'>
            <Image
              src={sairamLogo}
              alt='sairam-logo'
              width={80}
              height={80}
              className='h-auto w-auto'
            ></Image>
          </div>
          <div>
            <a className='flex-none text-xl font-semibold focus:opacity-80 focus:outline-none'>
              <span className='font-inter mt-2 inline-flex items-center gap-x-2 text-xl font-semibold'>
                <Image
                  src={altairLogo}
                  alt='altair-logo'
                  className='h-auto w-8'
                ></Image>
                ALTAIR
              </span>
            </a>
            <p className='text-[14px] text-white opacity-70'>
              Copyright © 2025 Altair. All rights reserved.
            </p>
          </div>
          <div className='flex gap-4 lg:items-center lg:justify-center'>
            <div>{linkedinIcon}</div>
            <div>{instagramIcon}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
