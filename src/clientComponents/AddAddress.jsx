import FloatingInput from "./input";
import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api";

const AddAddress = ({ setAdd, fetchAddress }) => {
  const { id } = useParams();
  const [address, setAddress] = useState({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    locality: "",
    addressStreet: "",
    city: "",
    state: "",
    landmark: "",
    alternativeNumber: "",
  });
  console.log(address);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handelAddressPost = async (e) => {
    e.preventDefault();
    try {
      // Construct payload matching backend expectations
      const payload = {
        address: [
          {
            fullName: address.fullName,
            mobileNumber: address.mobileNumber,
            pincode: address.pincode,
            locality: address.locality,
            city: address.city,
            state: address.state,
            addressStreet: address.addressStreet,
            landmark: address.landmark,
            altMobile: address.alternativeNumber, // map correct field
          },
        ],
      };

      const res = await api.post("/api/auth/add-address", payload);
      console.log(res);
      if (res.data.success) {
        setAdd(false);
        fetchAddress();
      }
    } catch (error) {
      console.error("Error posting address:", error);
    }
  };
  return (
    <main className="w-full  bg-amber-200 overflow-hidden mt-7">
      <section className="w-full bg-white   flex justify-center items-center ">
        <form
          action=""
          onSubmit={handelAddressPost}
          className=" w-full  mt-2 md:mt-0 space-y-5 text-sm  px-5 "
        >
          <div className="w-full flex flex-col md:flex-row gap-3">
            <FloatingInput
              id={"fullName"}
              label={"Full Name"}
              onChange={handleChange}
            />
            <FloatingInput
              id={"mobileNumber"}
              label={"10 digit mobile number"}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3">
            <FloatingInput
              id={"pincode"}
              label={"Pincode"}
              onChange={handleChange}
            />

            <FloatingInput
              id={"locality"}
              label={"Locality"}
              onChange={handleChange}
            />
          </div>
          <div className="border border-slate-300 w-full px-2  rounded-md  focus-within:border-blue-600 transition">
            <label htmlFor="" className="text-xs text-slate-500 font-semibold ">
              address aria
            </label>
            <textarea
              id="addressStreet"
              className="w-full focus:outline-none"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className=" w-full flex flex-col md:flex-row gap-3">
            <FloatingInput
              id={"city"}
              label={"City/Distic/Town"}
              onChange={handleChange}
            />

            <FloatingInput
              id={"state"}
              label={"State"}
              onChange={handleChange}
            />
          </div>
          <div className=" w-full flex flex-col md:flex-row gap-3">
            <FloatingInput
              id={"landmark"}
              label={"Landmark (optional)"}
              onChange={handleChange}
            />
            <FloatingInput
              id={"alternativeNumber"}
              label={"Alternative (mobile number)"}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end place-items-center">
            <button
              type="submit"
              className="px-10 py-3 bg-teal-500 rounded-sm text-sm text-white  font-semibold"
            >
              Save Address
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddAddress;
