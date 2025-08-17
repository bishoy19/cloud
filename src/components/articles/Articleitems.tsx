import Link from "next/link";
import { Article } from "@/utils/type";
interface ArticleitemsProps {
  articals: Article;
}

const Articleitems = ({ articals }: ArticleitemsProps) => {
  return (
    <div className="p-5 rounded-lg shadow-lg my-1 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
      <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
        {articals.title}
      </h3>
      <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">
        {articals.body}
      </p>
      <Link
        className="text-xl bg-purple-700 hover:bg-purple-800 w-full block text-center text-white p-1 rounded-lg"
        href={`/articles/${articals.id}`}
      >
        <h6 className="text-blue-500">Read more</h6>
      </Link>
    </div>
  );
};

export default Articleitems;
