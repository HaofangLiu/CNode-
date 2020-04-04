import React from "react";
import { Button, Pagination } from "antd";
import IndexNav from "./indexNav";
import IndexList from "./indexList";
import IndexPagination from "./indexPagination";
import { useSelector } from "react-redux";

function IndexPage() {
  let { loading, data } = useSelector(state => state.topics); //拿到redux中的状态（是否载入和传回的数据）
  return (
    <div className="index_page">
      <IndexNav />
      <IndexList loading={loading} data={data} />
      <IndexPagination />
    </div>
  );
}

export default IndexPage;
