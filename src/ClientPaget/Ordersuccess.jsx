import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const flowers = [
  "🌸",
  "🌼",
  "🌺",
  "🌻",
  "🌷",
  "🌼",
  "🌺",
  "🌻",
  "🌷",
  "🌸",
  "🌼",
  "🌺",
  "🌻",
  "🌷",
  "🌼",
  "🌺",
  "🌻",
  "🌷",
];

export default function OrderSuccess() {
  const [item, setItems] = useState({});
  const navigate = useNavigate();
  console.log(item);

  // console.log(item[0].prodcutInfo.productImages);
  const OrderDetails = async () => {
    try {
      const res = await api.get(`/api/orderdetails`);

      const orderItem = res.data.orders;
      setItems(orderItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    OrderDetails();
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      navigate("/", { replace: true });
    };

    // Attach the listener
    window.addEventListener("popstate", handlePopState);

    // Detach the listener properly
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
  if (!item) return <div>Loading...</div>;
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-rose-100 overflow-hidden p-4">
      {/* Floating flower emojis */}
      {flowers.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl pointer-events-none"
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            y: [-10, -60, -10],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Success Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-xl w-full text-center border border-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-4"
        >
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
        </motion.div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 text-lg">
          Thank you for your purchase{" "}
          <span className="text-lg font-bold">{item[0]?.userInfo.name} </span>!
          We're preparing your flowers... we mean order! 🌸
        </p>

        <div className="mt-6 text-sm bg-white/60 rounded-xl p-4 text-left text-gray-700 shadow-inner">
          <p>
            <span className="font-semibold">Order ID:</span> #{item[0]?._id}
          </p>
          <p>
            <span className="font-semibold">Delivery:</span>{" "}
            {item[0]?.singleOrder.DeliveryStatus}
          </p>
          <p>
            <span className="font-semibold">Payment:</span> Prepaid
          </p>
        </div>

        {/* Product preview (optional) */}
        <div className="mt-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-2">
            Items in your order:
          </h3>
          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow">
            <img
              src={item[0]?.productInfo.productImages}
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-medium text-gray-700 line-clamp-2">
                {item[0]?.productInfo.productTitle}
              </p>
              <p className="text-sm text-gray-500">
                Qty: {item[0]?.singleOrder.quantity} |{" "}
                {item[0]?.productInfo.productBrandName}
              </p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/", { replace: true })}
          className="mt-8 bg-teal-500 hover:bg-teal-700 transition text-white text-lg px-8 py-3 rounded-xl shadow-lg"
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </div>
  );
}
