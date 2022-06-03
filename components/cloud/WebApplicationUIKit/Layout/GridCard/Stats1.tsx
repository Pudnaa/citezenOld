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
export default function Stats1() {
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

  // console.log("Stats1 config", config);
  // console.log("Stats1 readyDatasrc", readyDatasrc);
  // console.log("Stats1 widgetnemgooReady", widgetnemgooReady);
  // console.log("Stats1 positionConfig", positionConfig);
  return (
    <div className="mx-auto container dark:bg-gray-900 py-8 flex items-center justify-center px-4">
      <div className="w-80 px-5 py-5  shadow-md bg-indigo-700 rounded-sm flex flex-col justify-between">
        <div className="py-6 pl-4 w-full bg-indigo-600">
          <h2 className="text-white text-xl xl:text-4xl">132</h2>
          <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">
            Total Events
          </h3>
        </div>
        <div className="w-full bg-transparent py-3 pl-2 xl:py-6 xl:pl-4">
          <h2 className="text-white text-xl xl:text-4xl">$431k</h2>
          <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">
            Total Revenue
          </h3>
        </div>
        <div className="w-full bg-transparent py-3 pl-2 xl:py-6 xl:pl-4">
          <h2 className="text-white text-xl xl:text-4xl">2349</h2>
          <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">
            Tickets Sold
          </h3>
        </div>
        <div className="w-full bg-transparent py-3 pl-2 xl:py-6 xl:pl-4">
          <h2 className="text-white text-xl xl:text-4xl">7,564</h2>
          <h3 className="text-white text-base xl:text-xl mt-2 xl:mt-3">
            Total Engagement
          </h3>
        </div>
      </div>
    </div>
  );
}
