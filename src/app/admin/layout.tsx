import React from "react";
import AdminSaidBar from "./AdminSaidBar";
import type { Metadata } from "next";

interface AdminLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Admin-dashboard",
  description: "bbb",
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="overFlow-hight flex items-start justifu-between overflow-hidden">
      <div className="overFlow-hight w-15 lg:w-1/5 bg-gray-800 text-white p-1 lg:p-5">
        <AdminSaidBar />
      </div>
      <div className="overFlow-hight w-full lg:w-4/5 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
