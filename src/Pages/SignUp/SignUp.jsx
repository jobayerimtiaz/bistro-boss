import { Link } from "react-router-dom";

import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div>
        <div></div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Sign Up
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="name"
              />
              {errors.name && (
                <span className="text-red-500 py-2">Name is required</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="email"
              />
              {errors.email && (
                <span className="text-red-500 py-2">Email is required</span>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                name="password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 py-2">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 py-2">
                  password must be 6 character
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 py-2">
                  Password must be at least 6 characters long and include at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              )}
            </div>

            {/* <div className="mb-6">
            <LoadCanvasTemplate />
          </div> */}

            {/* <div className="mb-6">
            <input
              type="text"
              ref={captchaRef}
              placeholder="Type here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              name="Captcha"
              required
            />
          </div> */}

            {/* <div className="flex items-center mb-6">
            <button onClick={handleValidateCaptcha} className="btn btn-outline">
              Validate
            </button>
          </div> */}

            <button
              type="submit"
              className="w-full bg-[#D1A054B3] text-white py-2 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already registered?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Go to log in
              </Link>
            </p>

            {/* Divider Text */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-500 text-sm">
                Or sign Up with
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

export default SignUp;
