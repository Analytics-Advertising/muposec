"use client"
import React from "react";
import { useFormContext } from "react-hook-form";

const ComboTraining = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <ul>
      <li>
        <label>
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
                      (item:any) => item !== value
                    )
              );
            }}
            value="Basic Security and Firearm Training"
          />
          Basic Security and Firearm Training
        </label>
      </li>
      {/* Add more checkboxes as needed */}
    </ul>
  );
};

export default ComboTraining;
