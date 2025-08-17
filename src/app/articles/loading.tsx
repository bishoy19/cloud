const articalsAskleton = [1, 2, 3, 4, 5, 6];
const ArtivalsLoading = () => {
  return (
    <section className=" fix-hight container m-auto px-5 animate-pulse">
      <div className=" bg-gray-300 h-12 rounded my-5 w-full m-auto md:w-2/3"></div>
      <div className="flex items-center justify-center flex-wrap gap-7 ">
        {articalsAskleton.map((item) => (
          <div
            key={item}
            className=" bg-gray-200 p-5 rounded-lg  my-1  w-full md:w-2/5 lg:w-1/4"
          >
            <h3 className=" bg-gray-300 h-6"></h3>
            <p className="my-2 text-xl bg-gray-400 p-1 h-6"></p>
            <div className="w-full bg-gray-200 p-1 rounded-lg h-6">
              <h6 className="w-full bg-gray-300 p-1 rounded-lg h-6"> </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 mb-2">
        <div className="bg-gray-300 w-60 rounded-sm h-9"></div>
      </div>
    </section>
  );
};

export default ArtivalsLoading;
