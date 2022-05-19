import { Layout, Menu } from "antd";
import React  from "react";
import {  useNavigate } from "react-router-dom";
import { HomeIcon, HomeIconActive } from "./icons/HomeIcon";
import { TicketICon, TicketIconActive } from "./icons/TicketICon";
import {
  CheckTicketIcon,
  CheckTicketIconActive,
} from "./icons/CheckTicketICon";
import { SettingIcon, SettingIconActive } from "./icons/SettingIcon";
import Search from "./common/Search";

interface Props {
  children: React.ReactNode;
  tagIndex: string;
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const AppLayout = ({ children, tagIndex, setTagIndex }: Props) => {
  const { Header, Sider } = Layout;
  const link = useNavigate();
  return (
    <Layout style={{ backgroundColor: "#F9F6F4" }}>
      <Sider
        width="251px"
        style={{
          backgroundColor: "#F9F6F4",
          margin: "16.5px 36px 0 33px",
        }}
      >
        <div className="logo">
          <img src="./logo.png" alt="logo" height="58px"></img>
        </div>
        <Menu
          style={{ backgroundColor: "#F9F6F4", border: "0", marginTop: "55px" }}
          mode="inline"
          selectedKeys={[tagIndex]}
        >
          <Menu.Item
            key="home"
            onClick={() => {
              link("/");
              setTagIndex("home");
            }}
          >
            {tagIndex === "home" ? <HomeIconActive /> : <HomeIcon />}
            Trang chủ
          </Menu.Item>
          <Menu.Item
            key="ticket"
            onClick={() => {
              link("/ticket");
              setTagIndex("ticket");
            }}
          >
            {tagIndex === "ticket" ? <TicketIconActive /> : <TicketICon />}
            Quản lý vé
          </Menu.Item>
          <Menu.Item
            key="check"
            onClick={() => {
              link("/check");
              setTagIndex("check");
            }}
          >
            {tagIndex === "check" ? (
              <CheckTicketIconActive />
            ) : (
              <CheckTicketIcon />
            )}
            Đối soát vé
          </Menu.Item>
          <Menu.Item
            key="setting"
            onClick={() => {
              link("/setting");
              setTagIndex("setting");
            }}
          >
            {tagIndex === "setting" ? <SettingIconActive /> : <SettingIcon />}
            Cài đặt
          </Menu.Item>
        </Menu>
        <div
          style={{
            paddingLeft: "12px",
            letterSpacing: "0.5px",
            marginTop: "-5px",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Gói dịch vụ
        </div>
      </Sider>
      <Layout style={{ backgroundColor: "#F9F6F4" }}>
        <Header
          className="site-layout-background"
          style={{
            height: "85px",
            backgroundColor: "#F9F6F4",
            padding: "0px",
          }}
        >
          <Search />
        </Header>
        {children}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
