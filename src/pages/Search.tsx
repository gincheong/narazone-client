// layouts
import MainLayout from "../layouts/MainLayout";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import SearchDropdown from "../components/DropdownMenu/SearchDropdown";

const Search = () => {
  return (
    <MainLayout title={"narazone 공고검색"}>
      <DropdownMenu title={"Print (검색 설정)"}>
        <SearchDropdown />
      </DropdownMenu>
      검색 결과
    </MainLayout>
  );
};

export default Search;