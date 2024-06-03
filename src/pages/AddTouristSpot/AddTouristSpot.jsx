const AddTouristSpot = () => {
  return (
    <div>
      <div className=" mt-10">
        <div className="text-center ">
          <h1 className="text-5xl my-3 font-bold">Add Tourist Spot!</h1>
        </div>
        <div className=" w-full shadow-2xl bg-base-100">
          <form >
            <div className=" lg:grid lg:grid-cols-2 gap-5">
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
                  name="Location"
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
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
