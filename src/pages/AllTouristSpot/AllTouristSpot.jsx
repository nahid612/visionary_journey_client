import { useLoaderData } from "react-router-dom";
import TouristSortCard from "./TouristSortCard";

const AllTouristSpot = () => {
    const places = useLoaderData()
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold">AllTouristSpot: {places.length}</h2>
            <div className="grid gap-8 md:grid-cols-2">
            {
                places.map(place => <TouristSortCard
                key={place._id}
                place ={place}
                ></TouristSortCard>)
            }
            </div>
        </div>
    );
};

export default AllTouristSpot;