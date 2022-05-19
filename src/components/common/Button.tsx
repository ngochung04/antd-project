import { Button as AButton, ButtonProps } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "default" | "primary";
}

const Button = ({
  children,
  type = "default",
  ...rest
}: Props & ButtonProps) => {
  return (
    <AButton
      type={type}
      style={
        type === "default"
          ? {
              background: "#FF993C",
              border: "1px solid #FF993C",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "0 62px",
              margin: "0 12px",
              height: "48px",
            }
          : {
              background: "white",
              border: "1px solid #FF993C",
              color: "#FF993C",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "0 62px",
              margin: "0 12px",
              height: "48px",
            }
      }
      {...rest}
    >
      Button
    </AButton>
  );
};

export default Button;
