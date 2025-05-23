import AddressList from "../clientComponents/addressList";
import AddAddress from "../clientComponents/AddAddress";
import FutureDetails from "../clientComponents/futurePriceDetails";
import { useParams } from "react-router-dom";
import PaymentCom from "../clientComponents/payment";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../app/orderSlice";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { paymentMethod, quantity, shippingAddress, OrderDone } = useSelector(
    (state) => state.order
  );
  const navigate = useNavigate();

  console.log(OrderDone);

  const { id } = useParams();

  const dispatch = useDispatch();

  const createOrder = async () => {
    const res = await dispatch(
      placeOrder({ id, paymentMethod, quantity, shippingAddress })
    ).unwrap();
    navigate(`/success/${id}`);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <div className="py-4 px-10 bg-teal-400 text-xl text-white font-semibold">
        <h2>ShopCart</h2>
      </div>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 mx-0">
        <div>
          <AddressList />
          <PaymentCom />
        </div>
        <div>
          <FutureDetails id={id} />
        </div>

        <button
          className="px-8 py-4 mt-2 text-lg  rounded-sm bg-teal-500 font-semibold text-white cursor-pointer hover:scale-95 active:scale-110 transition duration-100 "
          onClick={createOrder}
        >
          Place Order
        </button>
      </section>
    </main>
  );
};

export default OrderPage;
