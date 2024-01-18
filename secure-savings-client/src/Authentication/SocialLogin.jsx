import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);
  const handleSocialLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);

        // Swal.fire({
        //   title: "Good job!",
        //   text: "You logged in successfully!",
        //   icon: "success",
        // });
        navigate("/");
      })
      .catch((error) => {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Something went wrong!",
        // });
      });
  };
  return (
    <div>
      <div
        onClick={() => handleSocialLogin(googleLogin)}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;