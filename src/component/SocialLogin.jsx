import useAuth from "../Hook/useAuth";
import { FaGoogle, FaGithub,FaTwitter  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = () => {
  const { googleLogin, githubLogin,facebookLogin, twitterLogin } = useAuth();
  return (
    <div className="mx-7 pb-5 grid  grid-cols-2 gap-5 justify-between">
      <button
        onClick={() => googleLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGoogle />
        </span>
        Google
      </button>
      {/* ---------- */}
      <button
        onClick={() => githubLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGithub />
        </span>
        Github
      </button>
      {/* --------------- */}
      <button
        onClick={() => facebookLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaFacebook/>
        </span>
        Facebook
      </button>
      {/* ------------- */}
      <button
        onClick={() => twitterLogin()}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
        <FaTwitter />
        </span>
        Twitter
      </button>
    </div>
  );
};

export default SocialLogin;
