

import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const FacebookIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))}
            width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.9303 5.57L7.6213 8.5H5.2793V17H1.7613V8.5H0.00830078V5.57H1.7613V3.806C1.7613 1.423 2.7523 0 5.5693 0H7.9103V2.93H6.4453C5.3523 2.93 5.2793 3.343 5.2793 4.106V5.57H7.9303Z" fill="currentColor" />
        </svg>
      
    );
};

export default FacebookIcon;
