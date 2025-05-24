import { FaCartShopping } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const ProductCard = ({ products = [] }) => {
  return (
    <>
      <Helmet>
        <title>Product Listing</title>
        <meta
          name="description"
          content="Explore our amazing products with great discounts."
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {products[0]?.productImages && (
          <link rel="preload" as="image" href={products[0].productImages} />
        )}

        {/* ✅ Preload first few visible product images */}
        {/* {products
          .slice(0, 2)
          .map(
            (product) =>
              product.productImages && (
                <link
                  key={product._id}
                  rel="preload"
                  as="image"
                  href={product.productImages}
                />
              )
          )} */}
      </Helmet>
      <main className="max-w-screen mx-auto grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6  justify-items-center items-center   gap-2 px-1  py-11 ">
        {products.map((product, index) => {
          return (
            <Link to={`/product/${product._id}`} key={product._id}>
              <article className=" w-full  p-2 bg-white border border-slate-200 shadow-xl  rounded-xl  hover:bg-blue-70  hover:shadow-lg transition duration-200 active:scale-95 focus:outline-none focus:ring-2">
                <header className="w-full h-48 flex  justify-center items-center ">
                  <img
                    src={`${product.productImages}`}
                    alt=""
                    className=" w-full h-full object-contain aspect-square"
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

                <footer className="w-full text-xs sm:text-sm ">
                  <div className="w-full">
                    <div className="flex justify-start  items-center  sm:gap-2  ">
                      <span className="text-lg font-semibold text-teal-600">
                        ₹ {Math.floor(product.discountedPrice)}
                      </span>
                      <span className="text-slate-500 line-through ">
                        {" "}
                        ₹{product.productPrice}
                      </span>
                      <span className="text-teal-700  font-bold">
                        {" "}
                        % {product.discount} off
                      </span>
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
    </>
  );
};

export default ProductCard;
