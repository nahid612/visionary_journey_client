import { Link, NavLink } from "react-router-dom";
// import useAuthContext from "../Hook/useAuthContext";

const Navber = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border border-green-600"
              : "font-medium"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <details className="dropdown dropdown-hover">
          <summary>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-green-500 font-bold border border-green-600  dropdown dropdown-hover"
                  : "font-medium"
              }
              to="/categories"
            >
              Categories
            </NavLink>
          </summary>
          <ul className="p-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold border border-green-600"
                    : "font-medium"
                }
                to="/categories/appertment"
              >
                Appertment
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold border border-green-600"
                    : " font-medium"
                }
                to="/family"
              >
                Family Room
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold border border-green-600"
                    : " font-medium"
                }
                to="/categories/student"
              >
                Student Room
              </NavLink>
            </li>
            
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border border-green-600"
              : "font-medium"
          }
          to="/updateprofile"
        >
          Update User
        </NavLink>
      </li>
    </>
  );

  // signout
//   const {signOut, user} = useAuthContext()

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-2xl md:text-xl text-lg font-bold">PeaceFul-Department</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>

      {/* ---------------- */}
      <div className="navbar-end">
        {
        //   user?.email ? <div className="dropdown dropdown-end">
        //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        //       <div className="w-10 rounded-full">
        //         <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } alt="" />
        //       </div>
        //     </label>
        //     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
        //       <li>
        //         <p className="text-xl text-center font-semibold my-1">{user?.displayName || 'user name Undefined'}</p>
        //       </li>
        //       <li>
        //         <p className="text-center items-center">{user.email}</p>
        //       </li>
        //       <li>
        //         <button onClick={signOut} className="btn btn-primary btn-sm my-2">LogOut</button>
        //       </li>  
        //     </ul>
        //   </div>
        //   :
          <Link to='/login'>
          <a className="btn">Login</a>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navber;