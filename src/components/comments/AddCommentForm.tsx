"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const AddCommentForm = () => {
  const [text, setext] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(text);
    if (text === "") return toast.error("Comment is required");
  };

  return (
    <form onSubmit={handleSubmit} className="  w-full mt-5">
      <input
        type="text"
        placeholder="Add a comment"
        className=" w-full  rounded-lg p-2 text-xl bg-white focus:shadow-md "
        value={text}
        onChange={(e) => setext(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-700 text-white mt-2 p-1 rounded-lg w-main text-xl hover:bg-green-900 transition-all"
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
