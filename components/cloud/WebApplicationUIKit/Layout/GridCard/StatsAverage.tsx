import { useContext } from "react";
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

function StatsAverage() {
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

  // console.log("StatsAverage config", config);
  // console.log("StatsAverage readyDatasrc", readyDatasrc);
  // console.log("StatsAverage widgetnemgooReady", widgetnemgooReady);
  // console.log("StatsAverage positionConfig", positionConfig);
  return (
    <>
      <div className="md:w-80 shadow rounded-lg flex flex-col items-center w-full">
        <div className="w-full flex items-center justify-center py-7 border-b border-gray-200">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-medium leading-none text-center text-gray-500">
              Performance Average
            </p>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-normal text-center text-gray-800 mt-3">
              65%
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-7 border-b border-gray-200">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-medium leading-none text-center text-gray-500">
              Projects
            </p>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-normal text-center text-gray-800 mt-3">
              09
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-7 border-b border-gray-200">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-medium leading-none text-center text-gray-500">
              Average first response time
            </p>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-normal text-center text-gray-800 mt-3">
              33m
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-7 border-b border-gray-200">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-medium leading-none text-center text-gray-500">
              Average response time
            </p>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-normal text-center text-gray-800 mt-3">
              3h 8m
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-7">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-medium leading-none text-center text-gray-500">
              Target Achievement
            </p>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-normal text-center text-gray-800 mt-3">
              80%
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsAverage;
