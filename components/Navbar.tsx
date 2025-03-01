'use client'

import Image from 'next/image'
import altairLogo from '@/public/altair-logo.png'
import { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/lib/constants'
import { menuClose, menuOpen } from '@/lib/icons'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuOpen() {
    setIsMenuOpen(prev => !prev)
  }

  function handleMenuClose() {
    setIsMenuOpen(false)
  }

  function handleScroll(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
  ) {
    e.preventDefault() // Prevent default anchor behavior

    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      handleMenuClose()
    }
  }

  return (
    <header
      id='nav'
      className='padding-x border-secondary-500/50 fixed top-0 left-0 z-50 w-full border-b-1 bg-gray-950/50 py-3 backdrop-blur-3xl'
    >
      <nav className='mx-auto flex max-w-[1440px]'>
        {/* altair logo */}
        <Link href={'#'} className='mr-auto block w-fit'>
          <div className='font-inter mt-2 inline-flex items-center gap-x-2 text-xl font-semibold'>
            <Image
              src={altairLogo}
              alt='altair-logo'
              width={30}
              height={30}
              className='h-auto w-auto'
            ></Image>
            ALTAIR
          </div>
        </Link>

        {/* for large screens md:above */}
        <ul className='flex items-center justify-center gap-8 max-md:hidden'>
          {navLinks.map(item => (
            <li
              key={item.label}
              className='text-md hover:text-secondary-600 transition'
            >
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* nav menu */}
        <div className='flex items-center md:hidden'>
          <div className='rounded-sm border p-1' onClick={handleMenuOpen}>
            {isMenuOpen ? menuClose : menuOpen}
          </div>
        </div>

        {/* for md:below */}
        <div
          onClick={handleMenuClose}
          className={`${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-100 opacity-0'} absolute top-[68.5px] left-0 flex h-screen w-full items-start justify-center bg-gray-950/90 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden`}
        >
          <ul className='mt-20 space-y-12' onClick={e => e.stopPropagation()}>
            {navLinks.map(item => (
              <li
                key={item.label}
                className='hover:text-secondary-600 text-lg font-medium transition'
              >
                <a
                  href={item.to}
                  onClick={e => {
                    handleScroll(e, item.to.substring(1))
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
