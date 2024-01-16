"use client"

import { ModifierGroup as ModifierGroupProps, ModifierOption } from "@/interfaces/products";
import FormItem from "./form-item";
import { useState } from "react";
import FormItemWrapper from "./form-item-wrapper";
import clsx from "clsx";

type InputProps = {
  options: ModifierOption[];
  maxOptions: number;
  updateOptionsCount: (count: number) => void;
};

const RadioInputs: React.FC<InputProps> = ({ options, updateOptionsCount }) => {
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleOnChange = (value: string) => {
    setSelectedOption(value);
    updateOptionsCount(1);
  }
  
  return (
    <>
      {options.map((option) => (
        <FormItem
          key={option.id}
          id={`${option.id}`}
          type="radio"
          label={option.name}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={() => handleOnChange(option.value)}
          groupIdentifier={`modifier-${option.group_id}`} />
      ))}
    </>
  )
}

const CheckboxInputs: React.FC<InputProps> = ({ options, updateOptionsCount, maxOptions }) => {
  const [isChecked, setIsChecked] = useState(Array(options.length).fill(false));
  
  const isCheckboxDisabled = (index: number) => {
    const count = isChecked.filter(Boolean).length;
    return count >= maxOptions && !isChecked[index];
  };

  const handleOnChange = (index: number) => {
    if (isCheckboxDisabled(index)) return;
    
    const newCheckedStates = isChecked.map((checked, i) => i === index ? !checked : checked);
    
    setIsChecked(newCheckedStates);
    updateOptionsCount(newCheckedStates.filter(Boolean).length);
  };

  return (
    <>
      {options.map((option, index) => (
        <FormItem
          key={option.id}
          id={`${option.id}`}
          type="checkbox"
          label={option.name}
          value={option.value}
          checked={isChecked[index]}
          onChange={() => handleOnChange(index)}
          disabled={isCheckboxDisabled(index)}
          groupIdentifier={`modifier-${option.group_id}`} />
      ))}
    </>
  )
}

const NumericInputs: React.FC<InputProps> = ({ options, updateOptionsCount, maxOptions }) => {
  const [inputValues, setInputValues] = useState(Array(options.length).fill(0));
  const [disabled, setDisabled] = useState(false);
  
  const currentOptionsCount = () => inputValues.reduce((acc, val) => acc + val, 0);
  
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const newValues = [...inputValues];
    const action = e.currentTarget.dataset.action;
    
    if (action === "decrease" && newValues[index] > 0) {
      newValues[index] -= 1;
      setInputValues(newValues);
      updateOptionsCount(newValues.reduce((acc, val) => acc + val, 0));
    }
    
    if (action === "increase" && (newValues[index] < maxOptions) && currentOptionsCount() < maxOptions) {
      newValues[index] += 1;
      setInputValues(newValues);
      updateOptionsCount(newValues.reduce((acc, val) => acc + val, 0));
    }
    
    setDisabled(newValues.reduce((acc, val) => acc + val, 0) == maxOptions);
  }
  
  return (
    <>
    {options.map((option, index) => (
      <FormItemWrapper key={option.id}>
        <div className="h-full flex items-center cursor-pointer justify-between">
          
          <div className="text-sm">
            {option.name}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-action="decrease"
              onClick={(e) => handleOnClick(e, index)}
              className="flex items-center justify-center w-9 h-9 text-2xl text-gray-500 focus:outline-none border rounded-full border-gray-500 bg-white" >
              -
            </button>
            
            <input
              type="number"
              defaultValue={inputValues[index]}
              className="bg-transparent w-7 font-semibold text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            
            <button
              type="button"
              data-action="increase"
              disabled={disabled}
              onClick={(e) => handleOnClick(e, index)}
              className={clsx("flex items-center justify-center w-9 h-9 text-2xl text-gray-500 focus:outline-none border rounded-full border-gray-500", disabled ? "" : "bg-white" )} >
              +
            </button>
          </div>
          
        </div>
      </FormItemWrapper>
    ))}
    </>
  )
}

const ModifierGroup = ({ modifier_group }: { modifier_group: ModifierGroupProps }) => {
  const formType = modifier_group.form_type;
  const maxOptions = modifier_group.max_options;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-between mb-10">
        <div>
          <h3 className="text-lg font-semibold">{modifier_group.name}</h3>
          <p className="text-sm text-neutral-500">{modifier_group.caption}</p>
        </div>
        
        <div className="flex items-center justify-center rounded-full bg-gray-100 px-4 py-1 h-fit">
          <span className="text-sm">{count}/{modifier_group.max_options}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        {formType === "radio"
          && <RadioInputs
                options={modifier_group.options}
                updateOptionsCount={setCount}
                maxOptions={maxOptions} />}
                
        {formType === "checkbox"
          && <CheckboxInputs
                options={modifier_group.options}
                updateOptionsCount={setCount}
                maxOptions={maxOptions} />}
                
        {formType === "number"
          && <NumericInputs
                options={modifier_group.options}
                updateOptionsCount={setCount}
                maxOptions={maxOptions} />}
      </div>
      
      <div className="border-2 my-10"></div>
    </div>
  )
}

export default ModifierGroup;