import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    section: "Category",
    link: ["Design", "Mockup", "View all", "Log In"],
  },
  {
    id: 3,
    section: "Pages",
    link: ["404", "Instructions", "License"],
  },
  {
    id: 4,
    section: "Others",
    link: ["Styleguide", "Changelog"],
  },
];

const footer = () => {
  return (
    <div className="bg-footer -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-8 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          {/* CLOUMN-2/3 */}

          <div className="group relative col-span-6">
            <ul>
              <li className="mb-5">
                <div className="">
                  <Image
                    src={"/images/footer/phone.png"}
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-white text-3xl mt-2">0422 379 120</p>
                  </div>
                </div>
              </li>
              <li className="mb-5">
                <div className="">
                  <Image
                    src={"/images/footer/marker.png"}
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-white text-3xl mt-2">
                      Total Care Auto 1A / 7 Lyn Pde. Prestons NSW 2170
                    </p>
                  </div>
                </div>
              </li>
            
            </ul>
          </div>
          <div className="col-span-6">
            <MapEmbed />
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2024 - All Rights Reserved by{" "}
                <Link href="/#"> Total Care Auto</Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
            <div className="flex mt-2 gap-4">
                  <div className="footer-icons">
                    <Link href="https://facebook.com">
                      <Image
                        src={"/images/footer/vec.svg"}
                        alt="facebook"
                        width={15}
                        height={20}
                      />
                    </Link>
                  </div>
                  <div className="footer-icons">
                    <Link href="https://twitter.com">
                      <Image
                        src={"/images/footer/twitter.svg"}
                        alt="twitter"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                  <div className="footer-icons">
                    <Link href="https://instagram.com">
                      <Image
                        src={"/images/footer/instagram.svg"}
                        alt="instagram"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapEmbed = () => {
  const latitude = "-33.929825576909685"; // Replace with your latitude
  const longitude = "150.88729743236263"; // Replace with your longitude
  const zoomLevel = 19; // Adjust the zoom level (1-21)
  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoomLevel}&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
        aria-hidden="false"
      ></iframe>
    </div>
  );
};

export default footer;
