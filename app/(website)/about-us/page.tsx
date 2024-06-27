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
  
];

const FeaturesOne = [
  {
    name: "Armed & Unarmed Guarding",
    icon: CheckBadgeIcon,
  },
  {
    name: "Armed & Unarmed Reaction Response",
    icon: CheckBadgeIcon,
  },
  {
    name: "Residential, Retail & Industrial",
    icon: CheckBadgeIcon,
  },
  {
    name: "Special Events & Access Control",
    icon: CheckBadgeIcon,
  },
  
];

const FeaturesOne2 = [
  {
    name: "Control of Asset Removal",
    icon: CheckBadgeIcon,
  },
  {
    name: "Close Protection / VIP",
    icon: CheckBadgeIcon,
  },
  {
    name: "National Key Point",
    icon: CheckBadgeIcon,
  },
  
];

const FeaturesOne3 = [
  {
    name: "Crowd Control & Surveillance",
    icon: CheckBadgeIcon,
  },
  {
    name: "PSiRA Grades Training",
    icon: CheckBadgeIcon,
  },
  {
    name: "Firearm & Competency Training",
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

const features4 = [
  
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
          <div className="lg:pr-8 lg:pt-4 text-blue-100">
            <p>
              <b>Mupo Projex (Pty)Ltd</b> is a trusted and reputable Security & Training service provider with extensive experience within the security industry. 
              For your peace of mind, our team is made of security officers that are PSiRA compliant, with comprehensive insurance and all locally required licenses/certifications. 
            </p>

            <p className="mt-5">
              In addition, for our training offering, Our Facilitators, Assessors and Moderators are PSIRA, PFTC and SASSETA accredited.
            </p>

            <p className="mt-5">
              Our people are carefully screened and undergo rigorous training and continuous professional development, guaranteeing the very best in customer service. 
            </p>

            <p className="mt-5">
            We remain committed to doing business by building partnerships with our customers to ensure enduring relationships. We are committed to providing the highest level of security services to ensure the safety and well-being of your organization. 

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

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {FeaturesOne2.map((feature) => (
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

              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {FeaturesOne3.map((feature) => (
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
