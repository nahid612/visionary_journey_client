import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {

    const {user} = useAuth()
    const loaction = useLocation()
    console.log(loaction)

    if(!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children} 
         </div>
    );
};

export default PrivateRoute;