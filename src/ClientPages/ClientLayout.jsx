import { Outlet } from "react-router-dom";
import HeaderCom from "../components/Navber";

const ClientLayout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default ClientLayout;
