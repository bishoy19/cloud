import React from "react";
import AddArticalsForm from "./AddArticalsForm";

const Admin = () => {
  return (
    <div className=" fix-hight flex items-center justify-center px-5 lg:px-20">
      <div className=" shadow p-4 bg-purple-200 rounded w-full">
        <h2 className=" text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
          Add new Articals
        </h2>
        <AddArticalsForm />
      </div>
    </div>
  );
};

export default Admin;
