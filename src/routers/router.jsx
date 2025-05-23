import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protecter from "../pages/AuthLayout";
import ClientLayout from "../ClientPages/ClientLayout";

// Lazy-loaded pages

const Register = lazy(() => import("../pages/registerpage"));
const OtpVerify = lazy(() => import("../pages/otpVerify"));
const ClientHome = lazy(() => import("../ClientPages/ClientHome"));
const ProductPage = lazy(() => import("../ClientPages/productPage"));
const OrderPage = lazy(() => import("../ClientPages/orderPage"));
const OrderSuccess = lazy(() => import("../ClientPages/Ordersuccess"));
const OrderList = lazy(() => import("../ClientPages/OrderListCom"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: (
          <Protecter>
            <ClientLayout />
          </Protecter>
        ),
        children: [
          {
            index: true,
            element: <ClientHome />,
          },
          {
            path: "product/:id",
            element: <ProductPage />,
          },
          {
            path: "order/:id",
            element: <OrderPage />,
          },
          {
            path: "success/:id",
            element: <OrderSuccess />,
          },
          {
            path: "orderlist",
            element: <OrderList />,
          },
        ],
      },

      {
        path: "register",
        element: (
          <Protecter isAuthed={false}>
            <Register />
          </Protecter>
        ),
      },
      {
        path: "otpverify",
        element: (
          <Protecter isAuthed={false}>
            <OtpVerify />
          </Protecter>
        ),
      },
    ],
  },
]);
