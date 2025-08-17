import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className=" fix-hight flex flex-col items-center justify-center h-screen">
      <h1 className=" text-7xl text-gray-800 font-bold  ">404 </h1>
      <p className="text-gray-500 text-3xl mt-2 mp-5">Page Not Found</p>
      <Link className="text-xl underline text-blue-700 " href="/">
        Go back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
