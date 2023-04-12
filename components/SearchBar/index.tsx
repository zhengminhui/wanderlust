import React from "react";
import { Input } from "antd";
import { useRecoilState } from "recoil";
import { placeState } from "atoms/atom";

const { Search } = Input;

const SearchBar: React.FC = () => {
  const [place, setPlace] = useRecoilState(placeState);

  const onSearch = (value: string) => {
    setPlace(value);
  };

  return (
    <div className="mb-2">
      <Search
        className="bg-blue-300"
        placeholder="What to eat tonight?"
        allowClear
        bordered
        enterButton="Search"
        size="middle"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchBar;
