import React, { useEffect } from "react";
import { Layout, Affix, Row, Col, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../router/index";

function Header() {
  let { pathname } = useLocation();
  // console.log(pathname);// /about /getstart / 三个url名字
  let activeIndex = nav.findIndex(item => item.to === pathname);
  // console.log(activeIndex);//（nav数组的index）

  useEffect(() => {
      
  }, []);

  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <div className="wrap">
          <Row>
            <Col xs={24} sm={8} md={6}>
              <h1 id="logo">
                <Link to="/">CNode中文社区</Link>
              </h1>
            </Col>
            <Col xs={24} sm={16} md={18}>
              <Menu
                mode="horizontal"
                theme="dark"
                selectedKeys={[activeIndex.toString()]}//带default的任何属性，挂载完成之后，执行更新并不会走它
              >
                {nav.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      <Link to={item.to}>{item.txt}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  );
}

export default Header;
