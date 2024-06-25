
import { CheckBadgeIcon } from "@heroicons/react/20/solid";


export const Missionfeatures = [
    {
      name: "To make business and residential communities safer and more secure places.",
      icon: CheckBadgeIcon,
    },
    {
      name: "To increase community awareness of real security issues.",
      icon: CheckBadgeIcon,
    },
    {
      name: "To inform and educate our customers on the security solutions available, so that they can make the best choices to meet their needs and provide them with a complete peace of mind.",
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