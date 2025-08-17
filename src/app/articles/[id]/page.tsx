import React from "react";
import { Article } from "@/utils/type";
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
interface postIdProps {
  params: {
    id: string;
  };
}
const postId = async ({ params }: postIdProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts...");
  }

  const data: Article = await response.json();

  return (
    <section className=" fix-hight container m-auto px-5 w-full pt-8 md:w-3/4 ">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2 ">{data.title}</h1>
        <div className=" text-gray-400 ">2/2/2025</div>
        <div className=" text-gray-800 text-xl  mt-5">{data.body}</div>
      </div>
      <AddCommentForm />
      {/* comments */}
      <h4 className=" text-xl text-gray-800 font-semibold ps-1 mb-2 mt-7 ">
        Comment
      </h4>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </section>
  );
};

export default postId;
