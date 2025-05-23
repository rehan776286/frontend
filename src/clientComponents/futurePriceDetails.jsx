import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuantity } from "../app/orderSlice";
import api from "../api";
import { use } from "react";
const FutureDetails = ({ id }) => {
  const [details, setDetails] = useState(null);
  const [product, setProduct] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState("");
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  console.log(`this id ${id}`);
  console.log(details);
  const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const options = { weekday: "long", day: "numeric", month: "short" };
  const formatted = date.toLocaleDateString("en-US", options); // e.g. Monday 26 May

  const qtyHandlerInc = () => {
    setQty((prev) => prev + 1);
  };
  const qtyHandlerDec = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  useEffect(() => {
    const itemFetch = async () => {
      const res = await api.post(`/api/productdetail/${id}`, { quantity: qty });
      console.log(res);
      const item = res.data.Productdetails;
      const product = res.data.product;

      setDetails(item);
      setProduct(product);
      setDeliveryDate(formatted.replace(/,/g, ""));
    };
    if (id) itemFetch();
    dispatch(setQuantity(qty));
  }, [id, qty]);
  if (!product) return <div>Loading...</div>;
  return (
    <main className="w-full  p-4">
      <section className="flex flex-col  gap-6">
        <div className=" flex flex-col justify-center items-center  border border-slate-200 rounded-lg p-4 shadow-sm space-y-7">
          {/* Product Display */}
          <div className="">
            <div className="flex justify-center items-center gap-6 ">
              <div className="w-60">
                <img
                  src={product.productImage}
                  className="w-full"
                  alt="dajhk"
                />
              </div>
              <div>
                <p className="text-sm line-clamp-2  text-slate-500">
                  {product.productName}
                </p>
                <span className="text-lg font-semibold text-teal-600 ">
                  ₹ {details.basePrice}
                </span>
                <span className="ml-5">70% OFF</span>
              </div>
            </div>
            <div className="flex justify-start px-5 items-center gap-2 text-sm font-semibold text-slate-500 mt-10">
              <input type="radio" defaultChecked />
              <h2>Delivery date</h2>
              <span>{deliveryDate}</span>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-40 border-2 px-5  border-teal-500 bg-white flex justify-between items-center rounded-4xl">
              <button
                onClick={qtyHandlerInc}
                className="text-teal-500 font-semibold text-gl"
              >
                +
              </button>
              <span className=" text-lg font-semibold text-teal-500">
                {qty}
              </span>
              <button
                onClick={qtyHandlerDec}
                className="text-teal-500 font-semibold text-lg"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="w-full md:w-1/2 border border-slate-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">
            Price Details
          </h2>

          <div className="flex justify-between text-sm py-1">
            <span>Price (1 item)</span>
            <span>₹{details.basePrice}</span>
          </div>

          <div className="flex justify-between text-sm py-1">
            <span>Discount</span>
            <span className="text-green-600">− {details.discounted}</span>
          </div>

          <div className="flex justify-between text-sm py-1">
            <span>Delivery Charges</span>
            <span>
              <span className=" text-slate-400">
                - ₹{details.deliveryCharge}
              </span>{" "}
              <span className="text-green-600">
                {details.deliveryCharge == 0 && "Free"}
              </span>
            </span>
          </div>

          <div className="border-t mt-3 pt-3 flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>₹{details.totalAmount}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FutureDetails;
