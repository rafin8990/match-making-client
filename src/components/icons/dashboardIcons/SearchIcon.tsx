


import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const SearchIcon: React.FC<IconType> = ({ size, className, strokeWidth = 3, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13.6071" height="13.6071" rx="6.80357" stroke="black" strokeOpacity="0.6" stroke-width="2" />
            <path d="M12.8926 13.5713L17.6426 18.9999" stroke="black" strokeOpacity="0.6" strokeWidth="3" />
        </svg>
    );
};

export default SearchIcon;
