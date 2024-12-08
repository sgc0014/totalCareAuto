import Image from "next/image";
import Contactusform from "../Navbar/Contactus";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="object-cover"
          src="/images/banner/banner.jpg"
          alt="Car repair services"
          layout="fill"
          objectFit="cover"
          priority
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Reliable Car Repair Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Expert repairs, quality parts, and fast service to keep your car
          running like new.
        </p>
        <Contactusform altButton={true} />
      </div>
    </div>
  );
};

export default Banner;
