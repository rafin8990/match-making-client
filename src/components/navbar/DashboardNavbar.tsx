import NotificationIcon from "../icons/dashboardIcons/NotificationIcon";


// profile Menu Dropwdown
// const ProfileMenuDropdown = () => {
//     const [open, setOpen] = useState(false)

//     return <div>
//         <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
//             <DropdownMenuTrigger className="flex items-center gap-10">
//                 <div className="flex gap-6">
//                     <div className="w-12 h-12 overflow-hidden rounded-full">
//                         <img src="/thumbnail.jpeg" alt="" />
//                     </div>
//                     <div className="text-left">
//                         <p className="font-bold">Cameron Williamson</p>
//                         <p className="font-light text-sm">bill.sanders@example.com</p>
//                     </div>
//                 </div>
//                 <div>
//                     <ArrowDownIcon />
//                 </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//                 <DropdownMenuItem>
//                     Sign Out
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>

//     </div>
// }




//  Default Component
const DashboardNavbar = () => {
    return (
        <div className="bg-[#f9f9f9] py-7 px-5 flex justify-between items-center mr-[280px]">
            <div>
                <p className="text-xl">Hi! Cameron Williamson </p>
            </div>
            <div className="flex items-center justify-between gap-10">  
                <div className="p-3  bg-gray-300 rounded-full">
                    <NotificationIcon size={'24'}/>
                </div>
                {/* <ProfileMenuDropdown /> */}
            </div>

        </div>
    )
}

export default DashboardNavbar