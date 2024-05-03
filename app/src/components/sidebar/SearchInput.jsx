import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />

      <button type="submit" className="btn btn-circle text-white">
        <FaSearch className="h-6 w-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
