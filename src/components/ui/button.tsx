import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { IconType } from "../icons/icons"

const buttonVariants = cva(
  "leading-none text-white transition-all disabled:bg-slate-300 ",
  {
    variants: {
      variant: {
        roundedBtn:
          'rounded-[200px] text-xs px-[18px] py-[12px] md:text-[15px] bg-mm-primary-500 md:px-6 md:py-2.5 xl:px-8 xl:py-3 xl:text-[16px]',
        roundedOutlinedBtn:
          'rounded-[200px] text-xs text-mm-primary-500 px-[18px] py-[12px] md:text-[15px] border border-mm-primary-500 md:px-6 md:py-2.5 xl:px-8 xl:py-3 xl:text-[16px] ',
        regulerBtn:
          'rounded-[10px] bg-mm-primary-500 text-xs px-[18px] py-[12px] md:text-[15px]  md:px-6 md:py-2.5 xl:px-8 xl:py-3 xl:text-[16px]',
        iconBtn: 'text-14-regular  p-2',
        profileCardbtn:
          'rounded-[200px] text-xs px-2 py-1.5 bg-mm-primary-500',
      },
    },
    defaultVariants: {
      variant: "roundedBtn",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label: string;
  icon?: IconType;
  reverse?: boolean;
}


const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  label,
  icon,
  reverse,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${cn(buttonVariants({ variant, className }))}`} {...props}>
      <div
        className={
          icon &&
          `flex justify-center items-center gap-2  ${reverse ? 'flex-row-reverse justify-center items-center gap-2' : 'flex-row'}`
        }
      >
        <span>{icon && <>{icon}</>}</span>
        <span className="min-w-fit">{label}</span>
      </div>
    </button>
  );
};

export default Button;
