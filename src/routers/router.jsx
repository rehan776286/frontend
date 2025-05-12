import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protecter from "../pages/AuthLayout";
import ClientLayout from "../ClientPaget/ClientLayout";
import UploadPage from "../pages/uploadpage";
// Lazy-loaded pages
const Home = lazy(() => import("../pages/home"));
const Register = lazy(() => import("../pages/registerpage"));
const OtpVerify = lazy(() => import("../pages/otpVerify"));
const Dashboard = lazy(() => import("../pages/dashboad"));
const OrderCart = lazy(() => import("../pages/orderDashboard"));
const ClientHome = lazy(() => import("../ClientPaget/ClientHome"));
const ProductPage = lazy(() => import("../ClientPaget/productPage"));
const OrderPage = lazy(() => import("../ClientPaget/orderpage"));

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
            path: "order",
            element: <OrderPage />,
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
