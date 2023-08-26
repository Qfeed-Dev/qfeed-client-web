import React from "react";
import Search from "../Search";
import SearchHeart from "../SearchHeart";

const BSearch = ({ selected }: { selected: Boolean }) => {
    return selected ? <SearchHeart /> : <Search />;
};

export default BSearch;
