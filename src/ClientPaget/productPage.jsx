import { useEffect, useState } from "react";
import pro from "../assets/pro.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import trustIcon from "../assets/returnIcon.png";
import deliveryIcon from "../assets/deleveryIcon.png";
import codIcon from "../assets/codIcon.png";
import returnIcon from "../assets/returnIcon.png";
import secureIcon from "../assets/secure.png";
import api from "../api.js";


const ProductPage = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  useEffect(() => {
    const itemFetch = async () => {
      const res = await api.get(`/api/item/${id}`, {
        withCredentials: true,
      });
      const item = res.data.item;
      setItem(item);
      console.log(item);
    };
    itemFetch();
  }, [id]);

  return (
    <main className=" w-full min-h-screen bg-gray-100    overflow-hidden">
      {item ? (
        <section className="w-full   px-2   mx-auto grid grid-cols-1 md:grid-cols-2 bg-white">
          <div className="  flex  justify-center  mx-auto items-center p-1 ">
            <div className="flex h-[25rem] md:h-[40rem]  w-full  justify-center items-center  ">
              <img
                src={item.productImages}
                alt=""
                className=" w-full h-full  object-contain  rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:mt-10 px-2">
            <div className="space-y-6">
              <strong>{item.productBrandName}</strong>

              <h2 className="line-clamp-3">{item.productTitle}</h2>

              <div className="flex justify-start items-center gap-2 text-amber-500">
                <i>
                  <GoStarFill size={24} />
                </i>
                <i>
                  <GoStarFill size={24} />
                </i>
                <i>
                  <GoStarFill size={24} />
                </i>
                <i>
                  <GoStarFill size={24} />
                </i>
                <i>
                  <GoStarFill size={24} />
                </i>

                <span>{item.numberOfReviews}</span>
              </div>
              <div className="w-full flex justify-start items-center gap-3">
                <h2 className="text-teal-700 text-2xl  font-semibold">
                  $ {item.productPrice}
                </h2>
                <span className="text-2xl line-through text-gray-400">
                  2000
                </span>{" "}
                <span className="text-teal-600 text-2xl font-semibold">
                  70% off
                </span>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-10" />

            <div className="flex justify-center  items-start gap-6 mt-6 ">
              <div className="flex flex-col items-center text-center w-40">
                <img
                  src={returnIcon}
                  alt="Return Policy"
                  className="w-12 h-12"
                />
                <h3 className="mt-2">10 days return available</h3>
              </div>
              <div className="flex flex-col items-center text-center w-40">
                <img
                  src={deliveryIcon}
                  alt="Free Replacement"
                  className="w-12 h-12"
                />
                <h3 className="mt-2">Free replacement within 7 days</h3>
              </div>
              <div className="flex flex-col items-center text-center w-40">
                <img
                  src={secureIcon}
                  alt="Secure Packaging"
                  className="w-12 h-12"
                />
                <h3 className="mt-2">Secure packaging</h3>
              </div>
              <div className="flex flex-col items-center text-center w-40">
                <img
                  src={codIcon}
                  alt="Cash on Delivery"
                  className="w-12 h-12"
                />
                <h3 className="mt-2">Cash on Delivery available</h3>
              </div>
            </div>

            <button className="w-full text-center py-3  mt-5 rounded-2xl rounded-2  bg-teal-600 text-xl font-semibold text-white">
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/order")}
              className="w-full text-center py-3 rounded-2xl mt-5 bg-teal-600 text-xl font-semibold text-white"
            >
              Buy Now
            </button>
            <div className="space-y-3 mt-5">
              <h3 className=" text-2xl capitalize font-semibold">
                product Description
              </h3>
              <div>
                <p className="line-clamp-12">{item.productDescription}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>rehan kahn</h1>
      )}
    </main>
    // <main className="w-full min-h-screen bg-gray-100 py-10 px-4">
    //   {/* Product Detail Section */}
    //   <section className="max-w-8xl mx-auto bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
    //     {/* Left: Product Image */}
    //     <div className="flex justify-center items-center">
    //       <img
    //         src={pro}
    //         alt="product"
    //         className="w-full max-w-md object-contain rounded-lg"
    //       />
    //     </div>

    //     {/* Right: Product Details */}
    //     <div className="space-y-6">
    //       <div className="space-y-2">
    //         <span className="text-sm text-gray-500">
    //           Brand: <strong>ExampleBrand</strong>
    //         </span>
    //         <h1 className="text-2xl font-bold text-gray-800">Product Name</h1>
    //         <div className="text-yellow-500 text-sm">
    //           ⭐⭐⭐⭐☆ (120 ratings)
    //         </div>
    //         <h2 className="text-xl text-green-600 font-semibold">
    //           ₹2,223{" "}
    //           <span className="line-through text-gray-400 ml-2">₹2,999</span>
    //           <span className="ml-2 text-red-500 text-sm">25% off</span>
    //         </h2>
    //       </div>

    //       <div className="space-y-2">
    //         <h3 className="font-semibold text-lg text-gray-700">
    //           Return Policy
    //         </h3>
    //         <ul className="list-disc pl-5 text-sm text-gray-600">
    //           <li>10 days return available</li>
    //           <li>Free replacement within 7 days</li>
    //           <li>Secure packaging</li>
    //           <li>Cash on Delivery available</li>
    //         </ul>
    //       </div>

    //       <div className="text-sm text-gray-700 leading-relaxed">
    //         <h3 className="font-semibold mb-1">Product Description</h3>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    //           facere atque dignissimos consequuntur distinctio. Deleniti iste
    //           necessitatibus officiis quas placeat libero quod vel reiciendis
    //           doloremque totam, amet maxime magni adipisci!
    //         </p>
    //       </div>

    //       <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
    //         Add to Cart
    //       </button>
    //     </div>
    //   </section>

    //   {/* Similar Products Section */}
    //   <section className="max-w-6xl mx-auto mt-10">
    //     <h2 className="text-xl font-bold mb-4">Similar Products</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    //       {similarProducts.map((product) => (
    //         <div
    //           key={product.id}
    //           className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
    //         >
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full h-40 object-contain rounded-md"
    //           />
    //           <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
    //           <p className="text-green-600 font-bold">{product.price}</p>
    //           <button className="mt-2 text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
    //             View
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </main>
  );
};

export default ProductPage;

// import pro from "../assets/pro.jpg";

// const ProductPage = () => {
//   return (
//     <main className="w-full min-h-screen bg-gray-100 py-10 px-4">
//       <section className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Left: Product Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={pro}
//             alt="product"
//             className="w-full max-w-md object-contain rounded-lg"
//           />
//         </div>

//         {/* Right: Product Details */}
//         <div className="space-y-6">
//           <div className="space-y-2">
//             <span className="text-sm text-gray-500">
//               Brand: <strong>ExampleBrand</strong>
//             </span>
//             <h1 className="text-2xl font-bold text-gray-800">Product Name</h1>
//             <div className="text-yellow-500 text-sm">
//               ⭐⭐⭐⭐☆ (120 ratings)
//             </div>
//             <h2 className="text-xl text-green-600 font-semibold">
//               ₹2,223{" "}
//               <span className="line-through text-gray-400 ml-2">₹2,999</span>
//               <span className="ml-2 text-red-500 text-sm">25% off</span>
//             </h2>
//           </div>

//           <div className="space-y-2">
//             <h3 className="font-semibold text-lg text-gray-700">
//               Return Policy
//             </h3>
//             <ul className="list-disc pl-5 text-sm text-gray-600">
//               <li>10 days return available</li>
//               <li>Free replacement within 7 days</li>
//               <li>Secure packaging</li>
//               <li>Cash on Delivery available</li>
//             </ul>
//           </div>

//           <div className="text-sm text-gray-700 leading-relaxed">
//             <h3 className="font-semibold mb-1">Product Description</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//               facere atque dignissimos consequuntur distinctio. Deleniti iste
//               necessitatibus officiis quas placeat libero quod vel reiciendis
//               doloremque totam, amet maxime magni adipisci!
//             </p>
//           </div>

//           <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
//             Add to Cart
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ProductPage;

// import pro from "../assets/pro.jpg";
// const ProductPage = () => {
//   return (
//     <>
//       <main className="w-full min-h-screen bg-red-100">
//         <section className="w-full flex justify-center items-start  ">
//           <div className="flex justify-center  items-start ">
//             <div className="w-2xl">
//               <img src={pro} alt="image" />
//             </div>
//             <div className="max-w-4xl flex-col   bg-amber-200">
//               <div className="">
//                 <span>brand</span>
//                 <h2>product name</h2>
//                 <h3>rating</h3>
//                 <h2>
//                   price <span>2223</span> <span> off</span>
//                 </h2>
//               </div>
//               <div>
//                 <span>retun prolicy</span>
//                 <span>retun prolicy</span>
//                 <span>retun prolicy</span>
//                 <span>retun prolicy</span>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//                   facere atque dignissimos consequuntur distinctio. Deleniti
//                   iste necessitatibus officiis quas placeat libero quod vel
//                   reiciendis doloremque totam, amet maxime magni adipisci!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };
// export default ProductPage;
