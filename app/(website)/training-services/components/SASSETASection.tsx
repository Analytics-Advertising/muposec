import { LockClosedIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "National certificate: General Security Practices NQF Level 2 ID (58577)",
    icon: LockClosedIcon,
  },
  {
    name: "Skills Program 1 | Patrol Security Officer",
    icon: LockClosedIcon,
  },
  {
    name: "Skills Program 2 | Access Control Security Officer",
    icon: LockClosedIcon,
  },
  {
    name: "Skills Program 3 | Asset and Reaction Security Officer",
    icon: LockClosedIcon,
  },
];

const SASSETASection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-8 lg:mx-0 lg:max-w-none">
          
          <dl className="mt-10 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <p className="text-blue-100 font-medium">
                  <div className="absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                    <feature.icon
                      className="h-6 w-5 text-red-50"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </p>
              </div>
            ))}
          </dl>

       
           

        </div>
      </div>
    </>
  );
};

export default SASSETASection;
