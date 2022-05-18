import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div style={{ display: "flex" }}>{children}</div>
      <div className="footer">footer</div>
    </>
  );
};

export default Layout;
