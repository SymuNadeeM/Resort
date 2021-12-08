import React from "react";
import OpenPage from "../Component/OpenPage";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <OpenPage>
      <Banner title="404" subtitle="Page not Found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </OpenPage>
  );
};

export default Error;
