import Image from "next/image";
import Contactusform from "../Navbar/Contactus";

const Digital = () => {
  return (
    <div className="mx-2">
      <div className="mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl relative bg-white shadow-2xl">
        <Image src="/images/featured/track3.png" alt="track-image" width={600} height={600} className="absolute bottom-0 top-0 right-0 hidden lg:block rotate-45" />

        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24">
            <h3 className="text-lg font-medium text-gray-700 mb-5 tracking-wide text-center lg:text-start">
              Don&apos;t become a breakdown statistic!
            </h3>
            <h4 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-center lg:text-start">
              Service your car with us
            </h4>
            <div className="text-center lg:text-start">
              <Contactusform altActiveButton={true} />
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="flex items-center justify-center lg:justify-end">
            <button className="mt-8 lg:mt-0 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
