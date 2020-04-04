import React, { useEffect } from "react";
import { List, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import qs from "qs";
import { useLocation, Link, useParams } from "react-router-dom";
import { useTopics } from "../../store/action/index";
import TopicTag from "../index/topicTag";
import FromNow from "./fromNow";
import { Typography } from "antd";

function IndexList(props) {
  // let momoent = Moment;
  // console.log(moment());
  // console.log("123123132312",useSelector(state));
  let { loading, data } = props;
  // let { loading, data } = useSelector(state => state.topics); //拿到redux中的状态（是否载入和传回的数据）
  // console.log(useLocation());
  // console.log(useParams());
  let { search } = useLocation();
  let { tab = "all", page = 1 } = qs.parse(search.substring(1)); //给默认值的用处是为了防止在同一页面时仍然继续加载
  let getData = useTopics(); //让hooks帮我们发起axios请求，调用hooks
  useEffect(
    //useeffect 注意坑：当组件更新时，都回去请求，请求完了会执行hooks，然后又会发起新的更新。然后就会无限递归
    res => {
      getData(page, tab);
    },
    [tab, page] //要添加依赖，当tab和page更新的时候，才会去发起请求fetch新的数据；
  );
  return (
    <List
      className="topic_list"
      loading={loading}
      dataSource={data}
      renderItem={itemData => {
        //itemData 每一个数据
        let { id, title, last_reply_at, good, top, tab, author } = itemData;
        let { loginname, avatar_url } = author;
        // console.log(avatar_url);
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
            <Col xs={2} md={1}>
              <TopicTag tab={top ? "top" : good ? "good" : tab}></TopicTag>
            </Col>
            <Col xs={20} md={18}>
              <Link to={`/topic/${id}`} className="list_item">
                  {title}
              </Link>
            </Col>
            <Col xs={0} md={4}>
              <FromNow date={last_reply_at} />
            </Col>
          </List.Item>
        );
      }}
    ></List>
  );
}

export default IndexList;
