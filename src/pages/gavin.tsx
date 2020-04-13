import React, { useState } from "react";

export default () => {
  const numbers = [14, 5, 18, 4, 19];
  const [output, setOutput] = useState("");
  let doButtonStuff = () => {
    setOutput(numbers.join(","));
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <button
          className="bg-red-600 rounded text-gray-100 p-4"
          onClick={doButtonStuff}
        >
          Don't press me
        </button>
      </div>
      <div className="flex justify-center">
        <div className="text-6xl">{output}</div>
      </div>
    </div>
  );
};
