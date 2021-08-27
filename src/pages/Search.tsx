// layouts
import MainLayout from "../layouts/MainLayout";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
// components
import SearchDropdown from "../components/DropdownMenu/SearchDropdown";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import TableRow from "../components/Table/TableRow";

const Search = () => {
  return (
    <MainLayout title={"narazone 공고검색"}>
      <DropdownMenu title={"Print (검색 설정)"}>
        <SearchDropdown />
      </DropdownMenu>
      <Card>
        <Table head={['공고명', '기관명', '금액', '마감일']}>
          <TableRow data={['똥 치우기', 'MBSD', '100', '2000년후']} />
          <TableRow data={['밥 먹기', '이인규', '255', '2017-08-01']} />
        </Table>
      </Card>
    </MainLayout>
  );
};

export default Search;