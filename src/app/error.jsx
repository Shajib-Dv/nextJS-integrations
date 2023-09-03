/** @format */
"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2>{error?.message || "Something went wrong !"}</h2>
      <button onClick={() => reset()} className="btn my-5">
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
