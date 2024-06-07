const TouristSortCard = ({ place }) => {
  const { image, touristSpot, cost, season, travelTime, visitor } = place;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{touristSpot}</h2>
        <div className="flex gap-16 justify-between ">
          <p>Average Cost: {cost}</p>
          <p>Travel Time: {travelTime}</p>
        </div>
        <div className="flex -mr-10 justify-between ">
          <p>Season: {season}</p>
          <p>Total Visit per Year: {visitor}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TouristSortCard;
