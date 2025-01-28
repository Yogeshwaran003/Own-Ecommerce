import { DialogDemo } from "@/sections/NavigatedBar";
// import { Navbar } from "./Navbar";

function Hero() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <DialogDemo className="bg-transparent backdrop-blur-md" />
        {/* Adjust the DialogDemo or Navbar styles */}
      </div>

      {/* Hero Section */}
      <div className="w-screen h-screen overflow-hidden relative flex items-center justify-center bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> 
        <video
          src="videos/Herovideo.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full absolute top-0 left-0 object-cover"
        ></video>

        {/* <div className="relative bg-[rgba(0,0,0,0.5.5)] backdrop-blur-[20px]  rounded-lg z-10 text-center flex flex-col justify-center p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[rgba(255,255,255,0.4)] mb-4">
            Unleash the Power
          </h1>
          <p className="text-xl md:text-2xl text-[rgba(255,255,255,0.4)] mb-6">
            Experience Power Without Limits - Designed for the Future.
          </p>
          <p className="text-lg md:text-xl text-[rgba(255,255,255,0.4)] mb-6">
            Find your next high-performance laptop today and elevate your computing experience.
          </p>

          <div className="flex justify-center">
            <div className="border-2 border-white w-32 rounded-lg p-0 hover:border-none">
              <button className="px-6 py-3 bg-[rgba(212,190,190,0)]shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[20px] hover:scale-110 transition-all transform-cpu text-white rounded-lg hover:bg-[rgba(212,190,190,0.7)] hover:shadow-lg hover:shadow-[rgba(31,38,135,0.37)] hover:backdrop-blur-[0px] hover:rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
