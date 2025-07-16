import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // 1. Root path "/" => route based on auth
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" replace />;
    }

    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/shop/home" replace />;
    }
  }

  // 2. If NOT authenticated, block all except /login and /register
  if (
    !isAuthenticated &&
    !(
      location.pathname.startsWith("/auth/login") ||
      location.pathname.startsWith("/auth/register")
    )
  ) {
    return <Navigate to="/auth/login" replace />;
  }

  // 3. If already authenticated, prevent going to /login or /register
  if (
    isAuthenticated &&
    (location.pathname.startsWith("/auth/login") ||
     location.pathname.startsWith("/auth/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/shop/home" replace />;
    }
  }

  // 4. Authenticated users trying to access other roles' pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/unauth-page" replace />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.startsWith("/shop")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // 5. All other allowed access
  return <>{children}</>;
}

export default CheckAuth;
