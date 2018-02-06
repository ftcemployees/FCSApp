import React from 'react';
import {Row, Col, Input} from 'antd';

const Search = Input.Search;

export const SearchBar = () => {
  const SearchMessages = [
    "What would you like to find?",
    "Search by name, keyword, or tag",
    "Try searching for 'Leopard Print'",
    "Are you ready to discover something old?",
    //TODO -SearchMessages -- You may want to change this last one
    "If you are reading this, please help! I am trapped and I can't get out!!"
  ];

  return (
      <div className={'search-wrapper'}>
        {/*<Row>*/}
          {/*<Col span={16} offset={4}>*/}
            <Search placeholder={SearchMessages[Math.floor(Math.random() * SearchMessages.length)]} enterButton="Search"
                  size="large"/>
          {/*</Col>*/}
        {/*</Row>*/}
      </div>
  )
};