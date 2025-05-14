import pro from "../assets/pro.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductCard = ({ products=[] }) => {
  return (
    <main className="max-w-screen mx-auto grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center items-center   gap-2 px-1  py-11 ">
      {products.map((product, index) => {
        return (
          <Link to={`/product/${product._id}`} key={product._id}>
            <article className=" min-w-12 p-2 bg-white border border-slate-200 shadow-xl  rounded-xl">
              <header className="w-full h-48 flex  justify-center items-center ">
                <img
                  src={product.productImages}
                  alt=""
                  className=" w-full h-full object-contain "
                />
              </header>
              <main className="w-full">
                <h2 className="text-sm font-bold text-slate-500 ">
                  {product.productBrandName}
                </h2>
                <p className="text-xs font-semibold w-full  max-h-10 text-slate-700  line-clamp-2  overflow-hidden">
                  {product.productTitle}
                </p>
              </main>

              <footer className="w-full text-sm">
                <div className="">
                  <div className="flex justify-start items-center gap-2 ">
                    <span className="text-lg font-semibold text-teal-600">
                      {" "}
                      {product.productPrice}
                    </span>
                    <span className="text-slate-500 line-through "> ₹2000</span>
                    <span className="text-teal-700  font-bold"> %77 off</span>
                  </div>

                  <div
                    className="flex text-yellow-500 mt-2"
                    aria-label="Rated 4 out of 5 stars"
                  >
                    <i>
                      <GoStarFill />
                    </i>
                    <i>
                      <GoStarFill />
                    </i>
                    <i>
                      <GoStarFill />
                    </i>
                    <i>
                      <GoStarFill />
                    </i>
                    <i>
                      <GoStarFill />
                    </i>
                  </div>
                </div>
                <div className="flex justify-end text-teal-700">
                  <button>{<FaCartShopping size={27} />}</button>
                </div>
              </footer>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default ProductCard;
