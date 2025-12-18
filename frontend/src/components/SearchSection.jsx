import AddUserBtn from "./AddUserBtn.jsx";
import SearchBar from "./SearchBar.jsx";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center px-8 py-4 gap-6">
      <SearchBar />
      <AddUserBtn />
    </div>
  );
};

export default SearchSection;
