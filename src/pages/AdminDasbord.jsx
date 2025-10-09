import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { useAdminFunctions } from "../provider/AdminProvider";
import AdminAddQues from "./AdminAddQues";
import AdminMangeUser from "./AdminMangeUser";
import AdminSettingPage from "./AdminSettingPage";

const AdminDasbord = () => {
  return (
    <div className="h-screen w-full bg-[#2a1e55] flex pt-25">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 text-white overflow-auto">
        <AdminAddQues />

        <AdminMangeUser />

        <AdminSettingPage />
      </main>
    </div>
  );
};

export default AdminDasbord;
