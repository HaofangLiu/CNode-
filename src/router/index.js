import React from "react";
import IndexPage from "../views/index/index";
import { Redirect } from "react-router-dom";
import TopicPage from "../views/topic";
import UserPage from "../views/user";
import GetStart from "../views/getstart";
import AboutPage from "../views/about";
import Page404 from "../views/page404";
import qs from "qs";

const types = ["all", "good", "share", "ask", "job", "dev"];

const route = [
  {
    path: "/",
    exact: true,
    render(props) {
      // console.log(props);
      let { location } = props;
      let { search } = location;
      // console.log(search);
      let { tab,page } = qs.parse(search.substr(1));//qs把对象从字符串转换为对象
      // console.log(tab,page)
      if(tab === undefined && page === undefined || types.includes(tab) && (page === undefined || page > 0)){
        return <IndexPage {...props} />;
      }else{
        return <Page404 {...props} />; 
      }
    }
  },
  {
    path: "/index",
    exact: true,
    render(props) {
      return <Redirect to="/"></Redirect>;
    }
  },
  {
    path: "/topic/:id",
    exact: true,
    render(props) {
      return <TopicPage {...props} />;
    }
  },
  {
    path: "/user/:username",
    exact: true,
    render(props) {
      return <UserPage {...props} />;
    }
  },
  {
    path: "/getstart",
    exact: true,
    render(props) {
      return <GetStart {...props} />;
    }
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props} />;
    }
  },
  {
    path: "*",
    exact: true,
    render(props) {
      return <Page404 {...props} />;
    }
  }
];

const nav = [
  {
    to: "/",
    txt: "首页"
  },
  {
    to: "/getstart",
    txt: "新手入门"
  },
  {
    to: "/about",
    txt: "关于我们"
  }
];

const indexNav = [
  {
    name: "all",
    url: "/?tab=all"
  },
  {
    name: "good",
    url: "/?tab=good"
  },
  {
    name: "share",
    url: "/?tab=share"
  },
  {
    name: "QandA",
    url: "/?tab=ask"
  },
  {
    name: "job",
    url: "/?tab=job"
  },
  {
    name: "dev",
    url: "/?tab=dev"
  }
];

export { route, nav, indexNav, types };
