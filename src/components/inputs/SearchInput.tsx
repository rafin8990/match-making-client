import { FC } from "react";
import SearchIcon from "../icons/dashboardIcons/SearchIcon";
import TextInput from "./TextInput";

type SearchInputProps = {
    handleSearchSubmit: Function;
};

export const SearchInput: FC<SearchInputProps> = ({ handleSearchSubmit }) => {
    const handleSearch = async (e: any) => {
        try {
            await handleSearchSubmit(e.target.value);
        } catch (error) { }
    };
    return (
        <div className="flex">
            <div className="p-0 m-0 w-full flex items-center rounded-xl relative ">
                <TextInput
                    onChange={handleSearch}
                    className="w-full h-full px-4 "
                    id="Search"
                    placeholder="Search"
                />
                <SearchIcon className=" absolute  right-4" />
            </div>
        </div>
    );
};
