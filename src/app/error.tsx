"use client";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  rest: () => void;
}

const ErrorPage = ({ error, rest }: ErrorPageProps) => {
  return (
    <div className="pt-7 text-center fix-hight ">
      <div className=" text-3xl text-red-600 font-semobold ">
        something went wrong
      </div>
      <h2 className="text-xl text-gray-700 my-4">
        Error massage:{error.message}
      </h2>
      <button
        className="py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none"
        onClick={() => rest}
      >
        reloood
      </button>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
