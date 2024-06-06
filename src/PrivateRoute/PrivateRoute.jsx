import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth()
    const location = useLocation()
    // console.log(loaction)


    if(loading) {
        return <span className="loading loading-infinity loading-lg flex m-auto"></span>

    }
    
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