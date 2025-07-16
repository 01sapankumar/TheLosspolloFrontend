import { AlignLeft, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
      {/* Left: Sidebar Toggle */}
      <div className="flex items-center gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <AlignLeft className="w-5 h-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white hidden sm:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Right: Logout */}
      <div className="flex items-center gap-2">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="gap-2 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
