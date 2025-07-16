import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import AdminFeatures from './pages/admin-view/features'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccount from './pages/shopping-view/account'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from './components/ui/skeleton'
import SearchProducts from './pages/shopping-view/search'

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

 if (isLoading)
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center bg-black text-white space-y-4">
      <div className="p-4 rounded-full bg-white/10 shadow-lg animate-bounce">
        <img
          src="https://i.ibb.co/hFVrP5Dx/Flux-Dev-Design-a-unique-and-modern-logo-for-The-Lospollo-feat-3.jpg"
          alt="Loading..."
          className="w-28 h-28 rounded-full object-cover shadow-md"
        />
      </div>

      <p className="text-xl font-semibold text-red-500 tracking-wide animate-pulse">
        Loading...
      </p>

      <p className="text-sm text-gray-400">Please wait while we set things up.</p>
    </div>
  );

  return (
    <div className="flex flex-col overflow-hidden bg-white">
   
      <Routes>
         <Route
  path="/"
  element={
    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
      <div /> {/* Dummy element; redirection handled inside CheckAuth */}
    </CheckAuth>
  }
/>

        <Route path="/auth" element=
        { <CheckAuth isAuthenticated={isAuthenticated } user={user}>
          <AuthLayout />
        </CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>


        <Route path='/admin' element = 
           { <CheckAuth isAuthenticated={isAuthenticated } user={user}>
          <AdminLayout />
        </CheckAuth>}>
        <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>


        <Route path='/shop' element =
        { <CheckAuth isAuthenticated={isAuthenticated } user={user}>
          <ShoppingLayout />
        </CheckAuth>}>
        <Route path='home' element = {<ShoppingHome/>} />
       <Route path='checkout' element = {<ShoppingCheckout/>} />
      <Route path='listing' element = {<ShoppingListing/>} />
      <Route path='account' element = {<ShoppingAccount/>} />
<Route path='search' element={<SearchProducts />} />

        </Route>
              <Route path='*' element = {<NotFound />} />
              <Route path='/unauth-page' element= {<UnauthPage />} />

  
      </Routes>
    </div>
  )
}

export default App
