import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React from "react";
import "./App.css";
import {
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  HomeOutlined,
  BellOutlined,
  CreditCardOutlined,
  MailOutlined,
  ContainerOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Router from "./routes";

const App = () => {
  const { Header, Sider, Content } = Layout;
  const { page } = useParams();
  const link = useNavigate();

  
  console.log(page);
  return (
    <Layout style={{ backgroundColor: "#F9F6F4" }}>
      <Sider
        width="252px"
        style={{
          backgroundColor: "#F9F6F4",
          margin: "17px 36px 0 33px",
        }}
      >
        <div className="logo">
          <img src="./logo.png" alt="logo" height="58px"></img>
        </div>
        <Menu
          style={{ backgroundColor: "#F9F6F4", border: "0", marginTop: "55px" }}
          mode="inline"
          // defaultSelectedKeys={[selectTag()]}
        >
          <Menu.Item key={1} onClick={() => link("/")}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key={2}>Quản lý vé</Menu.Item>
          <Menu.Item key={3}>Đối soát vé</Menu.Item>
          <Menu.Item key={4} onClick={() => link("/setting")}>
            Cài đặt
          </Menu.Item>
        </Menu>
        <div>Gói dịch vụ</div>
      </Sider>
      <Layout style={{ backgroundColor: "#F9F6F4" }}>
        <Header
          className="site-layout-background"
          style={{
            height: "85px",
            backgroundColor: "#F9F6F4",
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            borderRadius: "24px",
            minHeight: "963px",
            backgroundColor: "white",
          }}
        >
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
