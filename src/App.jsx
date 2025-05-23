import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth } from "./app/auth/authThunk";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
