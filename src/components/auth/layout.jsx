import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-gradient-to-br from-[#f0f4ff] to-[#e2e8f0] dark:from-gray-900 dark:to-gray-800">
      {/* Image Section */}
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2">
        <img
          src="https://i.ibb.co/k64Y68VG/5271700.jpg"
          alt="Login Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 to-transparent" />

        {/* Logo + Tagline */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 flex flex-col items-start gap-2">
          <img
            src="https://i.ibb.co/Zzt4SxBC/Flux-Dev-Design-a-unique-and-modern-logo-for-The-Lospollo-feat-1.jpg"
            alt="The Lospollos Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-primary shadow-md transition-transform duration-300 hover:scale-110"
          />
          <p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500">
            Your gateway to smarter login
          </p>
        </div>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full lg:w-1/2 items-center justify-center px-4 py-10 sm:px-8 lg:px-12"
      >
        <div className="w-full max-w-md bg-white/90 dark:bg-black/30 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 backdrop-blur-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
            Welcome On 👋
          </h2>

          <div className="flex justify-center mb-6">
            <img
              src="https://i.ibb.co/Zzt4SxBC/Flux-Dev-Design-a-unique-and-modern-logo-for-The-Lospollo-feat-1.jpg"
              alt="Company Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full border-2 border-primary shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          <Outlet />
        </div>
      </motion.div>
    </div>
  );
}

export default AuthLayout;
