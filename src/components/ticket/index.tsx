import {
  Col,
  DatePicker,
  Layout,
  Modal,
  Radio,
  Row,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { dataTicketPage } from "../../store/data";
import Button from "../common/Button";
import Search from "../common/Search";
import { FilterIcon } from "../icons/FilterIcon";
import { Checkbox } from "antd";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}
const Ticket = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("ticket");
  });

  const [modal, setModal] = useState(false);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (stt: string) => {
        return <div>{stt}</div>;
      },
    },
    {
      title: () => <div style={{ marginLeft: "64px" }}>Booking code</div>,
      dataIndex: "code",
      render: (stt: string) => {
        return <div style={{ marginLeft: "64px" }}>{stt}</div>;
      },
    },
    {
      title: "Số vé",
      dataIndex: "ticketNumber",
    },
    {
      title: () => <div style={{ marginLeft: "64px" }}>Tình trạng sử dụng</div>,
      dataIndex: "status",
      render: (status: number) => {
        switch (status) {
          case 0:
            return (
              <div
                style={{
                  marginLeft: "64px",
                  width: "fit-content",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#03AC00",
                  backgroundColor: "#DEF7E0",
                  border: "1px solid #03AC00",
                  borderRadius: "4px",
                  height: "31px",
                }}
              >
                <span style={{ fontSize: "18px", marginRight: "8px" }}>●</span>
                Chưa sử dụng
              </div>
            );
          case 1:
            return (
              <div
                style={{
                  marginLeft: "64px",
                  width: "fit-content",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#919DBA",
                  backgroundColor: "#EAF1F8",
                  border: "1px solid #919DBA",
                  borderRadius: "4px",
                  height: "31px",
                }}
              >
                <span style={{ fontSize: "18px", marginRight: "8px" }}>●</span>
                Đã sử dụng
              </div>
            );
          default:
            return (
              <div
                style={{
                  marginLeft: "64px",
                  width: "fit-content",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#FD5959",
                  backgroundColor: "#F8EBE8",
                  border: "1px solid #FD5959",
                  borderRadius: "4px",
                  height: "31px",
                }}
              >
                <span style={{ fontSize: "18px", marginRight: "8px" }}>●</span>
                Hết hạn
              </div>
            );
        }
      },
    },
    {
      title: () => (
        <div
          style={{
            textAlign: "right",
            marginRight: "32px",
          }}
        >
          Ngày sử dụng
        </div>
      ),
      dataIndex: "dateUsed",
      render: (date: string) => {
        return (
          <div
            style={{
              textAlign: "right",
              marginRight: "32px",
            }}
          >
            {date}
          </div>
        );
      },
    },
    {
      title: () => (
        <div
          style={{
            textAlign: "right",
            marginRight: "32px",
          }}
        >
          Ngày xuất vé
        </div>
      ),
      dataIndex: "dateExport",
      render: (date: string) => {
        return (
          <div
            style={{
              textAlign: "right",
              marginRight: "32px",
            }}
          >
            {date}
          </div>
        );
      },
    },
    {
      title: "Cổng check-in",
      dataIndex: "portCheckIn",
    },
  ];

  return (
    <Layout.Content
      style={{
        borderRadius: "24px",
        minHeight: "963px",
        backgroundColor: "white",
        padding: "34px 24.5px",
      }}
    >
      <Typography.Title
        style={{ marginBottom: "46px", fontSize: "36px", fontWeight: "700" }}
      >
        Danh sách vé
      </Typography.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Search size="445px" placeholder="Tìm bằng số vé" />
        <div style={{ marginTop: "-4px" }}>
          <Button margin="0 10px" width="128px" onClick={() => setModal(true)}>
            <span
              style={{
                display: "inline-block",
                transform: "translate(-6px, 4px)",
              }}
            >
              <FilterIcon />
            </span>
            Lọc vé
          </Button>
          <Button width="180px">Xuất file (.csv)</Button>
        </div>
      </div>
      <Table
        bordered={false}
        style={{ marginTop: "30px", alignItems: "center" }}
        dataSource={dataTicketPage}
        columns={columns}
        pagination={{
          pageSize: 12,
          style: {
            marginTop: "48px",
            display: "flex",
            justifyContent: "center",
          },
          size: "small",
          prevIcon: () => <span style={{ color: "#A5A8B1" }}> &#9664;</span>,
          nextIcon: <span style={{ color: "#A5A8B1" }}> &#9654;</span>,
        }}
      />
      <Modal
        visible={modal}
        onOk={() => setModal(false)}
        closeIcon={<></>}
        width="630px"
        bodyStyle={{ borderRadius: "16px" }}
        onCancel={() => setModal(false)}
        cancelText="Hủy"
        okButtonProps={{
          style: {
            marginRight: "230px",
            height: "40px",
            padding: "0 48px",
            borderRadius: "8px",
            backgroundColor: "#FF993C",
            border: "2px solid #FF993C",
            fontSize: "16px",
            fontWeight: "600",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        okText="Lọc"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{ fontSize: "24px", fontWeight: "600", marginTop: "-4px" }}
          >
            Lọc vé
          </span>
        </div>
        <Row>
          <Col span={11}>
            <div style={{ marginTop: "24px", marginBottom: "4px" }}>
              <span style={{ fontSize: "16px", margin: "opx 4px" }}>
                Từ ngày
              </span>
            </div>
            <DatePicker
              style={{ height: "40px", width: "145px" }}
              placeholder="dd:mm:yy"
            />
          </Col>
          <Col span={12}>
            <div style={{ marginTop: "24px", marginBottom: "4px" }}>
              <span style={{ fontSize: "16px", margin: "0px 4px" }}>
                Đến ngày
              </span>
            </div>
            <DatePicker
              style={{ height: "40px", width: "145px" }}
              placeholder="dd:mm:yyy"
            />
          </Col>
        </Row>
        <div style={{ fontSize: "16px", margin: "28px 0 0 4px" }}>
          Tình trạng sử dụng
        </div>

        <Radio.Group>
          <Radio value={1} style={{ width: "135px" }}>
            Tất cả
          </Radio>
          <Radio value={2} style={{ width: "135px" }}>
            Đã sử dụng
          </Radio>
          <Radio value={3} style={{ width: "135px" }}>
            Chưa sử dụng
          </Radio>
          <Radio value={4} style={{ width: "135px" }}>
            Hết hạn
          </Radio>
        </Radio.Group>
        <div style={{ fontSize: "16px", margin: "28px 0 0 4px" }}>
          Cổng Check-in
        </div>

        <Row>
          <Col span={8}>
            <Checkbox value="All">Check All</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="A">Cổng 1</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">Cổng 2</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">Cổng 3</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">Cổng 4</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">Cổng 5</Checkbox>
          </Col>
        </Row>
      </Modal>
    </Layout.Content>
  );
};

export default Ticket;
