import React, { useEffect } from "react";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Setting = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("setting");
  });

  return <div>Setting</div>;
};

export default Setting;
