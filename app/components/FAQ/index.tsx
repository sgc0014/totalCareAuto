"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8  rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    What Should I Do When My Check Engine Light Comes On?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50 transition duration-700">
                  When your check engine light comes on, there could be a number
                  of issues. It could be something basic, like a loose gas cap,
                  or it could be something serious. The best way to ensure that
                  you are safe behind the wheel is to bring your vehicle into
                  our shop for a multi-point inspection. We can find the issue
                  and make you aware of it so you can choose whether or not you
                  want to take the next steps to getting your vehicle back to
                  peak conditions.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>
                    What Happens If I Ignore My Low Tire Pressure Warning Light?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  If your tire pressure is low then it can cause uneven wear on
                  your tires. That means that one tire may wear faster than
                  another forcing you to have to replace all of your tires
                  sooner. This can be quite costly. Low tire pressure also puts
                  you at risk of popping your tire sooner. When you drive down
                  the highway you may also feel your vehicle pulling to one side
                  of the road because of this. Also low tire pressure forces
                  your vehicle to use more power to generate the same amount of
                  speed, costing you more gas and money!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>How Often Should I Have My Brakes Checked?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  It is important to have your brakes checked often. Most folks
                  have their brakes checked when they have their tires rotated.
                  One of the mechanics at our service center can check the
                  thickness of your brake pads to ensure that they are running
                  at peak conditions. Your brake pads are essential for
                  maintaining stopping power, so be sure to have them checked
                  every chance that you get.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>What Type of Oil Filter Do I Need?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  The type of filter that your vehicle needs depends on the type
                  of oil that it needs. Conventional oil needs to be changed
                  about every 3,000 miles and only requires a conventional
                  filter. Synthetic oil, on the other hand, lasts much longer.
                  It can last anywhere between 6,000 and 12,000
                  miles.&nbsp;&nbsp;
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
