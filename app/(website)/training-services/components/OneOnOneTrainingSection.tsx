import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


const OneOnOneTrainingSection = () => {

    const features = [
        {
          name: '2-3 Hours Training Session.',
          icon: LockClosedIcon,
        },
        {
            name: '40 9mm Rounds',
            icon: LockClosedIcon,
          },
          {
            name: '10 233 Rifle',
            icon: LockClosedIcon,
          },
          {
            name: '10 12g Shotgun',
            icon: LockClosedIcon,
          },
          {
            name: 'Range Fees',
            icon: LockClosedIcon,
          },
    ]

    return(
        <>
        {/* Electronic Security */}
      <div className="overflow-hidden bg-white pb-24  max-container">

        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto grid gap-x-8 gap-y-16 sm:gap-y-20 ">
            <div className="lg:pr-8 lg:pt-4">
              

              <p className="regular-16 text-gray-30">
              Our intermediate one-on-one firearm training session. This personalized training is designed to enhance your existing firearm knowledge and skills. Our focus is on safety, marksmanship, and advanced techniques. Remember, firearm proficiency is a continuous journey. We encourage you to practice and consider additional training or follow-up sessions to further develop your skills and knowledge. Safety remains the utmost priority throughout the training. We're here to guide and support you in your journey to becoming a proficient and responsible firearm owner.
              </p>
             
                
            </div>
            
            
          </div>
            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
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
      </>

    );
};

export default OneOnOneTrainingSection;