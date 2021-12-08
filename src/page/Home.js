import React from "react";
import OpenPage from "../Component/OpenPage";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <OpenPage hero="defaultHero">
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </OpenPage>
  );
};

export default Home;
