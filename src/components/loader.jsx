import React from "react";

const AwesomeLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex space-x-2">
        <div
          className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default AwesomeLoader;
