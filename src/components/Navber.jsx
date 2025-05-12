import loginIcon from "../assets/login.png";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const HeaderCom = () => {
  const navigate = useNavigate();

  const LogoutHander = async () => {
    try {
      const res = await axios.post("/api/auth/logout", {
        withCredentials: true,
      });
      const logout = res.data.success;
      if (logout) {
        navigate("/register");
      }
    } catch (error) {}
  };
  return (
    <header className="w-full  px-4 py-3 bg-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 fixed  ">
      {/* Logo */}
      <div className="text-center text-2xl text-teal-600 font-bold">
        ShopCart
      </div>

      {/* Search bar */}
      <div className="w-full  md:w-1/2 md:flex  relative hidden ">
        <input
          type="text"
          placeholder="Search for Product, brand and more"
          className="bg-gray-100 w-full py-2 px-4 rounded-l-md outline-none"
        />
        <button className="bg-teal-600 text-white px-6 rounded-r-md font-semibold">
          Search
        </button>
      </div>

      {/* Login & Cart */}
      <div className="flex  items-center gap-4">
        <button
          onClick={LogoutHander}
          className="flex items-center gap-1 text-teal-600 bg-white border border-teal-600 px-4 py-2 rounded"
        >
          <img src={loginIcon} alt="Login" className="w-5 h-5" />
          <span>logout</span>
        </button>

        <button className="bg-teal-600 text-white py-1  rounded text-xm md:text-base">
          Orders & Returns
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-teal-600 rounded">
          <img src={cart} alt="Cart" className="w-6 h-6" />
          <span className="bg-teal-600 text-white rounded-full px-2 py-0.5 text-sm">
            12
          </span>
        </button>
      </div>
      <div className="w-full  md:w-1/2 flex  relative md:hidden ">
        <input
          type="text"
          placeholder="Search for Product, brand and more"
          className="bg-gray-100 w-full py-2 px-4 rounded-l-md outline-none"
        />
        <button className="bg-teal-600 text-white px-6 rounded-r-md font-semibold">
          Search
        </button>
      </div>
    </header>

    // <header className=" max-w-screen  grid grid-cols-4 justify-between px-4">
    //   <div className="w-40 text-center p-4 text-2xl text-teal-600">
    //     <span>ShopCart</span>
    //   </div>
    //   <div className="w-xl h-12 flex relative">
    //     <input
    //       type="text"
    //       placeholder="Search for Product, brand and more"
    //       className=" bg-white w-full py-2  outline-none rounded-lg px-4"
    //     />
    //     <button className="py-1 h-12 text-lg absolute -right-16 top-1/2  transform -translate-x-1/2 -translate-y-1/2 font-semibold bg-teal-600 text-white px-9 rounded-xl">
    //       Search
    //     </button>
    //   </div>
    //   <div>
    //     <button className="bg-white text-xl px-12 py-2 rounded-sm w-40 flex justify-center items-center gap-3">
    //       <img src={loginIcon} alt="" className="w-6 h-6" />
    //       <h2 className="text-lg font-semibold  text-teal-600">Login</h2>
    //     </button>
    //     {/* <div>signup</div> */}
    //   </div>
    //   <div className="flex justify-center items-center md:gap-20">
    //     <button className="py-2 px-2 rounded-sm text-white text-lg font-semibold capitalize  bg-teal-600">
    //       order & return
    //     </button>
    //     <button className="py-2 px-12 rounded-sm text-white text-lg font-semibold flex  justify-center items-center gap-2  bg-white">
    //       <img src={cart} alt="" className="w-8 h-8" />
    //       <span className="bg-teal-600 rounded-full py-1 px-3 text-white text-lg">
    //         12{" "}
    //       </span>
    //     </button>
    //   </div>
    // </header>
  );
};
export default HeaderCom;
