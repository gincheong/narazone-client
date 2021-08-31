import React from 'react';
import { useSelector } from 'react-redux';
// stores
import { RootState } from '../reducers/rootReducer';
// layouts
import MainLayout from "../layouts/MainLayout";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
// components
import SearchDropdown from "../components/DropdownMenu/SearchDropdown";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import TableRow from "../components/Table/TableRow";

const Search = () => {
  const { bids } = useSelector((state: RootState) => state.bidReducer);

  React.useEffect(() => {
    console.log(bids);
  }, [bids]);

  return (
    <MainLayout title={"narazone 공고검색"}>
      <DropdownMenu title={"Print (검색 설정)"}>
        <SearchDropdown />
      </DropdownMenu>
      <Card>
        <Table head={['공고명', '기관명', '금액', '마감일']}>

          {/* // XXX type 수정해야 함, API 변경되면 수행 */}
          {Object.entries(bids).map((keyval: any) => 
            keyval[1].map((each: any) => 
              <TableRow
                key={each[0].name}
                bold={keyval[0]}
                data={
                  [each[0].name, each[1].gov, each[3].money, each[2].deadline]
                }
              />
            )
          )}
          
        </Table>
      </Card>
    </MainLayout>
  );
};

export default Search;