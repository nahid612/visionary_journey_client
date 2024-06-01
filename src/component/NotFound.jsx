import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className=" text-center justify-center items-center">
            <h2 className="text-6xl font-bold">404</h2>
            <p className=" text-6xl font-bold mt-5">NOT FOUND</p>
            <Link to='/'>
            <button className="btn btn-warning mt-8">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;