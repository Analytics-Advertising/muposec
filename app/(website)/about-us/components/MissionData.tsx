
import { CheckBadgeIcon } from "@heroicons/react/20/solid";


export const Missionfeatures = [
    {
      name: "Is to offer top-notch, customized security services offerings that will protect your assets, employees, and customers while minimizing risks and vulnerabilities. With our highly trained staff, state-of-the-art technology, and proven track record, we are confident that we can ensure the safety and security of your organization.",
      icon: CheckBadgeIcon,
    },
   
    
  ];

  
const MissionData = () => {
    return(
        <>
        <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {Missionfeatures.map((feature) => (
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
export default MissionData;