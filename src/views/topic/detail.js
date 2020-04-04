import React, { Fragment } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import TopicTag from "../index/topicTag";
import FromNow from "../index/fromNow";

function DetailsPage(props) {
  let { loading, data } = props;
  let { title, author, content, good, top, create_at, tab, visit_count } = data;
  // console.log(data);
  // console.log(loading, data);
  return (
    <Card
      bordered
      loading={loading}
      title={
        <Fragment>
          <h1>
            <TopicTag tab={top ? "top" : good ? "good" : tab}></TopicTag>
            {title}
          </h1>
          <p>
            - Author:
            <Link to={`/user/${author.loginname}`}>{author.loginname}</Link> -
            create date: {<FromNow date={create_at}></FromNow>} - visit count:{" "}
            {visit_count}
          </p>
        </Fragment>
      }
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Card>
  );
}

export default DetailsPage;
