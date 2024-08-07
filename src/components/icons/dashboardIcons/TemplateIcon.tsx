import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const DashboardHomeIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 2.0625V6.7875" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.75 2.0625V6.7875" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 13.3159V27.5591C33 32.5861 30.4167 35.9375 24.3889 35.9375H10.6111C4.58333 35.9375 2 32.5861 2 27.5591V13.3159C2 8.28885 4.58333 4.9375 10.6111 4.9375H24.3889C30.4167 4.9375 33 8.28885 33 13.3159Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.75 16.2373H24.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.75 24.1123H17.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
     
    );
};

export default DashboardHomeIcon;
