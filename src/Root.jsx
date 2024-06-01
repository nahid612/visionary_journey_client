import { Outlet } from "react-router-dom";
import Navber from "./component/Navber";


const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;