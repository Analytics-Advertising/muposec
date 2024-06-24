"use client"
import React from "react";
import { useFormContext } from "react-hook-form";

const SassetTraining = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <ul>
      <li>
        <label>
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
                      (item:any) => item !== value
                    )
              );
            }}
            value="Training Option 1"
          />
          Training Option 1
        </label>
      </li>
      {/* Add more checkboxes as needed */}
    </ul>
  );
};

export default SassetTraining;
