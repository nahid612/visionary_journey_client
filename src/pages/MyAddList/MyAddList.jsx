import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";

const MyAddList = () => {
  const { user } = useAuth();
  const [place, setPlace] = useState([]);
  // console.log(user)
  useEffect(() => {
    fetch(`http://localhost:5000/myAddList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-4xl">My Add list page</h1>
      <div className="grid gap-8 md:grid-cols-2">
      {place?.map((p) => (
        <div key={p._id} className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={p.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p.touristSpot}</h2>
            <div className="flex gap-16 justify-between ">
              <p>Average Cost: {p.cost}</p>
              <p>Travel Time: {p.travelTime}</p>
            </div>
            <div className="flex -mr-10 justify-between ">
              <p>Season: {p.season}</p>
              <p>Total Visit per Year: {p.visitor}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyAddList;
