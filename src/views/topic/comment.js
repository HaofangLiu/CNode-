import React from "react";
import { Card, List, Comment, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import FromNow from "../index/fromNow";
import { Link } from "react-router-dom";

function CommentRep(props) {
  let { data = [], loading } = props;
  data = data.reverse();
  return (
    <Card title="评论" loading={loading}>
      <List
        dataSource={data}
        renderItem={itemData => {
          let { author, content, create_at } = itemData;
          //   console.log(itemData);
          return (
            <List.Item>
              <Comment
                author={
                  <Link to={`/user/${author.loginname}`}>
                    {author.loginname}
                  </Link>
                }
                avatar={
                  <Link to={`/user/${author.loginname}`}>
                    <Avatar
                      icon={<UserOutlined></UserOutlined>}
                      src={author.avatar_url}
                      title={author.loginname}
                    ></Avatar>
                  </Link>
                }
                content={
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                }
                datetime={
                  <time>post at : {<FromNow date={create_at}></FromNow>}</time>
                }
              ></Comment>
            </List.Item>
          );
        }}
      ></List>
    </Card>
  );
}

export default CommentRep;
