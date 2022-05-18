import React from "react";

interface Props {
  children?: React.ReactNode;
}

const SideBar = ({ children }: Props) => {
  return (
    <div className="side-bar">
      <div style={{ height: "2rem", background: "violet", width: "100%" }}>
        logo
      </div>
      <div className="side-bar-content"> side bar content</div>
    </div>
  );
};

export default SideBar;
