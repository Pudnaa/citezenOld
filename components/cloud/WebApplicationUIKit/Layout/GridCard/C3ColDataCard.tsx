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
function C3ColDataCard() {
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

  // console.log("C3ColDataCard config", config);
  // console.log("C3ColDataCard readyDatasrc", readyDatasrc);
  // console.log("C3ColDataCard widgetnemgooReady", widgetnemgooReady);
  // console.log("C3ColDataCard positionConfig", positionConfig);
  return (
    <>
      {/* Card is full width. Use in 4 col grid for best view. */}
      {/* Card code block start */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded mx-auto">
        <h4 className="text-gray-800 dark:text-gray-100 font-normal text-lg leading-4 tracking-normal mb-2">
          Invoice # 35RD87
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-xs leading-3 font-normal">
          Assigned to: Josh Rollins
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-gray-600 dark:text-gray-400">
            <svg
              className="feather feather-user"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </span>
          <p className="ml-1 text-sm text-gray-800 dark:text-gray-100 leading-3 tracking-normal font-normal">
            Specter Consultancy
          </p>
        </div>
        <div className="mt-1 flex items-center">
          <span className="text-gray-600 dark:text-gray-400">
            <svg
              className="feather feather-dollar-sign"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={12} y1={1} x2={12} y2={23} />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </span>
          <p className="ml-1 text-sm text-gray-800 dark:text-gray-100 leading-3 tracking-normal font-normal">
            2,354 USD
          </p>
        </div>
        <button className="relative focus:outline-none mt-4 py-1 pr-10 rounded hover:bg-indigo-100 bg-indigo-700 text-white hover:text-indigo-700 tracking-normal text-xs pl-3 cursor-pointer">
          View Invoice
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={5} y1={12} x2={19} y2={12} />
            <line x1={13} y1={18} x2={19} y2={12} />
            <line x1={13} y1={6} x2={19} y2={12} />
          </svg>
        </button>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default C3ColDataCard;
