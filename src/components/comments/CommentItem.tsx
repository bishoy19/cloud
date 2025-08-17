import { FaEdit, FaTrash } from "react-icons/fa";

const CommentItem = () => {
  return (
    <div className=" mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300">
      <div className="flex items-center justify-between mb-2">
        <strong className="text-gray-900 text-xl uppercase">John Doe</strong>
        <span className=" text-white rounded-lg px-1 bg-yellow-700 ">
          10 minutes ago
        </span>
      </div>
      <p className="text-gray-700 mb-2">This is a comment</p>
      <div className="flex items-end justify-end">
        <FaEdit className="text-green-700 text-xl cursor-pointer me-3" />
        <FaTrash className="text-red-700 text-xl cursor-pointer " />
      </div>
    </div>
  );
};

export default CommentItem;
