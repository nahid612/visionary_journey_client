import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddList = () => {
  const { user } = useAuth();
  const [place, setPlace] = useState([]);
  const [clean, setClean] = useState(false);
  // console.log(user)
  useEffect(() => {
    fetch(`https://nahid-seven.vercel.app/myAddList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data);
      });
  }, [user, clean]);

  // delate
  const handleDelate = (id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`https://nahid-seven.vercel.app/delatePlace/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // when click delate btn, then auto remove from website
             setClean(!clean)
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl  text-center  font-semibold my-10">My Add list: {place.length}</h1>
      <div className="grid gap-8 md:grid-cols-2">
      {place?.map((p) => (
        <div key={p._id} className="card bg-gray-100 shadow-xl ">
          <figure>
            <img src={p.image} alt="Shoes" />
          </figure>
          <div className="card-body rounded-xl bg-gray-100">
        <h2 className=" font-bold text-xl"><span className="font-semibold text-lg">Location: </span>{p.location}</h2>
        <div className="flex gap-10 justify-between ">
          <p><span className="font-semibold">Average Cost: </span>{p.cost} tk</p>
          <p><span className="font-semibold">Travel Time: </span>{p.travelTime} day</p>
        </div>
        <div className="flex flex-shrink-0 gap-10 end-1 justify-between ">
          <p><span className=" font-semibold">Season: </span> {p.season}</p>
          <p><span className="font-semibold">Total Visit per Year: </span> {p.visitor}</p>
        </div>
      </div>
            <div className="card-actions justify-between pb-5 px-5">
              <Link to={`/updatePlace/${p._id}`}>
              <button className="btn btn-outline btn-primary">Update</button>
              </Link>
              <button onClick={() => handleDelate(p._id)} className="btn btn-outline btn-primary">Delate</button>
              <button className="btn btn-outline btn-primary">Booking</button>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default MyAddList;
