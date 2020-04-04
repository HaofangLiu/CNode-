import React from "react";
import { Pagination } from "antd";
import qs from "qs";
import { useLocation, Link } from "react-router-dom";

function IndexPagination() {
  let { search } = useLocation();
  let { tab = "all", page = 1 } = qs.parse(search.substring(1));
  return (
    <div className="index_pagination">
      <Pagination
        // defaultCurrent={page}//用default current，然后当重新载入的时候，重新家在这个页码；
        current={parseInt(page)}
        total={1000}
        pageSize={15}
        itemRender={(page, type) => {
          switch (type) {
            case "page":
              return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>;
            case "prev":
              return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>;
            case "next":
              return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>;
            default:
              return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>;
          }
        }}
      />
    </div>
  );
}

export default IndexPagination;
