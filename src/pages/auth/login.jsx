import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config/index.js";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { motion } from "framer-motion";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
      }}
      className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-white/90 dark:bg-black/30 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-200 dark:border-gray-700"
    >
      <div className="text-center space-y-2 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
          Sign in to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Don’t have an account?
          <Link
            to="/auth/register"
            className="ml-1 font-medium text-primary hover:underline transition duration-200"
          >
            Register
          </Link>
        </p>
      </div>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </motion.div>
  );
}

export default AuthLogin;
