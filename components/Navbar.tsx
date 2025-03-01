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

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) {
    e.preventDefault() // Prevent default anchor behavior
    
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      handleMenuClose()
    }
  }

  return (
    <header id='nav' className='padding-x py-3 fixed top-0 left-0 z-50 border-b-1  w-full bg-gray-950/50 border-secondary-500/50 backdrop-blur-3xl'>
      <nav className='max-w-[1440px] mx-auto flex '>
        {/* altair logo */}
        <Link href={'#'} className=' block w-fit mr-auto'>
          <div className='font-inter mt-2 inline-flex items-center gap-x-2 text-xl font-semibold '>
            <Image
              src={altairLogo}
              alt='altair-logo'
              width={30}
              height={30}
              className='w-auto h-auto'
            ></Image>
            ALTAIR
          </div>
        </Link>

        {/* for large screens md:above */}
        <ul className='max-md:hidden flex justify-center  gap-8 items-center'>
          {navLinks.map((item) => (
            <li key={item.label} className='text-md transition  hover:text-secondary-600 '>
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* nav menu */}
        <div className='md:hidden flex items-center'>
          <div className='border p-1 rounded-sm' onClick={handleMenuOpen}>
            {isMenuOpen ? menuClose : menuOpen}
          </div>
        </div>

        {/* for md:below */}
        <div onClick={handleMenuClose} className={`${isMenuOpen ? "translate-x-0 opacity-100": "translate-x-100 opacity-0"} transition-all duration-300 ease-in-out absolute left-0 top-[68.5px] h-screen  w-full flex justify-center items-start bg-gray-950/90 backdrop-blur-sm md:hidden`}>
          <ul className=' space-y-12 mt-20' onClick={(e) => e.stopPropagation()}>
            {navLinks.map((item) => (
              <li key={item.label} className='text-lg font-medium transition  hover:text-secondary-600 ' >
                <a href={item.to} onClick={(e) => {
                handleScroll(e, item.to.substring(1))
              }}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  )
}
