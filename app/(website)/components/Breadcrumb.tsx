import React from 'react'
import Button from './Button'
import Image from 'next/image'


type BreadcrumbProps ={
    title: string;
    bgImage: string;
  }
  
  const Breadcrumb = ({ title, bgImage }: BreadcrumbProps)  => {
    return (
      <section className="flexCenter w-full flex-col pb-[50px]">
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
            <h4 className="bold-40 lg:bold-64">
              {title}
            </h4>
          </div>
        </div>
      </section>
    );
  }
  
  export default Breadcrumb;