import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
// import App from "./App.jsx";
import queryClient from "./lib/QueryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
// const Home = lazy(() => import("./pages/home.jsx"));
// const Register = lazy(() => import("./pages/registerpage.jsx"));
// const OtpVerify = lazy(() => import("./pages/otpVerify.jsx"));
// const Dashboard = lazy(() => import("./pages/dashboad.jsx"));
// import Protecter from "./pages/AuthLayout.jsx";
// import OrderCart from "./pages/orderDashboard.jsx";
// import ClientLayout from "./ClientPaget/ClientLayout.jsx";
// import ClientHome from "./ClientPaget/ClientHome.jsx";

// import Register from "./pages/registerpage.jsx";
// import OtpVerify from "./pages/otpVerify.jsx";
// import Protecter from "./pages/AuthLayout.jsx";
// import Dashboard from "./pages/dashboad.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // children: [
//     //   {
//     //     element: <Protecter isAuthed={false} />,
//     //     children: [
//     //       { path: "register", element: <Register /> },
//     //       { path: "otpverify", element: <OtpVerify /> },
//     //     ],
//     //   },
//     //   {
//     //     path: "/admin",
//     //     element: <Protecter isAuthed={true} />,
//     //     children: [
//     //       {
//     //         element: <Home />,
//     //         children: [
//     //           { index: true, element: <Dashboard /> },
//     //           { path: "orderdashboard", element: <OrderCart /> },
//     //         ],
//     //       },
//     //     ],
//     //   },
//     //   // {
//     //   //   path: "/user",
//     //   //   element: <Protecter allowedRoles={["user"]} />,
//     //   //   children: [
//     //   //     {
//     //   //       element: <ClientLayout></ClientLayout>,
//     //   //       children: [
//     //   //         {
//     //   //           index: true,
//     //   //           element: <ClientHome />,
//     //   //         },
//     //   //       ],
//     //   //     },
//     //   //   ],
//     //   // },
//     // ],
//     children: [
//       {
//         path: "",

//         element: (
//           <Protecter>
//             <Home />
//           </Protecter>
//         ),
//         children: [
//           {
//             index: true,
//             element: <Dashboard />,
//           },
//           {
//             path: "/orderdashboard",
//             element: <OrderCart />,
//           },
//         ],
//       },
//       {
//         path: "/register",
//         element: (
//           <Protecter isAuthed={false}>
//             <Register />
//           </Protecter>
//         ),
//       },
//       {
//         path: "/otpverify",
//         element: (
//           <Protecter isAuthed={false}>
//             <OtpVerify />,
//           </Protecter>
//         ),
//       },
//       {
//         path: "/home",
//         element: <ClientLayout />,
//         children: [
//           {
//             index: true,
//             element: <ClientHome />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-white">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </QueryClientProvider>
  // </StrictMode>
);
