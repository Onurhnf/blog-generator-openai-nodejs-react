import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Go back to the previous page in the history stack
    navigate(-1);
  };
  return (
    <button
      className=" rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs inline-block  bg-gray-800 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed drop-shadow-md hover:drop-shadow-none absolute left-3 top-2"
      onClick={handleGoBack}
    >
      &larr; Go back
    </button>
  );
}

export default GoBackButton;
