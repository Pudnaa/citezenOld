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
function C3ColStatsCard() {
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

  // console.log("C3ColStatsCard config", config);
  // console.log("C3ColStatsCard readyDatasrc", readyDatasrc);
  // console.log("C3ColStatsCard widgetnemgooReady", widgetnemgooReady);
  // console.log("C3ColStatsCard positionConfig", positionConfig);
  return (
    <>
      {/* Card is full width. Use in 4 col grid for best view. */}
      {/* Card code block start */}
      <div className="bg-white dark:bg-gray-800 shadow rounded mx-auto p-6 w-full">
        <div className="flex items-center pb-5 mb-5 border-b border-gray-300 dark:border-gray-200">
          <div className="p-4 text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cash"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={7} y={9} width={14} height={10} rx={2} />
              <circle cx={14} cy={14} r={2} />
              <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-gray-500 dark:text-gray-400 font-normal text-sm leading-5 tracking-normal">
              Total Earning
            </p>
            <h3 className="text-2xl leading-6 text-gray-900 dark:text-gray-100 font-bold mt-1">
              $159.89
            </h3>
          </div>
        </div>
        <div className="flex items-center pb-5 mb-5 border-b border-gray-300">
          <div className="p-4 text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-calendar-minus"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={4} y={5} width={16} height={16} rx={2} />
              <line x1={16} y1={3} x2={16} y2={7} />
              <line x1={8} y1={3} x2={8} y2={7} />
              <line x1={4} y1={11} x2={20} y2={11} />
              <line x1={10} y1={16} x2={14} y2={16} />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-gray-500 dark:text-gray-400 font-normal text-sm leading-5 tracking-normal">
              Last month Earnings
            </p>
            <h3 className="text-2xl leading-6 text-gray-900 dark:text-gray-100 font-bold mt-1">
              $23.11
            </h3>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-4 text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-layers-subtract"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={8} y={4} width={12} height={12} rx={2} />
              <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-gray-500 dark:text-gray-400 font-normal text-sm leading-5 tracking-normal">
              Total Items Sold
            </p>
            <h3 className="text-2xl leading-6 text-gray-900 dark:text-gray-100 font-bold mt-1">
              323
            </h3>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default C3ColStatsCard;
