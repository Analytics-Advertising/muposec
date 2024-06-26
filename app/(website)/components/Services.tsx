import { SERVICES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services   = () => {
  return (
    <section className="flex-col padding-container flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat">
      
      <div className="max-container  relative w-full flex justify-end">
        
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/security.png"
            alt="phone"
            width={600}
            height={800}
            className="security-banner"
          />
        </div>
        

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative mt-0 text-blue-100'>
            <h2 className="bold-40 lg:bold-40"><span className="text-red-50"> Our</span> Services</h2>
            
          </div>
          <ul className="mt-10 grid  gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {SERVICES.map((service) => (
              <FeatureItem 
                key={service.title}
                title={service.title} 
                icon={service.icon}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}

type ServicesItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: ServicesItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-4 bg-red-50">
        <Image src={icon} alt="map" width={40} height={45} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 text-blue-100 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Services