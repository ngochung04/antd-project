import { Layout, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { dataTicketPage } from "../../store/data";
import Button from "../common/Button";
import Search from "../common/Search";
import { FilterIcon } from "../icons/FilterIcon";
interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Setting = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("setting");
  });
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (stt: string) => {
        return <div>{stt}</div>;
      },
    },
    {
      title: () => <div style={{}}>Mã gói</div>,
      dataIndex: "code",
      render: (stt: string) => {
        return <div style={{}}>{stt}</div>;
      },
    },
    {
      title: () => <div style={{}}>Tên gói</div>,
      dataIndex: "code",
      render: (stt: string) => {
        return <div style={{}}>{stt}</div>;
      },
    },
    {
      title: () => (
        <div
          style={{
            textAlign: "right",
          }}
        >
          Ngày áp dụng
        </div>
      ),
      dataIndex: "dateUsed",
      render: (date: string) => {
        return (
          <div
            style={{
              textAlign: "right",
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
          }}
        >
          Ngày hết hạn
        </div>
      ),
      dataIndex: "dateExport",
      render: (date: string) => {
        return (
          <div
            style={{
              textAlign: "right",
            }}
          >
            {date}
          </div>
        );
      },
    },
    {
      title: () => <div style={{}}>Giá vé {"(VND/Combo)"}</div>,
      dataIndex: "code",
      render: (stt: string) => {
        return <div style={{}}>{stt}</div>;
      },
    },
    {
      title: () => <div style={{}}>Tình trạng</div>,
      dataIndex: "status",
      render: (status: number) => {
        switch (status) {
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
                  color: "#03AC00",
                  backgroundColor: "#DEF7E0",
                  border: "1px solid #03AC00",
                  borderRadius: "4px",
                  height: "31px",
                }}
              >
                <span style={{ fontSize: "18px", marginRight: "8px" }}>●</span>
                Đang áp dụng
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
                Tắt
              </div>
            );
        }
      },
    },

    {
      title: "",
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
        Danh sách gói vé
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
    </Layout.Content>
  );
};

export default Setting;
