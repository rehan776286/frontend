import FutureDetails from "../clientComponents/futurePriceDetails";
import FloatingInput from "../clientComponents/input";

const OrderPage = () => {
  return (
    <>
      <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <section className="w-full bg-white  flex justify-center items-center ">
          <form
            action=""
            className=" w-full  mt-5 md:mt-0 space-y-6 text-sm  px-5 "
          >
            <div className="w-full flex flex-col md:flex-row gap-3">
              <FloatingInput id={"Name"} label={"Full Name"}></FloatingInput>
              <FloatingInput
                id={"mobile number"}
                label={"10 digit mobile number"}
              ></FloatingInput>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3">
              <FloatingInput id={"pincode"} label={"Pincode"}></FloatingInput>

              <FloatingInput id={"locality"} label={"Locality"}></FloatingInput>
            </div>
            <div className="border border-slate-300 w-full px-2  rounded-md  focus-within:border-blue-600 transition">
              <label
                htmlFor=""
                className="text-xs text-slate-500 font-semibold "
              >
                address aria
              </label>
              <textarea className="w-full focus:outline-none"></textarea>
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-3">
              <FloatingInput
                id={"city"}
                label={"City/Distic/Town"}
              ></FloatingInput>

              <FloatingInput id={"state"} label={"State"}></FloatingInput>
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-3">
              <FloatingInput
                id={"landmark"}
                label={"Landmark (optional)"}
              ></FloatingInput>
              <FloatingInput
                id={"alternative number"}
                label={"Alternative (mobile number)"}
              ></FloatingInput>
            </div>
          </form>
        </section>
        <section className="w-full h-full ">
          <FutureDetails />
        </section>
      </main>
    </>
  );
};

export default OrderPage;
