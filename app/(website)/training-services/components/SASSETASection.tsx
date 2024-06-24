import {
  NationalCerFeatures,
  PatrolSecurityFeatures,
  AccessControlFeatures,
  AssetReactionFeatures,
} from "./constants";

const SASSETASection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">
                01.
              </h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                National Certificate
              </h1>
              <p className="regular-16 text-gray-30">
                National certificate: General Security Practices NQF Level 2
                ID(58577)
              </p>

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {NationalCerFeatures.map((feature) => (
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

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">
                02.
              </h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                Patrol Security Officer.
              </h1>
              <p className="regular-16 text-gray-30">
                Skills Program 1 | Patrol Security Officer
              </p>

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {PatrolSecurityFeatures.map((feature) => (
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

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">
                03.
              </h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                Access Control Security Officer
              </h1>
              <p className="regular-16 text-gray-30">
                Skills Program 2 | Access Control Security Officer
              </p>

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {AccessControlFeatures.map((feature) => (
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

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-50">
                04.
              </h2>
              <h1 className="bold-40 lg:bold-40 text-blue-100 mb-4">
                Asset and Reaction Security Officer
              </h1>

              <p className="regular-16 text-gray-30">
                Skills Program 3 | Asset and Reaction Security Officer
              </p>

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {AssetReactionFeatures.map((feature) => (
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
        </div>
      </div>
    </>
  );
};

export default SASSETASection;
