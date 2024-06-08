import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

const AddTouristSpot = () => {

  const {user } = useAuth();
  
  const handleAddTouristSpot = (e) =>{
    e.preventDefault()
    const image = e.target.image.value
    const touristSpot = e.target.touristSpot.value
    const countryName = e.target.countryName.value
    const location = e.target.location.value
    const description = e.target.description.value
    const cost = e.target.cost.value
    const season = e.target.season.value
    const travelTime = e.target.travelTime.value
    const visitor = e.target.visitor.value
    const email = user.email
  
    const info = {image,touristSpot,countryName, location,description, cost, season,travelTime, visitor, email}
    console.log(info)

    // send to the server
    fetch('https://nahid-seven.vercel.app/addTouristSpot',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
        },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Place add successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })

    console.log(info)
  }

  return (
    <div>
      <div className=" mt-10 rounded-lg bg-gray-100">
        <div className="text-center ">
          <h1 className="text-5xl my-3 p-5 font-bold">Add Tourist Spot!</h1>
        </div>
        <div className=" w-full shadow-2xl">
          <form onSubmit={handleAddTouristSpot}>
            <div className=" lg:grid lg:grid-cols-2 gap-5 p-5">
              {/* --------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="image url"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tourist spot name</span>
                </label>
                <input
                  type="text"
                  name="touristSpot"
                  placeholder="tourist spot name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <input
                  type="text"
                  name="countryName"
                  placeholder="country name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="write a short description"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Average Cost</span>
                </label>
                <input
                  type="number"
                  name="cost"
                  placeholder="average cost"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seasonality</span>
                </label>
                <input
                  type="text"
                  name="season"
                  placeholder="seasonality"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Travel Time</span>
                </label>
                <input
                  type="number"
                  name="travelTime"
                  placeholder="travel day"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* ---------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Visitors per Year</span>
                </label>
                <input
                  type="number"
                  name="visitor"
                  placeholder="total visitors per year"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6 p-5">
                <button className="btn btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
