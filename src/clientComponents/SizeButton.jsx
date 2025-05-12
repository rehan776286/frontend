// import React, { useEffect, useState } from "react";

// const TrafficLight = () => {
//   const [light, setLight] = useState("red");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLight((prev) =>
//         prev === "red" ? "green" : prev === "green" ? "yellow" : "red"
//       );
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const isActive = (color) => {
//     console.log(`${color} == ${light}`);
//     return light === color;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-24 h-64 bg-black rounded-xl flex flex-col justify-around items-center p-4 shadow-xl">
//         <div
//           className={`w-14 h-14 rounded-full ${
//             isActive("red") ? "bg-red-500" : "bg-gray-300"
//           }`}
//         ></div>
//         <div
//           className={`w-14 h-14 rounded-full ${
//             isActive("yellow") ? "bg-yellow-400" : "bg-gray-300"
//           }`}
//         ></div>
//         <div
//           className={`w-14 h-14 rounded-full ${
//             isActive("green") ? "bg-green-500" : "bg-gray-300"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default TrafficLight;

// import { useState } from "react";

// const ProductSizes = () => {
//   const [users, setUser] = useState([{ name: "rehna", age: "18" }]);
//   const [name, setName] = useState("");
//   const [age, setage] = useState("");
//   console.log(users);

//   const addtoto = () => {
//     setUser([...users, { name: name, age: age }]);
//     setName(""), setage("");
//   };
//   const deleteTodo = (index) => {
//     const update = users.filter((_, i) => i !== index);
//     setUser(update);
//   };
//   return (
//     <>
//       <div className="bg-gray-200 w-full h-20">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="bg-white"
//         />
//         <input
//           type="text"
//           value={age}
//           onChange={(e) => setage(e.target.value)}
//           className="bg-white"
//         />

//         <button onClick={addtoto}>add todo</button>
//       </div>
//       <div>
//         {users?.map((user, index) => {
//           return (
//             <div key={index}>
//               <h1>{user.name}</h1>
//               <h1>{user.age}</h1>
//               <button onClick={() => deleteTodo(index)}>delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ProductSizes;
