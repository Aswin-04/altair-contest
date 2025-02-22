'use client'

import Image from 'next/image'
import altairLogo from '@/public/altair-logo.png'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuOpen() {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className='border-b-primary-100/30 relative flex w-full flex-wrap border-b text-sm sm:flex-nowrap sm:justify-start backdrop-blur-xl'>
      <nav className='mx-auto w-full max-w-[90rem] px-4 py-3 sm:flex sm:items-center sm:justify-between'>
        <div className='flex items-center justify-between'>
          <a className='flex-none text-xl font-semibold focus:opacity-80 focus:outline-none'>
            <span className='font-inter inline-flex items-center gap-x-2 text-xl font-semibold mt-2'>
              <Image
                src={altairLogo}
                alt='altair-logo'
                className='h-auto w-8'
              ></Image>
              ALTAIR
            </span>
          </a>
          <div className='sm:hidden'>
            <button
              className='relative flex size-7 items-center justify-center gap-x-2 rounded-lg border focus:outline-none'
              onClick={handleMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className='size-4 shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              ) : (
                <svg
                  className='size-4 shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='3' x2='21' y1='6' y2='6' />
                  <line x1='3' x2='21' y1='12' y2='12' />
                  <line x1='3' x2='21' y1='18' y2='18' />
                </svg>
              )}
              <span className='sr-only'>Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          className={`grow basis-full overflow-hidden transition-all duration-300 ease-in ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-none opacity-100`}
        >
          <div className='mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5'>
            <a className='font-medium text-neutral-200 hover:text-secondary-400 focus:text-secondary-400 focus:outline-none cursor-pointer transition-colors'>
              About
            </a>
            <a className='font-medium text-neutral-200 hover:text-secondary-400 focus:text-secondary-400 focus:outline-none cursor-pointer'>
              Explore
            </a>
            <a className='font-medium text-neutral-200 hover:text-secondary-400 focus:text-secondary-400 focus:outline-none cursor-pointer'>
              Register
            </a>
            <a className='font-medium text-neutral-200 hover:text-secondary-400 focus:text-secondary-400 focus:outline-none cursor-pointer'>
              Submit
            </a>
            <a className='font-medium text-neutral-200 hover:text-secondary-400 focus:text-secondary-400 focus:outline-none cursor-pointer'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
