import { useEffect, useState, useMemo } from "react";
import api from "../api.js";
import AddAddress from "./AddAddress.jsx";
import { setShippingAddress } from "../app/orderSlice.js";
import { useSelector, useDispatch } from "react-redux";

const AddressList = () => {
  const [selectAddress, setAddress] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const dispatch = useDispatch();

  const fetchAddress = async () => {
    try {
      const res = await api.get("/api/auth/address-list");
      const address = res.data.Address;
      setAddress(address);
      if (address.length > 0 && !selectedAddressId) {
        setSelectedAddressId(address[0]._id);
      }
    } catch (error) {}
  };
  const deleteAddress = async (addressId) => {
    try {
      const res = await api.post("/api/auth/address-delete", {
        addressId: addressId,
      });
      if (res.data.success) {
        fetchAddress();
      }
    } catch (error) {}
  };
  const handleRadioChange = (e) => {
    setSelectedAddressId(e.target.value);

    setShowAll(false);
  };
  const handleChangeClick = () => {
    setShowAll(true);
  };
  const selectedAddress = useMemo(() => {
    return selectAddress.find((a) => a._id === selectedAddressId);
  }, [selectAddress, selectedAddressId]);
  useEffect(() => {
    if (selectedAddress) {
      dispatch(setShippingAddress(selectedAddress)); // ✅ Safe now
    }
  }, [selectedAddress, dispatch]);
  useEffect(() => {
    fetchAddress();
  }, []);
  return (
    <main className="w-full bg-white  mt-5  overflow-hidden">
      <section className="w-full   ">
        <div className="w-full px-4 py-3 bg-teal-400 text-white">
          <h2 className="text-xl font-semibold ">Delivery Address</h2>
        </div>
        {showAll && (
          <div className="flex justify-end items-center ">
            <button
              className="px-6 py-2 bg-teal-500 text-sm mt-2 text-white rounded-sm font-semibold"
              onClick={() => setShowAll(false)}
            >
              Cancel
            </button>
          </div>
        )}

        {!showAll && selectedAddress && (
          <div className="w-full px-5 py-3 mt-3 border border-slate-100 bg-white rounded-sm">
            <div className="text-sm font-semibold  text-teal-700 flex  items-center gap-4">
              <input type="radio" defaultChecked className="" />
              {selectedAddress.fullName} — {selectedAddress.mobileNumber}
            </div>
            <div className="text-sm text-gray-700">
              {selectedAddress.addressStreet}, {selectedAddress.locality},{" "}
              {selectedAddress.city}, {selectedAddress.state} -{" "}
              {selectedAddress.pincode}
            </div>
            <button
              className="px-4 py-1 bg-teal-500 text-sm mt-2 text-white rounded-sm font-semibold"
              onClick={handleChangeClick}
            >
              Change
            </button>
          </div>
        )}
        {showAll &&
          selectAddress.map((addr) => {
            return (
              <div
                key={addr._id}
                className="w-full px-3 py-3 mt-3 border border-slate-100"
              >
                <div className=" space-x-3">
                  <input
                    type="radio"
                    name="selectedAddress"
                    value={addr._id}
                    checked={selectedAddressId == addr._id}
                    onChange={handleRadioChange}
                  />
                  <span className="text-sm font-semibold text-teal-700 ">
                    {addr.fullName}
                  </span>
                  <span className="text-sm font-semibold">
                    {addr.mobileNumber}
                  </span>
                </div>
                <div className="space-x-2 ">
                  <span>{addr.addressStreet}</span>
                  <span>{addr.locality}</span>
                  <span>{addr.city}</span>
                  <span>{addr.state}</span>
                  <span>{addr.pincode}</span>
                </div>
                <div className=" px-5">
                  <button
                    className="px-4 py-1 bg-teal-500 text-sm mt-2 text-white rounded-sm font-semibold"
                    onClick={() => deleteAddress(addr._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        <div>
          <button
            onClick={() => setAddNew((prev) => !prev)}
            className="w-full text-lg font-semibold text-teal-600 py-3 px-16"
          >
            {addNew ? "Cancel" : "+ Add New Address"}
          </button>
        </div>
        {addNew && (
          <AddAddress setAdd={setAddNew} fetchAddress={fetchAddress} />
        )}
      </section>
    </main>
  );
};

export default AddressList;
