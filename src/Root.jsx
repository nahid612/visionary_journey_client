import { Outlet } from "react-router-dom";
import Navber from "./component/Navber";
import AuthProvider from "./AuthProvider/AuthProvider";


const Root = () => {
    return (
        <div className="lg:mx-24 md:mx-12 mx-4">
            <Navber/>
            <AuthProvider/>
            <Outlet/>
        </div>
    );
};

export default Root;