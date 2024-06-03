import { useContext } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    console.log(createUser)

    const handleRegister = (e) =>{
      e.preventDefault();
      // console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const img = form.get("img");
      const email = form.get("email");
      const password = form.get("password");
      console.log(name, img, email, password);
  
     
  
      // create user
      createUser(email, password)
        .then((result) => {
          console.log(result.user)
        })
        .catch((error) => {
          console.log(error);
        });
  


        // e.preventDefault()
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, photo, email, password)

        // const allInfo = {name, photo, email, password}
        // console.log(allInfo)

      
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Enter Your Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex text-center items-center">
                <input
                  type="text"
                  name="password"
                  placeholder="Enter a Password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* error showing on display */}
          <p className=" text-center mt-4">
            Already have an account{" "}
            <Link
              to="/login"
              className=" underline ml-1 text-blue-500 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;