import clsx from "clsx";
import CheckIconSVG from "../icons/checkIconSVG";
import FormItemWrapper from "./form-item-wrapper";

type InputProps = {
  id: string;
  label?: string;
  priceLabel?: string;
  type: "radio" | "checkbox";
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  groupIdentifier: string;
};

const ICONCLASSES = "w-8 h-8 flex items-center justify-center border-gray-500";

const RadioIcon = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={
        clsx(ICONCLASSES, "rounded-full",
        checked ? "bg-rose-600" : "bg-white border")} >
          
      {checked && <CheckIconSVG />}
    </div>
  )
};

const CheckBoxIcon = ({ checked, disabled }: { checked: boolean, disabled: boolean | undefined }) => {
  return (
    <div
      className={
        clsx(ICONCLASSES, "rounded",
        checked && "bg-rose-600",
        disabled && "bg-gray-100 border",
        (!checked && !disabled) && "bg-white border")} >
          
      {checked && <CheckIconSVG />}
    </div>
  )
}

const FormItemControl = ({ id, type, value, checked, disabled, onChange, groupIdentifier }: InputProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        name={`${groupIdentifier}-group`}
        onChange={() => onChange()}
        className="hidden"
      />
      
      {type === "radio" && <RadioIcon checked={checked} />}
      {type === "checkbox" && <CheckBoxIcon checked={checked} disabled={disabled} />}
    </>
  )
}

const FormItem: React.FC<InputProps> = ({ id, type, label, priceLabel, value, checked, disabled, groupIdentifier, onChange }) => {  
  return (
    <FormItemWrapper>
      <label
        htmlFor={id}
        className="h-full flex items-center cursor-pointer justify-between" >
        
        <div className="text-sm">
          <div>{label}</div>
          {priceLabel && <div className="text-rose-600">+{priceLabel}</div>}
        </div>
        
        
        <FormItemControl
          id={id}
          type={type}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          groupIdentifier={groupIdentifier} />
          
      </label>
    </FormItemWrapper>
  )
}

export default FormItem;