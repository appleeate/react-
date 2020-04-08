import React from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, message, Dropdown, Avatar } from "antd";
import Icon, { DownOutlined } from "@ant-design/icons";
import { adminRoutes } from "../../routes/index";
import "./frame.css";
import { clearToken } from "../../utils/auth";
import logo from "./1.jpg";

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {
  const popMenu = (
    <Menu
      onClick={(p) => {
        if (p.key == "logOut") {
          clearToken();
          props.history.push("/login");
        } else {
          message.info(p.key);
        }
      }}
    >
      <Menu.Item key="notice">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: "#1890ff" }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <Avatar style={{ marginRight: 5 }}>U</Avatar>
            <span style={{ color: "#fff", marginRight: 5 }}>超级管理员</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routes.map((route) => {
              return (
                <Menu.Item
                  key={route.path}
                  onClick={(p) => props.history.push(p.key)}
                >
                  <Icon component={route.icon} />
                  {route.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: "16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(Index);
