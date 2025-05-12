import ProductCard from "../clientComponents/product.jsx";
import HeaderCom from "../components/Navber.jsx";
import WatchSections from "./watchsSecion.jsx";

const ClientHome = () => {
  return (
    <div className="bg-gray-100">
      <HeaderCom />
      <WatchSections />
    </div>
  );
};

export default ClientHome;
