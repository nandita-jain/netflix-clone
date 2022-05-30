import React from "react";
import "./Home.scss";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";

function home() {
  return (
    <div className="home">
      <Navbar />

      <Featured />
    </div>
  );
}

export default home;
