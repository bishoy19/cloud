import { TiTick } from "react-icons/ti";

const WeperHostion = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-3/4  bg-gray-200 p-4 rounded md:w-2/4 lg:w-1/4 ">
      <h3 className=" text-3xl font-bold text-perple-900 ">premiam</h3>
      <strong className=" text-3xl font-bold text-gray-900 my-5">$30</strong>
      <span className="bd-red-200 text-red-900 rounded-full px-2 py-1 font-semibold ">
        10% oFF
      </span>
      <div className="mt-6">
        <h5 className="text-2xl mb-1 font-semibold  text-perple-700 ">
          {" "}
          top feachers
        </h5>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          100 websites
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          100 gb sd storge
        </div>{" "}
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          weekly backup
        </div>{" "}
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          unlemted bandwith
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          free domain
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          free hosting
        </div>
      </div>
      <button className=" text-2xl border-gray-900 text-gray-900 hover:bg-gray-900  hover:text-white p-1 mt-4 border-2 rounded-full w-full font-bold transition-all  ">
      BUY later
      </button>
    </div> 
  );
};

export default WeperHostion;
