"use client"

import { ModifierGroup as ModifierGroupProps, ModifierOption } from "@/interfaces/products";
import Input from "./input";
import { useState } from "react";

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
        <Input
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
        <Input
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
      </div>
      
      <div className="border-2 my-10"></div>
    </div>
  )
}

export default ModifierGroup;