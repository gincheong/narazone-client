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
// styles
import useStyles from '../assets/styles/jss/SearchStyles';

const Search = () => {
  const classes = useStyles();
  const { bids } = useSelector((state: RootState) => state.bidReducer);
  
  const sliceMoney = (money: string) => {
    return Math.round(parseInt(money.replace(/,/g, '')) / 1000000);
  };

  const sliceDate = (deadline: string) => {
    return deadline.slice(5, 10);
  };

  return (
    <MainLayout title={"narazone 공고검색"}>
      <DropdownMenu title={"Print (검색 설정)"}>
        <SearchDropdown />
      </DropdownMenu>
      <Card>
        <Table
          head={['공고명', '기관명', '금액', '마감']}
          headClassName={classes.row}
        >

          {/* // XXX type 수정해야 함, API 변경되면 수행 */}
          {Object.entries(bids).map((keyval: any) => 
            keyval[1].map((each: any) => 
              <TableRow
                className={classes.row}
                key={each[0].name}
                highlight={keyval[0]}
                data={
                  [
                    each[0].name,
                    each[1].gov,
                    sliceMoney(each[3].money),
                    sliceDate(each[2].deadline)
                  ]
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