import { StarIcon } from "lucide-react";
import api from "../api";
import { useEffect, useState } from "react";

const OrderList = () => {
  const [orderlist, setOrderlist] = useState([]);
  console.log(orderlist);
  const Orderlist = async () => {
    try {
      const res = await api("/api/orderlist");

      const list = await res.data.orderlist;
      setOrderlist(list);
    } catch (error) {}
  };
  useEffect(() => {
    Orderlist();
  }, []);
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <section className="w-full">
        {orderlist.map((item) => {
          return (
            <div
              key={item._id}
              className="flex  items-center  w-full  border border-slate-100 px-5 mt-3 shadow-sm"
            >
              <div className=" w-full flex justify-center items-center gap-1 ">
                <div className="w-full max-w-32 object-center  object object-contain flex p-2 justify-center items-cover overflow-hidden ">
                  <img
                    src={item.productImages}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex justify-center items-center lg:gap-20 ">
                  <div className="w-full">
                    <h2 className="text-sm font-medium text-teal-600 capitalize ">
                      delivery date
                    </h2>
                    <p className="line-clamp-2 text-sm font-semibold text-slate-400">
                      {item.productTitle}
                    </p>
                    <span className="text-sm text-slate-600 font-semibold mt-2">
                      Qty: {item.singleOrder.quantity}
                    </span>
                  </div>
                  <div className="w-full flex  flex-col md:flex-row justify-center items-center gap-4 lg:gap-28">
                    <span className="text-sm font font-semibold text-slate-500 ">
                      ₹ {Math.floor(item.singleOrder.totalPrice)}
                    </span>
                    <span className="text-sm text-white bg-orange-400 rounded-2xl w-full max-w-40 px-4 capitalize text-center font-semibold py-1">
                      {item.singleOrder.DeliveryStatus}
                    </span>
                  </div>

                  {/* <div className="flex justify-center items-center">
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default OrderList;
