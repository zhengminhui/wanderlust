import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState("");
  const onSearch = (value: string) => {
    console.log(value);
    setAddress(value);
  };

  return (
    <div>
      <Search
        className="bg-blue-300"
        placeholder="What to eat tonight?"
        allowClear
        bordered
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className="my-2 mx-2">{address}</div>
    </div>
  );
};

export default SearchBar;
