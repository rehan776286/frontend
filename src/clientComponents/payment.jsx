import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPayment } from "../app/orderSlice";
import { useEffect } from "react";
const PaymentCom = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const dispatch = useDispatch();

  const handelPaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };
  useEffect(() => {
    dispatch(setPayment(selectedPayment));
  });
  return (
    <main className="w-full  ">
      <div className="w-full py-3 bg-teal-500 text-lg font-semibold text-white px-5">
        <h2>PAYMENT OPTIONS</h2>
      </div>
      <section className="w-full   mt-2 px-2 border border-slate-100 rounded-sm py-3">
        <label
          htmlFor=""
          className="text-sm flex   items-center gap-4 font-semibold"
        >
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selectedPayment === "upi"}
            onChange={handelPaymentChange}
          />
          <span>UPI</span>
        </label>
        {selectedPayment == "upi" && (
          <div className="w-full flex  justify-center items-center">
            <div className="w-full md:pl-17 pl-10">
              <div className="space-y-5">
                <h2>Choose option</h2>
                <input type="radio" defaultChecked />
                <span className="ml-4">Your UPI ID</span>
              </div>
              <div className="w-full md:flex items-center justify-center  gap-4 ">
                <label className="w-64 relative block ">
                  <input
                    type="text"
                    className="w-full px-4 pr-20 py-3 border-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    placeholder="Enter UPI"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2  text-teal-500  px-3 py-1 rounded text-sm"
                  >
                    Verify
                  </button>
                </label>

                <button className=" px-12 mt-2 md:mt-0 flex justify-center items-center py-3 bg-teal-500 text-white font-bold text-lg">
                  Pay $8977
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="w-full px-3 py-3 mt-2 border border-slate-100">
        <div className="space-y-4  ">
          <div className="space-x-4 text-sm  font-semibold">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedPayment === "card"}
              onChange={handelPaymentChange}
            />
            <span className="">Cradit/Debit/ATM Card</span>
          </div>
          {selectedPayment === "card" && (
            <div className="space-y-4 pl-6 max-w-2xl">
              <input
                type="text"
                placeholder=" Enter Your ATM Number"
                className="w-full md:w-80 py-3 px-3 border  border-slate-200  focus:outline-none placeholder:text-sm placeholder:font-semibold focus:ring-1 focus:ring-blue-300"
              />
              <div className="flex gap-2">
                <div className="flex gap-3 w-40  py-3 px-3 border border-slate-200  focus:outline-none focus:ring-1 focus:ring-blue-300 hover:border-blue-400 ">
                  <select name="" id="" className="px-2 text-sm">
                    <option value="">MM</option>
                    {[...Array(12)].map((_, i) => {
                      const month = (i + 1).toString().padStart(2, "0");
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                  <select name="" id="" className="px-2 text-sm">
                    <option value="">YY</option>
                    {[...Array(10)].map((_, i) => {
                      const yearFull = new Date().getFullYear() + i;
                      const years = yearFull.toString().slice(2);
                      return (
                        <option value={years} key={yearFull}>
                          {years}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* <input
                  type="date"
                  className="w-60  py-3 px-3 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-300"
                /> */}
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-24  py-3 px-3 border border-slate-200 focus:outline-none placeholder:text-sm placeholder:font-semibold focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <button className="px-12 mt-2 md:mt-0 flex justify-center items-center py-3 bg-teal-500 text-white font-bold text-lg">
                pay 88798
              </button>
            </div>
          )}
        </div>
      </section>
      <div className="border border-slate-100 w-full">
        <div className="w-full text-sm font-semibold  flex gap-5 px-3 py-6 ">
          <input
            type="radio"
            value="cod"
            checked={selectedPayment == "cod"}
            onChange={handelPaymentChange}
          />
          <span className="text-slate-900">Cash On Delivery</span>
        </div>
      </div>
    </main>
  );
};

export default PaymentCom;
