import { Layout, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { dataTicketPage } from "../../store/data";
import Button from "../common/Button";
import Search from "../common/Search";
import { FilterIcon } from "../icons/FilterIcon";
interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Check = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("check");
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
      title: () => <div style={{}}>Số vé</div>,
      dataIndex: "code",
      render: (stt: string) => {
        return <div style={{}}>{stt}</div>;
      },
    },
    {
      title: () => <div style={{}}>Tên sự kiện</div>,
      render: (stt: string) => {
        return <div style={{}}>Hội chợ triển lãm tiêu dùng 2021</div>;
      },
    },
    {
      title: () => (
        <div
          style={{
            textAlign: "right",
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
            }}
          >
            {date}
          </div>
        );
      },
    },

    {
      title: "Loại vé",
      render: () => {
        return <div>Vé cổng</div>;
      },
    },
    {
      title: "Cổng check-in",
      render: () => {
        return <div>Cổng 1</div>;
      },
    },
    {
      title: "",
      render: () => {
        return (
          <div
            style={{
              color: "#A5A8B1",
              fontWeight: "500",
            }}
          >
            Chưa đối soát
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Layout.Content
        style={{
          borderRadius: "24px",
          maxWidth: "1097px",
          minHeight: "963px",
          backgroundColor: "white",
          padding: "28px",
          marginRight: "32px",
        }}
      >
        <Typography.Title
          style={{ marginBottom: "46px", fontSize: "36px", fontWeight: "700" }}
        >
          Đối soát vé
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
      <Layout.Content
        style={{
          borderRadius: "24px",
          minWidth: "446px",
          minHeight: "963px",
          backgroundColor: "white",
          padding: "34px 24.5px",
        }}
      >
        <Typography.Title
          style={{
            marginTop: "-12px",
            marginBottom: "46px",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Lọc vé
        </Typography.Title>
      </Layout.Content>
    </div>
  );
};

export default Check;
