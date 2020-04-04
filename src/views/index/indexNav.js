import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { indexNav, types } from "../../router/index";
import qs from "qs";

function IndexNav() {
  let { search } = useLocation();
  let { tab } = qs.parse(search.substring(1));
  let activeIndex = tab?types.indexOf(tab):0;
  //   console.log(search);//?tab=all
  //   console.log(qs.parse(search.substring(1)));//将string转换为对象,substring去掉第一位的问好，parse转换为对象
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[activeIndex.toString()]}>
      {indexNav.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={item.url}>{item.name}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default IndexNav;
