"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SareshAericals = () => {
  const [sarech, setSarech] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(sarech);
    router.push(`/articles/sarech?sarech=${sarech}`);
  };

  return (
    <form onSubmit={handleSubmit} className=" my-5 w-full m-auto md:w-2/3">
      <input
        type="search"
        placeholder=" search for articles"
        className=" w-full mb-4 border-none rounded p-3 text-xl text-gray-900 "
        value={sarech}
        onChange={(e) => setSarech(e.target.value)}
      />
    </form>
  );
};

export default SareshAericals;
