import React from "react";

function FoodSection() {
  return (
    <div className="algin-center flex justify-center gap-4 p-10">
      <div className="ingredient-section w-1/3 rounded bg-gray-100">
        <div className="mx-100 flex flex-col">
          <div className="m-6 max-h-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Vegetables
            </p>
            <div className="grid grid-cols-8 gap-4 md:grid-cols-6">
              <div className="h-full">
                <a
                  href="#"
                  className="block w-fit max-w-fit rounded-3xl border border-gray-200 bg-white px-3 py-2 pt-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Onion
                  </p>
                </a>
              </div>
              <div className="h-full">
                <a
                  href="#"
                  className="block w-fit max-w-fit rounded-3xl border border-gray-200 bg-white px-3 py-2 pt-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Onion
                  </p>
                </a>
              </div>
              <div className="h-full">
                <a
                  href="#"
                  className="block w-fit max-w-fit rounded-3xl border border-gray-200 bg-white px-3 py-2 pt-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Onion
                  </p>
                </a>
              </div>
              <div className="h-full">
                <a
                  href="#"
                  className="block w-fit max-w-fit rounded-3xl border border-gray-200 bg-white px-3 py-2 pt-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Onion
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="m-6 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <svg
              className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Need a help in Claim?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>

            <div className="grid grid-cols-8 gap-4 md:grid-cols-4">
              <div>
                <a
                  href="#"
                  className="block max-h-3 max-w-sm justify-center rounded-lg border border-gray-200 bg-white p-6 align-middle shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="justify-center align-middle font-normal text-gray-700 dark:text-gray-400">
                    Onion
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 rounded bg-gray-100">
        <div className="mx-100 flex flex-col">
          <div className="m-6 max-h-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            {/* sameple text */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
