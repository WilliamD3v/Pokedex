import { AiOutlineSearch } from "react-icons/ai";

interface searchProps {
  search?: string
  setSearch?: any
}

export const Search = ({ search, setSearch }: searchProps) => {
  return (
    <div>
      <span><AiOutlineSearch /></span>
      <input
        className="input-search"
        type="text"
        value={search}
        onChange={(e) => {
          const value = e.target.value
          setSearch(value)
        }}
        placeholder="Search Name"
      />
    </div>
  );
};
