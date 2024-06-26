import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { CloseProtectionFeatures, ElectronicSecurityFeatures, IncidentResponseFeatures, InvestigationServicesFeatures, 
          PhysicalSecurityFeatures, SecurityConsultancyFeatures, SubElectronicSecurityFeatures, SubPhysicalSecurityFeatures, 
          features } from './constants';

const SecurityServices = () => {

  
  return (
    <>
      <Breadcrumb title="Security Services" bgImage="/herobg.png" />

      <div className="overflow-hidden bg-white max-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Our Security Services:</h1>
              <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                Our team of experts, coupled with state-of-the-art technology and industry best practices, will work diligently to minimize risks and protect your assets. We offer an extensive range of security services, including but not limited to:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <p className="bold-16 ml-4 lg:bold-20 text-blue-100">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                        <feature.icon className="h-6 w-5 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="/security-services/securityguards.png"
              alt="Product screenshot"
              className="w-[35rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      {/* Physical Security */}
      <div className="overflow-hidden bg-white py-24  max-container">
      <div className="border bg-gray-20" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">01.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Physical Security</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {PhysicalSecurityFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
            
            <div className="lg:pr-8 lg:pt-20">
            <h2 className="text-base font-semibold leading-7 text-red-50">more physical security services...</h2>

            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {SubPhysicalSecurityFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>


          </div>
        </div>
      </div>

       {/* Electronic Security */}
       <div className="overflow-hidden bg-white pb-24  max-container">
      <div className="border bg-gray-20" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">02.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Electronic Security</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {ElectronicSecurityFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
            
            <div className="lg:pr-8 lg:pt-20">
            <h2 className="text-base font-semibold leading-7 text-red-50">more electronic security services...</h2>

            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {SubElectronicSecurityFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>


          </div>
        </div>
      </div>

      {/* Electronic Security */}
      <div className="overflow-hidden bg-white pb-24  max-container">
      <div className="border bg-gray-20" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">03.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Close Protection</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {CloseProtectionFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
            
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">04.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Investigation Services</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {InvestigationServicesFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Electronic Security */}
      <div className="overflow-hidden bg-white pb-24  max-container">
      <div className="border bg-gray-20" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">05.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Security Consultancy and Risk Management</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {SecurityConsultancyFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
            
            <div className="lg:pr-8 lg:pt-4">
              
              <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">06.</h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Incident Response and Crisis Management</h1>
             
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {IncidentResponseFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-50" aria-hidden="true" />
                      <span className='text-blue-100'>{feature.name}</span>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border bg-gray-20"></div>

      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="bold-40 text-center lg:bold-40 text-blue-100 mb-4">Trusted by</h1>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <img
              className=" max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/psira.jpg"
              alt="Reform"
              width={158}
              height={48}
            />
             <img
              className=" max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/sasa-logo.png"
              alt="sasa-logo"
              width={258}
              height={48}
            />
            <img
              className=" max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/nbc.jpg"
              alt="nbc"
              width={258}
              height={48}
            />


           
          </div>
        </div>
      </div>

    
    
    </>
  );
};

export default SecurityServices;