
import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const TikIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L6.66667 12L2 7.00022" stroke="#006341" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default TikIcon;
