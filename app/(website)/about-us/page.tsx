import Breadcrumb from "../components/Breadcrumb";
import CTASection from "../components/CTA";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import Tabs from "../training-application/components/Tabs";
import MissionData from "./components/MissionData";
import VisionData from "./components/VisionData";
import ObjectivesData from "./components/ObjectivesData";

const tabs = [
  {
    name: "Vision",
    content: <VisionData />,
  },
  {
    name: "Mision",
    content: <MissionData />,
  },
  {
    name: "Objectives",
    content: <ObjectivesData />,
  },
  {
    name: "Our Philosophy",
    content:
      "At Mupo Security, safety always comes first. Our systematic approach to establishing and maintaining the highest standards of safety and security means you can focus on getting the job done without risk to your people, products, or property.",
  },
];

const FeaturesOne = [
  {
    name: "Retail & Industrial",
    icon: CheckBadgeIcon,
  },
  {
    name: "Special Event",
    icon: CheckBadgeIcon,
  },
  {
    name: "Control of Asset Removal",
    icon: CheckBadgeIcon,
  },
  {
    name: "Armed & Unarmed Guard",
    icon: CheckBadgeIcon,
  },
];

const Features2 = [
  {
    name: "Guarding and Patrol",
    icon: CheckBadgeIcon,
  },

  {
    name: "Armed & Unarmed Reaction",
    icon: CheckBadgeIcon,
  },

  ,
  {
    name: "Group Control",
    icon: CheckBadgeIcon,
  },
  ,
  {
    name: "Consulting Services",
    icon: CheckBadgeIcon,
  },
];
 const Features3 = [
  ,
  {
    name: "Surveillance",
    icon: CheckBadgeIcon,
  },
  ,
  {
    name: "Access Control",
    icon: CheckBadgeIcon,
  },
  ,
  {
    name: "Security Training",
    icon: CheckBadgeIcon,
  },
];

export const features4 = [
  
  {
    name: "Corporate clients: We provide security services and training to large corporations, small businesses, and start-ups.",
    icon: CheckBadgeIcon,
  },
  ,
  {
    name: "Government agencies: We have worked with various government agencies to provide security services and training.",
    icon: CheckBadgeIcon,
  },
  ,
  {
    name: "Individuals: We offer personalized security services to individuals who require executive protection, event security, or personal security.",
    icon: CheckBadgeIcon,
  },
];
const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us" bgImage="/herobg.png" />

      <div className="overflow-hidden bg-white max-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:pr-8 lg:pt-4">
            <p className="regular-16 text-gray-30">
              <b>Mupo Projex (Pty)Ltd</b> T/A Mupo Security & Training (S&T) is
              a trusted and reputable security services & Training services
              provider with over five years of experience in the security
              industry. Our team of experts, coupled with state-of-the-art
              technology and industry best practices, will work diligently to
              minimize risks and protect your assets.
            </p>

            <div className="grid grid-cols-3 pb-5">
              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {FeaturesOne.map((feature) => (
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

              {/* <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features2.map((feature) => (
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
              </dl> */}

              {/* <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features3.map((feature) => (
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
              </dl> */}
            </div>
            <p className="regular-16 text-gray-30">
              Our people are carefully screened and undergo rigorous training
              and continuous professional development, guaranteeing the very
              best in customer service. For your peace of mind, we carry
              comprehensive insurance, and all locally required licenses and
              certifications are up to date. We remain committed to doing
              business by building partnerships with our customers to ensure
              enduring relationships. We are committed to providing the highest
              level of security services to ensure the safety and well-being of
              your organization. We look forward to partnering with you to
              create a secure environment for your business operations.
              <br />
            </p>
            <div className="pt-5">
              {" "}
              <p className="regular-16 text-gray-30">
                We have extensive experience in providing security services and
                training to a range of clients, including:
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features4.map((feature) => (
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
              </dl> */}
            </div>
          </div>

          <p></p>

          <Tabs tabs={tabs} />
        </div>
      </div>

      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="bold-40 text-center lg:bold-40 text-blue-100 mb-4">
            Trusted by
          </h1>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/nbc.jpg"
              alt="nbc"
              width={258}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/psira.jpg"
              alt="Reform"
              width={158}
              height={48}
            />

            <img
              className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/sapftc.png"
              alt="sapftc"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/security-services/QCTO.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/security-services/img_17.png"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AboutUs;
