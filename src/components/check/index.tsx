import React, { useEffect } from "react";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Check = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("check");
  });
  return <div>Check</div>;
};

export default Check;
