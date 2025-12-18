import AddUserBtn from "./AddUserBtn.jsx";
import SearchBar from "./SearchBar.jsx";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      <SearchBar />
      <AddUserBtn />
    </div>
  );
};

export default SearchSection;
