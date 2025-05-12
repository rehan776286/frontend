import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sideBar";
import OrderCart from "./orderDashboard";
import Dashboard from "./dashboad";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AwesomeLoader from "../components/loader";

const Home = () => {
  return (
    <>
      <main className="bg-[#f2f2f2] flex">
        <Sidebar></Sidebar>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
