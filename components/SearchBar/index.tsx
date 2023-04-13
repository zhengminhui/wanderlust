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
    <div className="mb-6">
      <Search
        placeholder="What to eat tonight?"
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        style={{ width: "95%" }}
      />
    </div>
  );
};

export default SearchBar;
