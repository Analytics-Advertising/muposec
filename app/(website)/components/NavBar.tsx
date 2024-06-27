"use client"
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS,SUB_NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Button from './Button'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  
  return (
    
    <>
<div className="hidden lg:flex bg-red-50 text-[12px] flex justify-between items-center relative z-30 py-2 px-5">

    <div className="flex space-x-4">
        <div className="flex items-center text-white space-x-2">
          <Image 
            src="/icons/phone.svg"
            alt="menu"
            width={15}
            height={15}
            className="inline-block color-white cursor-pointer"
          />
         <a href="tel:+27120042004">Gauteng: +27 12 004 2004</a>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Image 
            src="/icons/phone.svg"
            alt="menu"
            width={15}
            height={15}
            className="inline-block color-white cursor-pointer"
          />
          <a href="tel:+27150041587">Limpopo: +27 15 004 1587</a>
        </div>


        <div className="flex items-center text-white space-x-2">
          <Image 
            src="/icons/whatsapp.svg"
            alt="menu"
            width={15}
            height={15}
            className="inline-block color-white cursor-pointer"
          />
          <a href="https://wa.me/+27847507013" target="_blank">+27 84 750 7013</a>
        </div>
        </div>

       {/* Right aligned nav links  */}
      <ul className='hidden h-full gap-8 lg:flex'>
        {SUB_NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className=" text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-semibold hover:text-blue-100">
            {link.label}
          </Link>
        ))}
      </ul>
        

    </div>
  
    <nav className="flexBetween max-container padding-container relative z-30 py-2">
        <Link href="/">
            <Image src="/black-logo.png" alt="logo" width={100} height={29} />
        </Link>

        <div className="lg:hidden">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <ul className={`lg:hidden absolute top-[90px] right-0 bg-white w-full py-4 px-6 shadow-md transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mb-4">
              <Link href={link.href}  className="text-blue-100 text-lg font-medium hover:text-red-500" onClick={toggleMenu}>
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden h-full mx-auto lg:flex gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="text-blue-100 flexCenter hover:font-semibold hover:text-red-500">
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden ml-auto">
          <Button
            type="button"
            title="Get in touch!"
            icon="/icons/phone.svg"
            variant="btn_dark_green"
            link="/contact-us"
          />
        </div>
      </nav>
    </>
  )
}

export default NavBar
