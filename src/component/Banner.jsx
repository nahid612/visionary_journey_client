const Banner = () => {
    return (
      <>
        <div className=" lg:mt-8 mt-4 carousel w-full lg:h-[550px] md:h-[450px] h-[400px] rounded-xl">
          <div
            id="item1"
            className="hero min-h-screen carousel-item w-ful"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/LNFpYFz/rayyu-maldives-x-Ps-FXsb-XJRg-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-[700px]">
                <h1 className="mb-5 text-3xl font-bold">
                  Welcome to Our <br />{" "}
                  <span className="text-5xl font-bold">Visionary_Journey</span>
                </h1>
                <p className="mb-5">
                  Good Service is our passion. No matter what the weather, no
                  matter what the situation we are in, if we have the right
                  perspective in life, life will always be beautiful!
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div
            id="item2"
            className="hero min-h-screen carousel-item w-ful"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/rc005bD/andreea-popa-Pkna-Orb1l-Vo-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className=" max-w-[700px]">
                <h1 className="mb-5 text-3xl font-bold">
                  Welcome to Our <br />{" "}
                  <span className="text-5xl font-bold">PeaceFul Department</span>
                </h1>
                <p className="mb-5">
                  Booking your dream tourist place. We alwayes
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div
            id="item3"
            className="hero min-h-screen carousel-item w-ful"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/nm7BwqV/rocco-stoppoloni-888oawca-ZI-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className=" max-w-[700px]">
                <h1 className="mb-5 text-3xl font-bold">
                  Welcome to Our <br />{" "}
                  <span className="text-5xl font-bold">PeaceFul Department</span>
                </h1>
                <p className="mb-5">
                  Good Service is our passion. No matter what the weather, no
                  matter what the situation we are in, if we have the right
                  perspective in life, life will always be beautiful!
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div
            id="item4"
            className="hero min-h-screen carousel-item w-ful"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/xjYnhWD/matheen-faiz-x-Qwa0-Hb-Mf-YM-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className=" max-w-[700px]">
                <h1 className="mb-5 text-3xl font-bold">
                  Welcome to Our <br />{" "}
                  <span className="text-5xl font-bold">PeaceFul Department</span>
                </h1>
                <p className="mb-5">
                  Good Service is our passion. No matter what the weather, no
                  matter what the situation we are in, if we have the right
                  perspective in life, life will always be beautiful!
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </>
    );
  };
  
  export default Banner;