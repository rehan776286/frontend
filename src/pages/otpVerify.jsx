import { useRef } from "react";
import ottpic from "../assets/otppic.jpg";
import { otpVerify } from "../app/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const useref = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const focusHandler = (e, index) => {
    if (Number(e.target.value) && index < 5) {
      useref.current[index + 1].focus();
    }
  };
  const onDwon = (e, index) => {
    if (e.key == "Backspace" && index > 0) {
      console.log(e.key);
      e.target.value = "";
      useref.current[index - 1].focus();
    }
  };

  useSelector((state) => {
    console.log(state.otp);
  });

  const otpSubmitHandler = async (e) => {
    e.preventDefault();

    const otp = useref.current.map((e) => e.value).join("");

    console.log(otp);
    const res = await dispatch(otpVerify(otp)).unwrap();
    console.log(res);
    if (res.success) {
      navigate("/");
    }
  };
  return (
    <>
      <main className="w-full min-h-screen  overflow-hidden  bg-white flex justify-center items-center">
        <section className="flex justify-center items-center  w-full h-screen ">
          <div className=" w-[50rem] h-full ">
            <div
              className="  flex justify-center items-center
           w-full h-[40%] md:mt-2 "
            >
              <img
                src={ottpic}
                alt=""
                className=" rounded-b-[12rem] md:w-[60%] "
              />
            </div>
            <form
              onSubmit={otpSubmitHandler}
              className="w-full  h-[60%] rounded-t-[4rem] shadow-slate-900 bg-blue-700 flex justify-center flex-col items-center"
              onPaste={(e) => {
                const pasteddata = e.clipboardData.getData("text").split("");
                pasteddata.forEach((chartt, index) => {
                  if (useref.current[index]) {
                    useref.current[index].value = chartt;
                  }
                });
              }}
            >
              <div className="w-full px-3 text-center mt-5 text-white capitalize space-y-2">
                <h1 className="text-2xl font-semibold ">OTP verification</h1>
                <p className="text-xl font-semibold">
                  Enter Your Otp Send to{" "}
                  <span className="text-gray-950">9153537601</span>
                </p>
              </div>
              <div className="w-full mt-8 flex justify-center items-center space-x-1">
                {Array(6)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <input
                        className=" w-12 h-12 text-4xl text-black text-center bg-gray-100 rounded-xl"
                        type="tel"
                        maxLength={1}
                        key={index}
                        ref={(e) => (useref.current[index] = e)}
                        onChange={(e) => focusHandler(e, index)}
                        onKeyDown={(e) => onDwon(e, index)}
                      />
                    );
                  })}
              </div>

              <button
                type="submit"
                className="mt-4 w-80 py-2 text-4xl capitalize text-blue-800 font-semibold bg-white rounded-2xl px-7"
              >
                submit
              </button>
              <p className="text-xl mt-4 text-slate-800 capitalize">
                dont recieve OTP
                <button className="text-2xl text-white capitalize ml-2">
                  resend
                </button>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default OtpVerify;
