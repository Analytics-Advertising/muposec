import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const FirearmTrainingSection = () => {
  const features = [
    {
      name: "Handling, using, carrying out basic inspection and maintenance of a handgun, shotgun and rifle for safe business use.",
      icon: LockClosedIcon,
    },
  ];
  return (
    <>
      {/* Electronic Security */}
      <div className="overflow-hidden bg-white max-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-red-50">
                  01.
                </h2>
                <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                  Private Use
                </h1>

                <ul className="regular-16 text-gray-30 xl:max-w-[520px]">
                  <li>
                    This unit standard is for anyone who privately uses a
                    Handgun and or who requires a Competency Certificate in
                    terms of relevant legislation.
                  </li>
                  <li>
                    Handle and use of a firearm for use in self defence, Hunting
                    and sport shooting.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-red-50">
                  02.
                </h2>
                <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                  Business Use
                </h1>
                <ul className="regular-16 text-gray-30 xl:max-w-[520px]">
                  <li>
                    Required for person who wish to work with and carry firearms while on duty in the security industry I.E Armed Security Officer, Armed Reaction Officers and Close Protection Officers.
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
            <h2 className="text-base font-semibold leading-7 text-red-50">
              People credited with any of these units standard are capable of:
            </h2>
            {features.map((feature) => (
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
          </dl>
        </div>
      </div>
    </>
  );
};
export default FirearmTrainingSection;
