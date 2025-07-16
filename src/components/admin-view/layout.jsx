import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <AdminHeader setOpen={setOpenSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-md shadow-lg transition-all">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
