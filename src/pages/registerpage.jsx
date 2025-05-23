import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import i from "../assets/l.jpg";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../app/auth/authThunk";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState(() => {
    return localStorage.getItem("authForm") || "SignUp";
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [login, setLogin] = useState("SignUp");

  const switchForm = (type) => {
    setLogin(type);
    localStorage.setItem("authForm", type);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (login === "SignUp") {
      const res = await dispatch(
        registerUser({ name, email, password })
      ).unwrap();

      if (res.success) {
        navigate("/otpverify");
      }
    } else {
      const res = await dispatch(loginUser({ email, password })).unwrap();

      if (res.success) {
        navigate("/");
      }
    }
  };

  return (
    <>
      <main className="w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
        <section className=" w-full h-full flex md:flex-row flex-col  md:justify-between  items-center gap-0">
          {/*           <div className="w-full mt-2 h-80 md:h-full overflow-hidden flex items-center justify-center ">
            <img src={i} alt="not fond" className="object-cover md:w-full" />
          </div> */}
          <div className="w-full  flex justify-center items  border-green-400 ">
            <div className="  w-[30rem]  ">
              <div className="w-full  bg-[#eaeaea]  h-20 -z-0 relative top-4 rounded-t-3xl flex  px-3 justify-between items-center">
                <button
                  className={`px-10   py-3 text-blue-800 rounded-l-xl  font-semibold capitalize ${
                    login == "SignUp" && "text-2xl"
                  }`}
                  onClick={() => switchForm("SignUp")}
                >
                  signup
                </button>
                <button
                  className="px-10 py-3 text-lg rounded-r-xl text-blue-800  font-semibold capitalize "
                  onClick={() => switchForm("Login")}
                >
                  login
                </button>
              </div>
              <form
                onSubmit={submitHandler}
                className=" pt-5 pb-5  px-5 bg-[#F7F7F7] w-full rounded-3xl relative z-10 shadow-gray-400"
              >
                {login == "SignUp" && (
                  <div className=" mt-5 space-x-3 w-full bg-white px-5 py-3 flex items-center justify-center rounded-lg border border-gray-200 ">
                    <i>
                      <FiUser />
                    </i>
                    <input
                      type="text"
                      placeholder="enter your name"
                      className="outline-none w-full"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      aria-label="name"
                    />
                  </div>
                )}{" "}
                <div className=" mt-5 space-x-3 w-full bg-white px-5 py-3 flex items-center justify-center rounded-lg border border-gray-200 ">
                  <i>
                    <MdOutlineMailOutline />
                  </i>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="outline-none w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-label="email"
                  />
                </div>
                <div className="bg-white mt-5 space-x-3 w-full px-5 py-3 ring-gray-400 flex items-center justify-center rounded-lg border border-gray-200 ">
                  <i>
                    <IoMdKey />
                  </i>{" "}
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="outline-none w-full"
                    value={password}
                    aria-label="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <button className="text-blue-800 ml-2 mt-2 ">
                  forget Password
                </button>
                <button
                  type="submit"
                  className="w-full py-3 mt-3 bg-blue-900 text-white rounded-lg font-semibold capitalize"
                >
                  {login == "SignUp" ? "SignUp" : "Login"}
                </button>
                <div className="flex justify-center items-center space-x-10 mt-4">
                  <button aria-label="google verification">
                    <FaInstagram size={30} />
                  </button>
                  <button aria-label="instagram verification">
                    <FaGoogle size={30} />
                  </button>
                </div>
                <div className=" w-full  flex justify-center mt-6 items-center  ">
                  {login == "SignUp" ? (
                    <button
                      className=" hover:bg-blue-70 shadow-md hover:shadow-lg transition duration-200 active:scale-95 focus:outline-none focus:ring-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setLogin("Login");
                      }}
                    >
                      login account
                    </button>
                  ) : (
                    <button
                      className=" hover:bg-blue-70 shadow-md hover:shadow-lg transition duration-200 active:scale-95 focus:outline-none focus:ring-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setLogin("SignUp");
                      }}
                    >
                      create account
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
