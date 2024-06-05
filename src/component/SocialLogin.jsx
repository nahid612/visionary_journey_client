import useAuth from "../Hook/useAuth";
import { FaGoogle, FaGithub,FaTwitter  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const { googleLogin, githubLogin,facebookLogin, twitterLogin } = useAuth();

  // navigate
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  // console.log(location)

  const handleSocialLogin = (socialProvider) =>{
    socialProvider()
    .then(result =>{
      if(result.user){
        navigate(from)
        
      }
    })
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div className="mx-7 pb-5 grid  grid-cols-2 gap-5 justify-between">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGoogle />
        </span>
        Google
      </button>
      {/* ---------- */}
      <button
        onClick={() => handleSocialLogin(githubLogin)}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaGithub />
        </span>
        Github
      </button>
      {/* --------------- */}
      <button
        onClick={() => handleSocialLogin(facebookLogin)}
        className="btn btn-outline btn-sm btn-primary"
      >
        <span>
          <FaFacebook/>
        </span>
        Facebook
      </button>
      {/* ------------- */}
      <button
        onClick={() => handleSocialLogin(twitterLogin)}
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
