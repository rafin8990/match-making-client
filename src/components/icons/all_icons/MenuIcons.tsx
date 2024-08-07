
import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const MenuIcons: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="29" height="13" viewBox="0 0 29 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="9.96069" width="29" height="2.9976" rx="1.4988" fill="black" />
            <rect y="0.968018" width="29" height="2.9976" rx="1.4988" fill="black" />
        </svg>
    );
};

export default MenuIcons