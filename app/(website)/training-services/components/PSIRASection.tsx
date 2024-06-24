
import React from 'react';
import { GradeFeatures } from './constants';


const PSIRASection = () => {

  
    return (
      <>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">      
                
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-red-50">01.</h2>
                        <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Grade A – Management</h1>

                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        This learning programme help the Security Officers on how to manage the site, also how to gather evidence during accidents and incidents on site under his/her management, it is also encourages the importance of inter action on site and the benefit of it when is implemented professionally.
                        </p>
                    </div>
                </div>
                
                <div className="lg:pr-8 lg:pt-4">
                        
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-red-50">02.</h2>
                        <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Grade B – Supervision.</h1>
                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                            This learning unit improves officers to an advance level of Supervision. Officers are equipped with the knowledge of Supervision also how to conduct On Job Training, Handling of Parade and the Hosting and lowering of Flags.
                        </p>               
                    </div>
                </div>

                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-red-50">03.</h2>
                        <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Grade C – Protection of Information Officer.</h1>

                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        The purpose of this module is to ensure that Security Officers with grade C are able to protect Classified information to civilians, also know how to conduct Emergency situation in their presence and to save lives in their designated areas and also be able can assess risk and deal with it professional.
                        </p>
                    </div>
                </div>
                
                <div className="lg:pr-8 lg:pt-4">
                        
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-red-50">04.</h2>
                        <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Grade D – Access Control.</h1>
                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        The purpose of this module is to train Security Officer`s how to conduct Access Control at the egress point, also to ensure that they know and understand how the 3 ‘’D’’ principles of physical Security works in conjunction with Security Officer`s.
                        </p>               
                    </div>
                </div>

                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-red-50">05.</h2>
                        <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">Grade E - Patrol Officer.</h1>

                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                            The purpose of this training is to ensure that new training Officers are introduced professionally in the Private Security Industry, and also know what is expected from them with regard to upholding the Law as Security Officers.
                        </p>
                    </div>
                </div>

                <div className="lg:pr-8 lg:pt-20">
            <h2 className="text-base font-semibold leading-7 text-red-50">People credited with any of these units standard are capable of:</h2>

            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {GradeFeatures.map((feature) => (
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
      
      </>
    );
};
export default PSIRASection