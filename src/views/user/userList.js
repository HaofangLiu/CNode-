import React from "react";
import { List, Col, Avatar } from "antd";
import FromNow from "../index/fromNow";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function UserTopicList(props) {
  let { loading, data } = props;

  return (
    <List
      className="userTopic_List"
      loading={loading}
      dataSource={data}
      renderItem={dataItem => {
        let { id, title, last_reply_at, author } = dataItem;
        let { loginname, avatar_url } = author;
        return (
          <List.Item>
            <Col xs={2} md={1}>
              <Link to={`/user/${loginname}`}>
                <Avatar
                  icon={<UserOutlined></UserOutlined>}
                  src={avatar_url}
                  title={loginname}
                ></Avatar>
              </Link>
            </Col>
            <Col xs={22} md={20}>
              <Link to={`/topic/${id}`} className="list_item">
                {title}
              </Link>
            </Col>
            <Col xs={0} md={3}>
              <FromNow date={last_reply_at} />
            </Col>
          </List.Item>
        );
      }}
    ></List>
  );
}

export default UserTopicList;
