import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button";

export type ProfileMatchCardType = {
    thumbnail: string;
    id?: string
    isAllUsers?: boolean,
    isSuggestion?: boolean,
    isSelection?: boolean,
    isSelected?: boolean
};

const ProfileMatchCard: FC<ProfileMatchCardType> = ({ thumbnail, id, isAllUsers,
    isSuggestion,
    isSelection, isSelected }) => {
    return (
        <div className="relative w-48 h-72 rounded-[10px] group overflow-hidden">
            <div className=" overflow-hidden w-full ">
                <img className="object-cover w-52 h-72" src={thumbnail ? thumbnail : 'https://i.pinimg.com/564x/7d/25/e7/7d25e7929340c91a95e6a364a4de35e1.jpg'} alt="" />
            </div>
            <div className="w-52 h-full transition-all bg-gradient-to-t from-black/60 to-transparent  absolute bottom-0 rounded-[10px]">
            </div>
            <div className="absolute bottom-2 w-full z-20">
                {
                    isAllUsers && <div className="w-full  flex items-center gap-2 justify-center px-2">
                        <Link to={`/dashboard/match_profile/${id}`}>
                            <Button className="bg-white text-black" variant={'profileCardbtn'} label="Find Match" />
                        </Link>
                        <Button variant={'profileCardbtn'} label="Create Match" />
                    </div>
                }
                {
                    isSuggestion && <div className="w-full  flex items-center gap-2 justify-center px-2">
                        {/* modal Open */}
                        <Button className="bg-white text-black" variant={'profileCardbtn'} label="Details" />
                        {/* Match Functionality */}
                        <Button variant={'profileCardbtn'} label="Create Match" />
                    </div>
                }
                {
                    !isSelected && isSelection && <div className="w-full  flex items-center gap-2 justify-center px-2">
                        {/* Select Functionality */}
                        <Button className="bg-white text-black" variant={'profileCardbtn'} label="Select Profile" />
                    </div>
                }
                {
                    isSelection && isSelected && <div className="px-2">
                        {/* if selected then this */}
                        <Button className="" variant={'profileCardbtn'} label="Selected" />
                    </div>
                }
            </div>

        </div>
    )
}

export default ProfileMatchCard;