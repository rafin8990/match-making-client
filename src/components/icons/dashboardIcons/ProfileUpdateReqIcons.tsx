


import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const ProfileUpdateReqIcons: React.FC<IconType> = ({ size, className, ...props }) => {
    return (

        <svg {...props} className={cn(iconVariants({ size, className }))} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 33L7.14088 28.9913C9.02813 22.3602 14.0141 19 19 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 19C22.866 19 26 15.6421 26 11.5C26 7.35786 22.866 4 19 4C15.134 4 12 7.35786 12 11.5C12 15.6421 15.134 19 19 19Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="bevel" />
            <path d="M26.5 36C30.6421 36 34 32.866 34 29C34 25.134 30.6421 22 26.5 22C22.3579 22 19 25.134 19 29C19 32.866 22.3579 36 26.5 36Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 29H29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 26V32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

       
    );
};

export default ProfileUpdateReqIcons;
