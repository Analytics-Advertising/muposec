"use client";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trainingApplicationSchema } from "@/lib/schema";
import type { TabsProps } from "antd";
import Button from "../components/Button";
import Tabs from "./components/Tabs";
import PsiraGrades from "./components/PsiraGrade";
import FirearmTraining from "./components/FirearmTraining";
import ComboTraining from "./components/ComboTraining";
import SassetTraining from "./components/SassetaTraining";

type Inputs = z.infer<typeof trainingApplicationSchema>;

const TrainingApplication = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(trainingApplicationSchema),
    mode: "onTouched",
    defaultValues: {
      title: "Mr",
      firstName: "",
      lastName: "",
      IDPassport: "",
      phone: "",
      email: "",
      selectedOptions: {
        psiraGrades: [],
        firearmTraining: [],
        comboTraining: [],
        sassetTraining: [],
      },
    },
  });

  const tabs = [
    {
      name: "PSIRA GRADES",
      content: (
        <ul>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.psiraGrades")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.psiraGrades",
                      isChecked
                        ? [...getValues().selectedOptions.psiraGrades, value]
                        : getValues().selectedOptions.psiraGrades.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Grade A"
                />
                <p> Grade A</p>
              </div>
              <div>
                <p>R1200</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.psiraGrades")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.psiraGrades",
                      isChecked
                        ? [...getValues().selectedOptions.psiraGrades, value]
                        : getValues().selectedOptions.psiraGrades.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Grade B"
                />
                <p> Grade B</p>
              </div>
              <div>
                <p>R1000</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.psiraGrades")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.psiraGrades",
                      isChecked
                        ? [...getValues().selectedOptions.psiraGrades, value]
                        : getValues().selectedOptions.psiraGrades.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Grade E, D, C"
                />
                <p> Grade E, D & C</p>
              </div>
              <div>
                <p>R2000</p>
              </div>
            </label>
          </li>
          <li>
          <div className="p-4 mt-5 mb-4 text-sm text-blue-100 rounded-sm bg-red-200  dark:text-red-100" role="alert">
            <span className="font-medium">Note:</span> Includes PSiRa Profile registration & Course Report
          </div>
          </li>
        </ul>
      ),
    },
    {
      name: "Fire-Arm Training",
      content: (
        <ul>
           <div className="p-4 mt-5 mb-4 text-sm text-blue-100 rounded-sm bg-red-200  dark:text-red-100" role="alert">
            <span className="font-medium">Disclaimer:</span> Prerequisite Of Enrolling For Business Fire-Arm Training Is Upon Successfully Completing Private Fire-Arm Training.
          </div>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.firearmTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.firearmTraining",
                      isChecked
                        ? [
                            ...getValues().selectedOptions.firearmTraining,
                            value,
                          ]
                        : getValues().selectedOptions.firearmTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="One Fire-Arm for Private Purpose (Includes legal)"
                />
                <p> One Fire-Arm for Private Purpose (Includes legal)</p>
              </div>
              <div>
                <p>R2000</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.firearmTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.firearmTraining",
                      isChecked
                        ? [
                            ...getValues().selectedOptions.firearmTraining,
                            value,
                          ]
                        : getValues().selectedOptions.firearmTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="One Fire-Arm for Business Purpose (Includes legal)"
                />
                <p> One Fire-Arm for Business Purpose (Includes legal)</p>
              </div>
              <div>
                <p>R2500</p>
              </div>
            </label>
          </li>
         
        </ul>
      ),
    },
    {
      name: "Fire-Arm Training Combo",
      content: (
        <ul>
          <div className="p-4 mt-5 mb-4 text-sm text-blue-100 rounded-sm bg-red-200  dark:text-red-100" role="alert">
            <span className="font-medium">Disclaimer:</span> Prerequisite Of Enrolling For Business Fire-Arm Training Is Upon Successfully Completing Private Fire-Arm Training.
          </div>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="1 Firearm For Private Purpose & 1 Firearm For Business Purpose"
                />
                <p> 1 Firearm For Private Purpose & 1 Firearm For Business Purpose</p>
              </div>
              <div>
                <p>R3500</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Handgun & Rifle (SLR) For Private Purpose"
                />
                <p> Handgun & Rifle (SLR) For Private Purpose</p>
              </div>
              <div>R3000</div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Handgun & Rifle (SLR) For Business Purpose"
                />
                <p> Handgun & Rifle (SLR) For Business Purpose</p>
              </div>
              <div>
                <p>R4000</p>
              </div>
            </label>
          </li>
          <hr className="my-4"/>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="All 3 Firearms For Private Purpose"
                />
                <p>  All 3 Firearms For Private Purpose</p>
              </div>
              <div>
                <p>R4500</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="All 3 Firearms For Business Purpose"
                />
                <p>All 3 Firearms For Business Purpose</p>
              </div>
              <div>
                <p>R6000</p>
              </div>
            </label>
          </li>

          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.comboTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.comboTraining",
                      isChecked
                        ? [...getValues().selectedOptions.comboTraining, value]
                        : getValues().selectedOptions.comboTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Combo (All 3 For Private + All 3 For Business)"
                />
                <p>Combo (All 3 For Private + All 3 For Business)</p>
              </div>
              <div>
                <p>R9000</p>
              </div>
            </label>
          </li>

          <div className="p-4 mt-5 mb-4 text-sm text-blue-100 rounded-sm  dark:text-red-100" role="alert">
            <span className="font-medium">Disclaimer:</span> Includes any or all of the following: -   Handgun -   Rifle (SLR) -   Shotgun
          </div>

        </ul>
      ),
    },
    {
      name: "SASSETA Accredited Training",
      content: (
        <ul>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.sassetTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.sassetTraining",
                      isChecked
                        ? [...getValues().selectedOptions.sassetTraining, value]
                        : getValues().selectedOptions.sassetTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="National Certificate: General Security Practices NQF Level 2 ID(58577)"
                />
                <p> National Certificate: General Security Practices NQF Level 2 ID(58577)</p>
              </div>
              <div>
                <p>R10000</p>
              </div>
            </label>
          </li>
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.sassetTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.sassetTraining",
                      isChecked
                        ? [...getValues().selectedOptions.sassetTraining, value]
                        : getValues().selectedOptions.sassetTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Skills Program 1 | Patrol Security Officer"
                />
                <p> Skills Program 1 | Patrol Security Officer</p>
              </div>
              <div>R3000</div>
            </label>
          </li>{" "}
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.sassetTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.sassetTraining",
                      isChecked
                        ? [...getValues().selectedOptions.sassetTraining, value]
                        : getValues().selectedOptions.sassetTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Skills Program 2 | Access Control Security Officer"
                />
                <p> Skills Program 2 | Access Control Security Officer</p>
              </div>
              <div>
                <p>R3000</p>
              </div>
            </label>
          </li>{" "}
          <li>
            <label className="flex justify-between gap-10">
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  {...register("selectedOptions.sassetTraining")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    setValue(
                      "selectedOptions.sassetTraining",
                      isChecked
                        ? [...getValues().selectedOptions.sassetTraining, value]
                        : getValues().selectedOptions.sassetTraining.filter(
                            (item: any) => item !== value
                          )
                    );
                  }}
                  value="Skills Program 3 | Asset and Reaction Security Officer"
                />
                <p> Skills Program 3 | Asset and Reaction Security Officer</p>
              </div>
              <div>
                <p>R3000</p>
              </div>
            </label>
          </li>
        </ul>
      ),
    },
  ];



  const onSubmit = async (values: Inputs) => {
    console.log(values);
    reset();
  };

  return (
    <>
      <Breadcrumb title="Training Application" bgImage="/security-services/trainingapp.jpg" />

      <div className="max-container padding-container">

          <div className="bold-20 pb-5 lg:bold-32 text-center mt-5 text-blue-100 capitalize">
            <h2>Application Form</h2>
            <p className="regular-16 mt-5 bg-white/80 text-red-50 lg:mt-[30px] lg:bg-none">*Please complete all sections of this application form in full (Incomplete applications will not be processed)</p>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className="border p-10 rounded-lg shadow-lg">



          <hr className="pb-5"/>

          <div className="grid container gap-10 grid-cols-2 gap-y-2 mx-auto text-left">


            <div className="form-control">
             
              <label className="mb-2 block text-sm font-medium" htmlFor="title">
                Title
              </label>
              
              <select id="title" {...register("title")}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              {errors.title && (
                <p className="error" aria-live="polite">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="error" aria-live="polite">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <p className="error" aria-live="polite">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor="IDPassport"
              >
                ID/Passport
              </label>
              <input
                id="IDPassport"
                type="text"
                {...register("IDPassport")}
                placeholder="Enter Passport or ID number"
              />
              {errors.IDPassport && (
                <p className="error" aria-live="polite">
                  {errors.IDPassport.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="mb-2 block text-sm font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                placeholder="Phone number"
              />
              {errors.phone && (
                <p className="error" aria-live="polite">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="mb-2 block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="error" aria-live="polite">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="px-20">
            <Tabs tabs={tabs} />
            <Button
              type="submit"
              title="Submit"
              icon=""
              variant="btn_dark_green"
            />
          </div>
          {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
        </form>
      </div>
    </>
  );
};

export default TrainingApplication;
