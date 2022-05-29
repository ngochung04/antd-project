import { Col, DatePicker, Layout, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Area, Pie } from "@ant-design/plots";
import moment from "moment";
interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("home");
  });
  const data1 = [
    {
      type: "Vé chưa sử dụng",
      value: 13568,
    },
    {
      type: "Vé đã sử dụng",
      value: 56024,
    },
  ];
  const config1 = {
    appendPadding: 10,
    data: data1,
    angleField: "value",
    colorField: "type",
    color: ({ type }: any) => {
      if (type === "Vé chưa sử dụng") {
        return "#FF8A48";
      }
      return "#4F75FF";
    },
    radius: 1,
    innerRadius: 0.6,
    label: {
      content: "{value}",
      type: "spiders",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
    legen: {
      maxWidth: "0px",
      maxHeight: "0px",
    },
  };
  const data2 = [
    {
      type: "Vé chưa sử dụng",
      value: 13568,
    },
    {
      type: "Vé đã sử dụng",
      value: 56024,
    },
  ];
  const config2 = {
    appendPadding: 10,
    data: data2,
    angleField: "value",
    colorField: "type",
    color: ({ type }: any) => {
      if (type === "Vé chưa sử dụng") {
        return "#FF8A48";
      }
      return "#4F75FF";
    },
    radius: 1,
    innerRadius: 0.6,
    label: {
      content: "{value}",
      type: "spiders",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
  };

  const data = [
    {
      timePeriod: "THỨ 2",
      value: 140,
    },
    {
      timePeriod: "THỨ 3",
      value: 180,
    },
    {
      timePeriod: "THỨ 4",
      value: 165,
    },
    {
      timePeriod: "THỨ 5",
      value: 230,
    },
    {
      timePeriod: "THỨ 6",
      value: 215,
    },
    {
      timePeriod: "THỨ 7",
      value: 215,
    },
    {
      timePeriod: "CN",
      value: 190,
    },
  ];

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  return (
    <Layout.Content
      style={{
        borderRadius: "24px",
        minHeight: "963px",
        backgroundColor: "white",
        padding: "28.5px 24.5px",
      }}
    >
      <Typography.Title style={{ fontSize: "36px", fontWeight: "700" }}>
        Thống kê
      </Typography.Title>
      <div
        style={{
          height: "40px",
          marginTop: "36px",
          display: "flex",
          justifyContent: "end",
          paddingRight: "40px",
        }}
      >
        <DatePicker defaultValue={moment("2015/01/01")} />
      </div>
      <Area {...config} />
      <div style={{ marginTop: "64px" }}>Tổng doanh thu theo tuần</div>
      <h1 style={{ fontWeight: "bold", display: "inline" }}>525.145.000 </h1>
      <span style={{ display: "inline" }}>đồng</span>
      <Row>
        <Col span={4}>
          <div
            style={{
              height: "40px",
              marginTop: "36px",
            }}
          >
            <DatePicker defaultValue={moment("2015/01/01")} />
          </div>
        </Col>
        <Col span={12}>Gói gia đình</Col>
        <Col span={8}>Gói sự kiện</Col>
      </Row>
      <Row>
        <Col span={12}>
          <Pie {...config1} />
        </Col>
        <Col span={12}>
          <Pie {...config2} />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Home;
