import React from 'react';
import {SearchBar} from "../SearchBar/SearchBar";
import {Row, Col} from 'antd';

export const TopNav = () => {
  return (
      <Row>
        <Col span={4}>
          <h1>CKM</h1>
        </Col>
        <Col span={16}>
          <SearchBar/>
        </Col>
      </Row>
  )
};