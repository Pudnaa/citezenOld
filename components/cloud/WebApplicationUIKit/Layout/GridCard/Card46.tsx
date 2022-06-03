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

export default function Card46() {
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

  // console.log("Card46 config", config);
  // console.log("Card46 readyDatasrc", readyDatasrc);
  // console.log("Card46 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card46 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="w-96 bg-white dark:bg-gray-800 rounded py-6 px-8">
          <p className="text-4xl font-semibold leading-9 text-gray-800 dark:text-gray-100">
            56
          </p>
          <p className="text-xs font-medium leading-4 pt-2 dark:text-gray-400 text-gray-500">
            Upcoming tasks
          </p>
          <div className="flex items-center pt-4">
            <div className="w-0.5 h-4 bg-yellow-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Design mobile UI dashboard for iOS
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-red-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Calculate budget and contract
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-green-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Search for a UI kit
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-yellow-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Create HTML &amp; CSS for startup
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-purple-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Design search page for website
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-red-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Send an estimate budget for app
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-green-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Search for a mobile UI kit
            </p>
          </div>
          <div className="flex items-center pt-3">
            <div className="w-0.5 h-4 bg-yellow-500 rounded-sm" />
            <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-gray-100 pl-2">
              Export assets for HTML developer
            </p>
          </div>
          <p className="text-sm pt-6 cursor-pointer leading-none text-indigo-700">
            +10 more
          </p>
        </div>
      </div>
    </>
  );
}
