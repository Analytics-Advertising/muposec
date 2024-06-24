"use client"
import React from "react";
import { useFormContext } from "react-hook-form";

const PsiraGrades = () => {
  const { register, setValue, getValues } = useFormContext();

  return (
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
            <p>R1000</p>
          </div>
        </label>
      </li>
   
    </ul>
  );
};

export default PsiraGrades;
