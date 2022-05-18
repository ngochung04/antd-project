import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <div className="main">
      <div className="header">header</div>
      <div className="main-content">main content</div>
    </div>
  );
};

export default Content;
