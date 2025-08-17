import React from "react";
import RigesterForm from "@/components/formes/RigesterForm";
const Rigester = () => {
  return (
    <section className=" fix-hight container m-auto px-7 flex items-center justify-center ">
      <div className=" m-auto bg-white rounded-lg p-5 w-full md:w-2/3 ">
        <h1 className=" text-3xl font-bold text-gray-800 mb-5">Create New Account </h1>
        <RigesterForm />

      </div>
    </section>);
};

export default Rigester;
