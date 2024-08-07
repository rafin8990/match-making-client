


import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const RegisterRequestIcon: React.FC<IconType> = ({ size, className, strokeWidth = 3, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0568 30.8955C8.65359 30.8955 4.03809 30.0781 4.03809 26.8056C4.03809 23.5331 8.62384 20.5566 14.0568 20.5566C19.4599 20.5566 24.0754 23.5047 24.0754 26.7758C24.0754 30.0469 19.4896 30.8955 14.0568 30.8955Z" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.0566 15.8894C17.6025 15.8894 20.4783 13.0136 20.4783 9.46765C20.4783 5.92032 17.6025 3.0459 14.0566 3.0459C10.5106 3.0459 7.63481 5.92032 7.63481 9.46765C7.62206 13.0008 10.4781 15.8766 14.0112 15.8894H14.0566Z" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.1025 11.5161V17.1969" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.0022 14.3564H24.208" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default RegisterRequestIcon;
