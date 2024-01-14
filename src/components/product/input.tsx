import clsx from "clsx";

type InputProps = {
  id: string;
  label: string;
  type: "radio" | "checkbox" | "numeric";
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  groupIdentifier: string;
};

const CheckIconSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 39 39" fill="none">
      <path d="M14.2167 17.3867L17.5505 20.7204L25.1479 13.7559L27.0882 15.8712C23.888 18.8047 17.4765 24.8592 17.4765 24.8592C17.4765 24.8592 13.9714 21.1998 12.1875 19.4159L14.2167 17.3867Z" fill="white"/>
    </svg>
  )
}

const Input: React.FC<InputProps> = ({ id, type, label, value, checked, disabled, groupIdentifier, onChange }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={clsx("flex transition-shadow duration-200 items-center justify-between bg-gray-100 rounded-2xl cursor-pointer p-4 h-[4.75rem]", checked && "shadow-sm")}>
        
        <div className="text-sm">{label}</div>
        
        <input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          name={`${groupIdentifier}-group`}
          onChange={() => onChange()}
          className="hidden"
        />
        
        <div
          className={
            clsx("w-8 h-8 flex items-center justify-center border-gray-500",
            checked && "bg-rose-600",
            disabled && "bg-gray-100 border",
            (!checked && !disabled) && "bg-white border",
            type === "radio" ? "rounded-full" : "rounded")} >
              
          {checked && <CheckIconSVG />}
        </div>
      </label>
    </div>
  )
}

export default Input;