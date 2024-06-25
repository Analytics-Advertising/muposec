
import { CheckBadgeIcon } from "@heroicons/react/20/solid";


export const Visionfeatures = [
    {
      name: "To be a trusted integrated security company chosen by customers across all market segments we operate in.",
      icon: CheckBadgeIcon,
    },
    
    
  ];

  
const VisionData = () => {
    return(
        <>
        <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {Visionfeatures.map((feature) => (
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
export default VisionData;