import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";

const AdminSaidBar = () => {
  return (
    <>
      <Link
        href="/admin"
        className="flex items-center  text-xl lg:text-2xl font-semibold text-white p-2 hover:bg-gray-700"
      >
        <CgMenuGridR className=" text-3xl me-1" />
        <span className=" hidden lg:block">Dashboard</span>
      </Link>

      <ul className=" mt-10 flex items-center justify-center flex-col lg:items-start">
        <Link
          href="/admin/articals-table"
          className=" flex items-center  text-xl mb-5 lg:border-b border-gray-300 text-white p-2 hover:bg-gray-700 transition"
        >
          <MdOutlineArticle className="me-1" />
          <span className=" hidden lg:block">Articals</span>
        </Link>
        <Link
          href="/admin/commens-table"
          className=" flex items-center  text-xl mb-5 lg:border-b border-gray-300 text-white p-2 hover:bg-gray-700 transition"
        >
          <FaRegCommentDots className="me-1" />
          <span className=" hidden lg:block">comments</span>
        </Link>
      </ul>
    </>
  );
};

export default AdminSaidBar;
