import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protecter from "../pages/AuthLayout";
import ClientLayout from "../ClientPaget/ClientLayout";

// Lazy-loaded pages

const Register = lazy(() => import("../pages/registerpage"));
const OtpVerify = lazy(() => import("../pages/otpVerify"));
const ClientHome = lazy(() => import("../ClientPaget/ClientHome"));
const ProductPage = lazy(() => import("../ClientPaget/productPage"));
const OrderPage = lazy(() => import("../ClientPaget/orderPage"));
const OrderSuccess = lazy(() => import("../ClientPaget/Ordersuccess"));
const OrderList = lazy(() => import("../ClientPaget/OrderListCom"));
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
