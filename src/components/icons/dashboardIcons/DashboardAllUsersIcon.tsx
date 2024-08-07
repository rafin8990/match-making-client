

import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const DashboardAllUsersIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 15C16.8137 15 19.5 12.3137 19.5 9C19.5 5.68629 16.8137 3 13.5 3C10.1863 3 7.5 5.68629 7.5 9C7.5 12.3137 10.1863 15 13.5 15Z" stroke="currentColor" strokeWidth="3" />
            <path opacity="0.5" d="M18.75 6.51165C19.5563 5.29913 20.9348 4.5 22.5 4.5C24.9854 4.5 27 6.51473 27 9C27 11.4853 24.9854 13.5 22.5 13.5C20.9348 13.5 19.5563 12.7009 18.75 11.4883" stroke="currentColor" strokeWidth="3" />
            <path d="M13.5 31.5C19.299 31.5 24 28.8137 24 25.5C24 22.1863 19.299 19.5 13.5 19.5C7.70101 19.5 3 22.1863 3 25.5C3 28.8137 7.70101 31.5 13.5 31.5Z" stroke="currentColor" strokeWidth="3" />
            <path opacity="0.5" d="M27 21C29.6313 21.5771 31.5 23.0383 31.5 24.75C31.5 26.2939 29.9794 27.6343 27.75 28.3056" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>

    );
};

export default DashboardAllUsersIcon;
