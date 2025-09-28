import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialButton = () => {
  const { googleSignIn } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex justify-center space-x-4 ">
      {/* Facebook */}
      <button
        type="button"
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border text-blue-600 hover:bg-blue-100 transition"
      >
        <FaFacebookF />
      </button>

      {/* Google */}
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border text-red-500 hover:bg-red-100 transition"
      >
        <FaGoogle />
      </button>

      {/* GitHub */}
      <button
        type="button"
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border text-gray-800 hover:bg-gray-200 transition"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialButton;
