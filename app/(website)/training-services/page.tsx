"use client";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";

import {
  LockClosedIcon,
  ServerIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/20/solid";
import Tabs from "./tabs";
import FirearmTrainingSection from "./components/FirearmTrainingSection";
import PSIRASection from "./components/PSIRASection";
import OneOnOneTrainingSection from "./components/OneOnOneTrainingSection";
import SASSETASection from "./components/SASSETASection";

const tabs = [
  {
    name: "PSIRA Grades",
    content: <PSIRASection />,
  },
  {
    name: "Fire-Arm Training",
    content: <FirearmTrainingSection />,
  },
  {
    name: "SASSETA Accredited Training",
    content: <SASSETASection />,
  },
];

const TrainingServices = () => {
  return (
    <>
      <Breadcrumb title="Training Services" bgImage="/training.jpg" />

      <div className="overflow-hidden text-blue-100  bg-white max-container padding-container">
        <p>
        Our training programs prepare individuals for careers in South African Security Laws and strategy, teaching critical skills and resulting in confident graduates ready to excel as elite officers. Our experienced instructors and facilities ensure that you receive the highest quality instruction. Whether you are a beginner looking to learn the basics or an experienced individual looking to improve your skills, we have a program that is right for you.

        </p>

        <Tabs tabs={tabs} />
        <h2 className="text-base my-5 font-semibold leading-7 text-blue-100">
              At Mupo Security & Training (S&T) we are committed to providing
              the best possible security and training services to our customers.
            </h2>
      </div>

      

      <div className="border bg-gray-20"></div>

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
    </>
  );
};

export default TrainingServices;
