import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React from "react";
import "./App.css";
import Button from "./components/common/Button";
import Pagination from "./components/common/Pagination";

const App = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout style={{ backgroundColor: "#F9F6F4" }}>
      <Sider
        width="252px"
        style={{ backgroundColor: "#F9F6F4", margin: "17px 36px 0 33px" }}
      >
        <div className="logo">
          <img src="./logo.png" alt="logo" height="58px"></img>
        </div>
        <Menu
          style={{ backgroundColor: "#F9F6F4" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Trang chủ",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Quản lý vé",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Đối soát vé",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Cài đặt",
            },
          ]}
        />
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
          <Button type="primary">Hủy</Button>
          <Button>Lưu</Button>
          <Pagination />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
