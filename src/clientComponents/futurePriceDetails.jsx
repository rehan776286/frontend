import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
const FutureDetails = () => {
  const [details, setDetails] = useState(null);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  console.log(id);
  console.log(details);

  useEffect(() => {
    const itemFetch = async () => {
      const res = await api.get(`/api/productdetail/${id}`);
      console.log(res);
      const item = res.data.Productdetails;
      const product = res.data.product;

      setDetails(item);
      setDetails(product);
    };
    itemFetch();
  }, [id]);

  return (
    <main className="w-full mx-auto p-4">
      <section className="flex flex-col md:flex-row gap-6">
        {/* Product Display */}
        <div className="flex-1 border border-slate-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Product</h2>
          <p className="text-sm text-slate-500">Product image or info here</p>
        </div>

        {/* Price Summary */}
        <div className="w-full md:w-1/2 border border-slate-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">
            Price Details
          </h2>

          <div className="flex justify-between text-sm py-1">
            <span>Price (1 item)</span>
            <span>₹99977</span>
          </div>

          <div className="flex justify-between text-sm py-1">
            <span>Discount</span>
            <span className="text-green-600">− ₹800</span>
          </div>

          <div className="flex justify-between text-sm py-1">
            <span>Delivery Charges</span>
            <span>
              <span className="line-through text-slate-400">₹40</span>{" "}
              <span className="text-green-600">Free</span>
            </span>
          </div>

          <div className="border-t mt-3 pt-3 flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>₹99177</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FutureDetails;
