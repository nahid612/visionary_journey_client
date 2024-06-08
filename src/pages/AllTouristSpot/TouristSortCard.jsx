import { Link } from "react-router-dom";

const TouristSortCard = ({ place }) => {
  const { image, touristSpot, cost, season, travelTime, visitor,_id } = place;

  return (
    <div className="card mt-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body rounded-xl bg-gray-100">
        <h2 className=" font-bold text-xl"><span className="font-semibold text-lg">Location: </span>{touristSpot}</h2>
        <div className="flex gap-10 justify-between ">
          <p><span className="font-semibold">Average Cost: </span>{cost} tk</p>
          <p><span className="font-semibold">Travel Time: </span>{travelTime}day</p>
        </div>
        <div className="flex gap-10 end-1 justify-between ">
          <p><span className=" font-semibold">Season: </span> {season}</p>
          <p><span className="font-semibold">Total Visit per Year: </span> {visitor}</p>
        </div>
        
        {/* ------------ */}
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSortCard;

