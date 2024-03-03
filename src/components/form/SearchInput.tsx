// Search.js
import React from "react";
import { Input } from ".."

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const SearchInput: React.FC<SearchProps> = ({ search, setSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <Input
        className="w-full h-[50px] text-white max-w-md bg-[#5a5252]"
        size="md"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export { SearchInput };
