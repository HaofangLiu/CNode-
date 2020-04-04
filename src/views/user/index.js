import React, { useEffect } from "react";
import { Card, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { useUserDetail } from "../../store/action";
import { useSelector } from "react-redux";
import IndexList from "../index/indexList";
import UserTopicList from "./userList";
import { UserOutlined } from "@ant-design/icons";
import FromNow from "../index/fromNow";

function UserPage() {
  let { username } = useParams();
  let getData = useUserDetail();
  let { data, loading } = useSelector(state => state.user);
  console.log(data, loading);
  let {
    loginname,
    avatar_url,
    create_at,
    score,
    recent_topics = [],
    recent_replies = [],
    githubUsername
  } = data; //默认值
  useEffect(() => {
    getData(username);
  }, [username]);

  // console.log(username);
  return (
    <div className="userPage">
      <Card loading={loading} className="user-detail">
        <Avatar
          size={100}
          icon={<UserOutlined></UserOutlined>}
          src={avatar_url}
          title={loginname}
        ></Avatar>
        <p>
          用户名：{loginname} 注册时间：{<FromNow date={create_at} />} 积分：
          {score}
        </p>
        <p>
          github:
          <a href={`https://github.com/${githubUsername}`} target="_blank">
            {githubUsername}
          </a>
        </p>
      </Card>
      <Card
        loading={loading}
        title={"topic"}
        type={"innder"}
        className="card_topic"
      >
        <UserTopicList loading={loading} data={recent_topics}></UserTopicList>
      </Card>
      <Card loading={loading} title={"最近参与的话题"} type={"innder"}>
        <UserTopicList
          className="canyou"
          loading={loading}
          data={recent_replies}
        ></UserTopicList>
      </Card>
    </div>
  );
}

export default UserPage;
