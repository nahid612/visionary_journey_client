import useAuth from "../Hook/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  return (
    <div className="mx-8 pb-5 flex justify-between">
      <button
        onClick={() => googleLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGoogle />
        </span>
        Google
      </button>
      <button
        onClick={() => googleLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGithub />
        </span>
        Github
      </button>
      <button
        onClick={() => githubLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaFacebook/>
        </span>
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
