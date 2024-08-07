import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva(
  "rounded-[10px]  border-2 outline-none bg-inherit py-2  px-4 md:py-3 peer "
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  error?: any;
  id: string;
}

const TextInput: React.FC<InputProps> = ({
  label,
  className,
  id,
  error,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div>
      <div className="relative rounded-[10px] w-full ">
        <label className="py-2" htmlFor={id}>{label}</label>
        <input
          autoComplete="off"
          type="text"
          id={id}
          className={`w-full   ${error && "border-[#D31D1D] "} ${cn(
            inputVariants({ className })
          )}`}
          {...props}
          placeholder={placeholder ? placeholder : ""}
        />
        {error && <p className="text-red-500 ">{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
