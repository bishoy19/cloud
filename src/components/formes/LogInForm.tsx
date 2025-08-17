"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const LogInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") return toast.error("Email  required");
    if (password === "") return toast.error("password quired");
    // Log in logic
    router.push("/");
    // if you use replace yyou cant back to the login page
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col space-y-5">
      <input
        type="email"
        placeholder=" Enter your Email"
        className=" w-full mb-4 border rounded p-2 text-xl "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your Password"
        className=" w-full mb-4 border rounded p-2 text-xl "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" text-2xl bg-blue-800 text-white  p-2 rounded-lg font-bold">
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
