
import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const MatchProfileListIcon: React.FC<IconType> = ({ size, className, strokeWidth = 3, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 9L31.5 9.00099M15 18L31.5 18.001M15 27L31.5 27.001M4.5 7.5L7.5 6V15M7.5 15H4.5M7.5 15H10.5M10.5 30H4.5L9.61911 25.5208C10.1789 25.0309 10.5 24.3234 10.5 23.5795C10.5 22.1548 9.34512 21 7.9205 21H7.5C6.10212 21 4.92754 21.9561 4.59451 23.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default MatchProfileListIcon;
