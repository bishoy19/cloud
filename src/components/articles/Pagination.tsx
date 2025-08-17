const pages = [1, 2, 3, 4, 5, 6];
const Pagination = () => {
  return (
    <div className=" flex items-center justify-center mt-10 mb-2">
      <div className=" border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl hover:bg-gray-200 cursor-pointer transition">
        prev
      </div>
      {pages.map((page) => (
        <div
          key={page}
          className=" border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl hover:bg-gray-200 cursor-pointer transition"
        >
          {page}
        </div>
      ))}
      <div className=" border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl hover:bg-gray-200 cursor-pointer transition">
        next
      </div>
    </div>
  );
};

export default Pagination;
