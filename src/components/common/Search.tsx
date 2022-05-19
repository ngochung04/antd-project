import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <Input placeholder="Enter your username" suffix={<SearchOutlined />} />
  );
};

export default Search;
