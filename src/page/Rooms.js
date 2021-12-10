import React from "react";
import OpenPage from "../Component/OpenPage";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <OpenPage hero="roomsHero">
      <Banner title="ours rooms">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </OpenPage>
  );
};

export default Rooms;
