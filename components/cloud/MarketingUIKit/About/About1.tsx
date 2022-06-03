import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

export default function About1() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("About1 config", config);
  // console.log("About1 readyDatasrc", readyDatasrc);
  // console.log("About1 widgetnemgooReady", widgetnemgooReady);
  // console.log("About1 positionConfig", positionConfig);
  return (
    <>
      <div className="py-16">
        <div className="xl:container xl:mx-auto  px-4 flex flex-col md:items-center justify-between md:flex-row">
          <div className="mb-8 lg:mb-0 xl:w-1/3 md:w-1/2 w-full lg:pr-0 md:pr-4 pr-0">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold  text-gray-800  pr-16 lg:pr-0">
              Who we are
            </h1>
            <p className="mt-4 text-base leading-normal text-gray-600 lg:w-10/12 w-full xl:w-96 xl:pr-0 lg:pr-16 pr-0 ">
              We are designers, developer, and testers. We provide best design
              solution to our clients. Working perfectly with our clients.
            </p>
            <button className="w-auto mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium leading-none text-center text-white">
              Know more
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="sm:flex justify-between w-full h-auto">
              <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative">
                <img
                  className=" rounded inset-0 sm:w-72 w-full h-full object-cover object-top xl:object-center"
                  src="https://i.ibb.co/qRfFZMt/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.png"
                  alt="Display Picture of Jack Bill"
                  role="img"
                />
                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Anna Bill
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    Support
                  </p>
                </div>
              </div>
              <div className="h-48 md:h-64 lg:h-72 rounded sm:block hidden relative sm:ml-6 sm:mt-0 mt-4">
                <img
                  className=" rounded inset-0 w-full  h-full object-cover object-center"
                  src="https://i.ibb.co/CVPZJXC/pexels-italo-melo-2379004-1.png"
                  alt="Display Picture of Dan Joseph"
                  role="img"
                />
                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Dan Joseph
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    Manager
                  </p>
                </div>
              </div>
              <div className="h-full sm:w-auto w-10/12 sm:hidden block rounded relative">
                <img
                  className=" rounded   w-full h-full object-cover object-top xl:object-center"
                  src="https://i.ibb.co/kJBqSy6/mob-img-1.png"
                  alt="Display Picture of Jack Bill"
                  role="img"
                />
                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Anna Bill
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    Support
                  </p>
                </div>
              </div>
              <div className="h-full sm:w-auto w-10/12 rounded sm:hidden block relative sm:ml-6 sm:mt-0 mt-4">
                <img
                  className=" rounded  w-full  h-full object-cover object-center"
                  src="https://i.ibb.co/cry3nM8/mob-img-2.png"
                  alt="Display Picture of Dan Joseph"
                  role="img"
                />
                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Dan Joseph
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative mt-6">
              <img
                className="absolute rounded inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/XSRytCy/img-3.png"
                alt="A group of four people"
                role="img"
              />
              <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                <h5 className="text-base leading-none text-gray-800 mb-2">
                  Anna, Bill, Sam, Ashly
                </h5>
                <p className="text-base font-semibold leading-none text-gray-600">
                  Designers
                </p>
              </div>
            </div>
            <div className=" h-72 sm:w-auto w-10/12 sm:hidden block  rounded relative mt-6">
              <img
                className="absolute rounded inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/SBGQchk/mob-img-3.png"
                alt="A group of four people"
                role="img"
              />
              <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                <h5 className="text-base leading-none text-gray-800 mb-2">
                  Anna, Bill, Sam, Ashly
                </h5>
                <p className="text-base font-semibold leading-none text-gray-600">
                  Designers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
