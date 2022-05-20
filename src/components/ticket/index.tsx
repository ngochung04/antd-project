import { Layout, Typography } from "antd";
import React, { useEffect } from "react";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Ticket = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("ticket");
  });

  return (
    <Layout.Content
      style={{
        borderRadius: "24px",
        minHeight: "963px",
        backgroundColor: "white",
        padding: "34px 24.5px",
      }}
    >
      <Typography.Title style={{ fontSize: "36px", fontWeight: "700" }}>
        Danh sách vé
      </Typography.Title>
    </Layout.Content>
  );
};

export default Ticket;
