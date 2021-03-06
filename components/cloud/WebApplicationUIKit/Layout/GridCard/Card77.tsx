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
export default function Card77() {
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

  // console.log("Card77 config", config);
  // console.log("Card77 readyDatasrc", readyDatasrc);
  // console.log("Card77 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card77 positionConfig", positionConfig);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden">
        <div className="bg-white dark:bg-gray-800 rounded p-6">
          <div className="flex items-start justify-between">
            <div className="sm:flex items-center">
              <div className="w-10 relative">
                <img className="w-full" src="https://i.ibb.co/WnVgd7B/DP.png" />
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-100">
                  Tolu Arowoselu
                </p>
                <p className="text-xs pt-1 leading-normal dark:text-gray-400 text-gray-500">
                  2:18 AM • Oct 3 2020
                </p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={5} cy={12} r={1} />
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
            </svg>
          </div>
          <p className="mt-6 text-base leading-6 sm:leading-8 text-gray-800 dark:text-gray-100">
            Got quarantined at the vet and had to give Billy a little peptalk
            that the other dogs do wanna be his friend, he’s just can’t wait to
            play with them
            <br />
            <span className="font-bold">#billy #pets #dogs</span>
          </p>
          <div className="flex items-center mt-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 md:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-heart"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <p className="ml-4 text-base leading-4 text-gray-500">91</p>
            </div>
            <div className="ml-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 md:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-message-dots"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <line x1={12} y1={11} x2={12} y2="11.01" />
                <line x1={8} y1={11} x2={8} y2="11.01" />
                <line x1={16} y1={11} x2={16} y2="11.01" />
              </svg>
              <p className="ml-4 text-base leading-4 text-gray-500">14</p>
            </div>
            <div className="ml-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 md:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-share"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={6} cy={12} r={3} />
                <circle cx={18} cy={6} r={3} />
                <circle cx={18} cy={18} r={3} />
                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
