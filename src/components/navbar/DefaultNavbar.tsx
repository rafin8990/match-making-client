// import Button from "../buttons/Button";
// import MenuIcons from "../icons/all_icons/MenuIcons";
import Logo from "../logo/Logo";
// import { Sheet, SheetContent, } from "../../components/ui/sheet";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import ArrowDownIcon from "../icons/all_icons/ArrowDownIcon";
import { Link } from "react-router-dom";
import Button from "../ui/button";
// import { useState } from "react";

// Responsiveness
// const HamburgerMenu = () => {
// 	const [open, setOpen] = useState(false);
// 	return (
// 		<div>
// 			<Sheet open={open} onOpenChange={() => setOpen(!open)}>
// 			{/*  */}
// 				<div  onClick={() => setOpen(!open)}  className="cursor-pointer">
// 					<MenuIcons />
// 				</div>
// 				<SheetContent className="flex flex-col  justify-between">
// 					<div>
// 						<div>
// 							<Logo />
// 						</div>
// 						<div className="space-y-5 py-10 px-10">
// 							<div  onClick={() => setOpen(!open)} >

// 								<Link to={"/"}>Home</Link>
// 								<p className="h-1 w-4 bg-green-500 " />
// 							</div>
// 						</div>
// 					</div>

// 					<div className="flex flex-col sm:flex-row gap-2 w-full border">
// 						<Link className="w-full" to={"/login"}>
// 							<Button
// 								onClick={() => setOpen(!open)}
// 								className=" w-full"
// 								label="Login"
// 								variant={"roundedOutlinedBtn"}
// 							/>
// 						</Link>

// 						<Link className="w-full" to={"/register"}>
// 							<Button
// 								onClick={() => setOpen(!open)}
// 								className=" w-full"
// 								label="Register"
// 								variant={"roundedBtn"}
// 							/>
// 						</Link>
// 					</div>
// 				</SheetContent>
// 			</Sheet>
// 		</div>
// 	);
// };

// profile Menu Dropwdown
// const ProfileMenuDropdown = () => {
//   const [open, setOpen] = useState(false)

//   return <div>
//     <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
//       <DropdownMenuTrigger className="flex items-center gap-2">
//         <Avatar className="border">
//           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>

//         <div>
//           <ArrowDownIcon />
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuItem className="flex gap-4">
//           <div className="w-12 h-12 overflow-hidden rounded-full">
//             <img src="/thumbnail.jpeg" alt="" />
//           </div>
//           <div>
//             <p className="font-bold">jsadhsjkhdj ss</p>
//             <p className="font-light">sjhbdhjs@jksjdksj</p>
//           </div>
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setOpen(!open)}>
//           <Link to={'/profile'}>
//             Profile setting
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           Sign Out
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>

//   </div>
// }

// Default Component
const DefaultNavbar = () => {
	return (
		<div>
			<div className=" py-1 flex justify-between items-center">
				<div>
					<Logo />
				</div>
				<div className="block md:hidden">
					{/* <HamburgerMenu /> */}
					HM
				</div>
				{/* From Medium To Large */}
				<div className="hidden md:block">
					<div className="flex justify-between items-center gap-5">
						<div>
							<Link to={"/"}>Home</Link>
							<p className="h-1 w-4 bg-green-500 mx-auto" />
						</div>
						<div className="">
							{/* <ProfileMenuDropdown /> */}
							<Link to={"/login"}>
								<Button
									className=""
									label="Login"
									variant={"roundedOutlinedBtn"}
								/>
							</Link>
						</div>
						<div>
							<Link to={"/register"}>
								<Button className="" label="Register" variant={"roundedBtn"} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DefaultNavbar;
