import React from "react";
import { GradeFeatures } from "./constants";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Grade A - Management.",
    icon: LockClosedIcon,
  },
  {
    name: "Grade B – Supervision.",
    icon: LockClosedIcon,
  },
  {
    name: "Grade C – Protection of Information Officer.",
    icon: LockClosedIcon,
  },
  {
    name: "Grade D – Access Control.",
    icon: LockClosedIcon,
  },
];

const PSIRASection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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

          <div className="lg:pr-8 lg:pt-8">
            <h2 className="text-base font-semibold leading-7 text-red-50">
              People credited with any of these units standard are capable of:
            </h2>

            <dl className="max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
              {GradeFeatures.map((feature) => (
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
    </>
  );
};
export default PSIRASection;
