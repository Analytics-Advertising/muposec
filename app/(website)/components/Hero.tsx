import React from 'react'
import Button from './Button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[50px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
          
          <h1 className="bold-40 lg:bold-64">
          Where Your Safety<span className="underline decoration-red-50"> Matters<span className='text-red-50'>!</span></span>
          </h1>
          <p>Welcome to <b>Mupo Security,</b> your trusted partner in safeguarding your home, business, and loved ones. Our comprehensive security solutions are designed to provide you with peace of mind, knowing that your safety is our top priority. </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Button 
          type="button"
          title="Get in touch!  "
          icon="/icons/phone.svg"
          variant="btn_dark_green"
          link="/contact-us"
        />
           
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          {/* <Image src="/herobg.png" alt="phones" width={550} height={870} /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection