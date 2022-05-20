import { Layout, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Data } from "../../interfaces/Data";
import { dataTicketPage } from "../../store/data";
import Button from "../common/Button";
import Search from "../common/Search";
import { FilterIcon } from "../icons/FilterIcon";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Ticket = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("ticket");
  });
  const [dataSource, setDataSource] = React.useState<Data[]>(dataTicketPage);
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Booking code",
      dataIndex: "code",
    },
    {
      title: "Số vé",
      dataIndex: "ticketNumber",
    },
    {
      title: "Tình trạng sử dụng",
      dataIndex: "status",
      render: (status: number) => {
        switch (status) {
          case 0:
            return (
              <div
                style={{
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
      title: "Ngày sử dụng",
      dataIndex: "dateUsed",
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "dateExport",
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
          <Button margin="0 10px" width="128px">
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
        dataSource={dataSource}
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
    </Layout.Content>
  );
};

export default Ticket;
