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
  AtomImage,
} from "@components/common/Atom";

const CtaIII = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Cta3 config", config);
  // console.log("Cta3 readyDatasrc", readyDatasrc);
  // console.log("Cta3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Cta3 positionConfig", positionConfig);
  const item = readyDatasrc[0]; //eswel readyDatasrc[0]
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800"
            />
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-base leading-6 text-gray-600"
            />
          </div>
          <div className="mt-16 w-full">
            <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
              <AtomText
                item={renderPositionType(item, "position45", positionConfig)}
                customClassName="text-xl font-medium leading-5"
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10.6667L25.3333 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
          <div>
            <img
              className="hidden lg:block"
              src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png"
              alt="sofa"
            />
            <img
              className="w-80 sm:w-auto lg:hidden"
              src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
              alt="sofa"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
            <div>
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png"
                alt="chairs"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                alt="chairs"
              />
            </div>
            <div>
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                alt="chairs"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                alt="chairs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaIII;
