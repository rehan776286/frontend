import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AwesomeLoader from "../components/loader";

const Protecter = ({ children, isAuthed = true }) => {
  const navigate = useNavigate();
  const { isAuth, loading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loading) return; // Don't do anything while loading

    if (isAuthed && !isAuth) {
      // You want the user to be authenticated, but they're not
      console.log("Redirecting to register because user is not authenticated");
      navigate("/register");
    } else if (isAuthed && isAuth) {
      // You want the user to be unauthenticated, but they're logged in
      console.log("Redirecting to home because user is already authenticated");
      navigate("/");
    }
  }, [isAuth, isAuthed, navigate, loading]);

  if (loading) {
    // Show a loader while loading
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Protecter;


// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import AwesomeLoader from "../components/loader";
// const Protecter = ({ children, isAuthed = true }) => {
//   // const [login, setLogin] = useState(() => {
//   //   return localStorage.getItem("cook") || "user";
//   // });

//   // const switchForm = (type) => {
//   //   setLogin(type);
//   //   localStorage.setItem("cook", type);
//   // };

//   const navigate = useNavigate();
//   const { isAuth, loading, user } = useSelector((state) => state.auth);
//   console.log(user);
//   console.log(isAuth);
//   console.log(`isAthuth ka sach ${isAuthed}`);

//   useEffect(() => {
//     // if (isAuthed && !isAuth) return navigate("/register");
//     // if (!isAuthed && isAuth) return navigate("/");
//     // if (allowedRoles.length && !allowedRoles.includes(user?.role))
//     //   return navigate("/");

//     if (loading) return;

//     if (isAuthed && isAuthed !== isAuth) {
//       console.log(`register ${isAuthed}`);
//       // You want the user to be authenticated, but they're not
//       navigate("/register");
//     } else if (isAuthed && isAuthed !== isAuth) {
//       console.log(`naviget //// ${isAuthed}`);
//       // You want the user to be unauthenticated, but they're logged in
//       navigate("/");
//     }
//   }, [isAuth, isAuthed, navigate, loading]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-900">
//         <div className="relative w-16 h-16">
//           <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
//           <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
//         </div>
//       </div>
//     );

//   return <>{children}</>;
// };

// export default Protecter;
