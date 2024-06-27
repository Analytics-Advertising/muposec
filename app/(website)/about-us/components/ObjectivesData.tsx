
import { CheckBadgeIcon } from "@heroicons/react/20/solid";


export const Objectivesfeatures = [
    {
      name: "Enhance the overall security of the premises.",
      icon: CheckBadgeIcon,
    },

    {
        name: "Protect company assets, employees, and clients.",
        icon: CheckBadgeIcon,
      },
      {
        name: "Prevent unauthorized access and security breaches.",
        icon: CheckBadgeIcon,
      },
      {
        name: "Provide real-time monitoring and quick response to incidents promote a secure work environment.",
        icon: CheckBadgeIcon,
      },
            
    
    
  ];

  
const ObjectivesData = () => {
    return(
        <>
        <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {Objectivesfeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-red-50"
                        aria-hidden="true"
                      />
                      <span className="text-blue-100">{feature.name}</span>
                    </dt>
                  </div>
                ))}
              </dl></>
    )
}
export default ObjectivesData;