import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back 🎉",
        icon: "success",
        confirmButtonText: "Continue",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign In</title>
      </Helmet>
      <div>
        <div></div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Sign In
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="password"
                required
              />
            </div>

            <div className="mb-6">
              <LoadCanvasTemplate />
            </div>

            <div className="mb-6">
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="Captcha"
                required
              />
            </div>

            {/* <div className="flex items-center mb-6">
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline"
              >
                Validate
              </button>
            </div> */}

            <button
              type="submit"
              disabled={disabled}
              className={`w-full  text-white py-2 rounded-md hover: transition duration-300 ${
                disabled ? "bg-gray-500" : "bg-[#D1A054B3]"
              }`}
            >
              Sign In
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/signUp" className="text-blue-600 hover:underline">
                Create a New Account
              </Link>
            </p>

            {/* Divider Text */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-500 text-sm">
                Or sign in with
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full border text-blue-600 hover:bg-blue-100 transition"
              >
                <FaFacebookF />
              </button>

              {/* Google */}
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full border text-red-500 hover:bg-red-100 transition"
              >
                <FaGoogle />
              </button>

              {/* GitHub */}
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-800 hover:bg-gray-200 transition"
              >
                <FaGithub />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
