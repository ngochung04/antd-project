import React, { useEffect } from "react";

interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Ticket = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("ticket");
  }, []);
  
  return <div>Ticket</div>;
};

export default Ticket;
