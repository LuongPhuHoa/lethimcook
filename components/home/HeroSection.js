import React from "react";

function HeroSection() {
  return (
    <div className="algin-center flex justify-center gap-4 p-10">
      <div className="w-1/3">
        <div className="flex rounded border-2">
          <button
            className="flex items-center justify-center border-r px-4"
            type="submit"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {" "}
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />{" "}
            </svg>
          </button>
          <input
            type="text"
            className="w-100 px-4 py-2"
            placeholder="Search Ingredients"
          />
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex rounded border-2">
          <button
            className="flex items-center justify-center border-r px-4"
            type="submit"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {" "}
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />{" "}
            </svg>
          </button>
          <input
            type="text"
            className="w-70 px-4 py-2"
            placeholder="Search Recipes"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
