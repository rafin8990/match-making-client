import { IconType, iconVariants } from "../icons";
import { cn } from "../../../lib/utils";

const DashboardIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      className={cn(iconVariants({ size, className }))}
      width="36"
      {...props}
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="dashboard">
        <path
          id="Vector"
          d="M3 18.3059C3 14.8732 3 13.1569 3.7788 11.7341C4.5576 10.3113 5.98042 9.42826 8.82604 7.66219L11.826 5.8003C14.8341 3.93343 16.3381 3 18 3C19.6619 3 21.1659 3.93343 24.174 5.8003L27.174 7.66218C30.0196 9.42826 31.4424 10.3113 32.2212 11.7341C33 13.1569 33 14.8732 33 18.3059V20.5875C33 26.4387 33 29.3644 31.2426 31.1821C29.4853 33 26.6568 33 21 33H15C9.34314 33 6.51473 33 4.75736 31.1821C3 29.3644 3 26.4387 3 20.5875V18.3059Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          id="Vector_2"
          d="M22.5 27H13.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default DashboardIcon;
