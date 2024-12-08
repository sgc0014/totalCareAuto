import Image from "next/image";
import Contactusform from "../Navbar/Contactus";

const Digital = () => {
  return (
    <div className="mx-2">
      <div className="mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl  relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24 ">
            <h3 className="text-lg font-normal text-black mb-5 tracking-widest text-center lg:text-start">
              Do not become a breakdown statistics!
            </h3>
            <h4 className="text-4xl sm:text-6xl font-bold text-black mb-8 leading-snug text-center lg:text-start">
              Service your car with us{" "}
            </h4>
            <div className="text-center lg:text-start">
              <Contactusform altActiveButton={true} />
            </div>
          </div>

          {/* COLUMN-2 */}
        </div>
      </div>
    </div>
  );
};

export default Digital;
