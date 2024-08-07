import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "../icons/all_icons/FacebookIcon";
import TwitterIcon from "../icons/all_icons/TwitterIcon";
import YoutubeIcon from "../icons/all_icons/YoutubeIcon";

const DefaultFooter = () => {
	const location = useLocation();
	return (
		<div
			className={`sticky w-full top-[100vh] ${
				location?.pathname === "/login" ||
				location?.pathname === "/information" ||
				location?.pathname === "/register" ||
				location?.pathname === "/approval-request" ||
				location?.pathname === "/otp" ||
				location?.pathname === "/register-request" ||
				location?.pathname === "/forget-password"
					? "hidden"
					: "block"
			}`}
		>
			<div className="py-10 flex text-white bg-mm-primary-700 justify-center items-center flex-col gap-4">
				<div className="flex gap-5">
					<Link to={""}>
						<FacebookIcon size={"24"} />
					</Link>
					<Link to={""}>
						<TwitterIcon size={"24"} />
					</Link>
					<Link to={""}>
						<YoutubeIcon size={"24"} />
					</Link>
				</div>
				<div className="uppercase ">© Copyright 2022 - Pamoja TM</div>
			</div>
		</div>
	);
};

export default DefaultFooter;
/* /forget-password */
