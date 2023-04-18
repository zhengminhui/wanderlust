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
    <div className="my-4">
      <Search
        placeholder="What to eat tonight?"
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default SearchBar;
