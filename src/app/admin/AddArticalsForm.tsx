"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddArticalsForm = () => {
  const [title, setitle] = useState("");
  const [description, setDescription] = useState("");
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("title  required");

    if (description === "") return toast.error("description required");
  };
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col space-y-5">
      <input
        type="text"
        placeholder=" Enter your title"
        className=" w-full mb-4 border rounded p-2 text-xl "
        value={title}
        onChange={(e) => setitle(e.target.value)}
      />
      <textarea
        placeholder="Enter your description"
        rows={5}
        className=" mb-4 p-2 lg:text-xl rounded resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className=" text-2xl bg-blue-700 hover:bg-blue-900 text-white  p-2 rounded-lg font-bold">
        Add
      </button>
    </form>
  );
};

export default AddArticalsForm;
