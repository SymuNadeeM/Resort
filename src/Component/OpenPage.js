import React from "react";

const OpenPage = ({ Children, hero }) => {
  return <header className={hero}>{Children}</header>;
};

export default OpenPage;
