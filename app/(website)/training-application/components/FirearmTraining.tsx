"use client"
import React from "react";
import { useFormContext } from "react-hook-form";

const FirearmTraining = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <ul>
      <li>
        <label>
          <input
            type="checkbox"
            {...register("selectedOptions.firearmTraining")}
            onChange={(e) => {
              const isChecked = e.target.checked;
              const value = e.target.value;
              setValue(
                "selectedOptions.firearmTraining",
                isChecked
                  ? [...getValues().selectedOptions.firearmTraining, value]
                  : getValues().selectedOptions.firearmTraining.filter(
                      (item:any) => item !== value
                    )
              );
            }}
            value="Handgun Training"
          />
          Handgun Training
        </label>
      </li>
  
    </ul>
  );
};

export default FirearmTraining;
