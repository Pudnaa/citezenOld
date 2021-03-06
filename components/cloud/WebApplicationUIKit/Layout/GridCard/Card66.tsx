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
export default function Card66() {
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

  // console.log("Card66 config", config);
  // console.log("Card66 readyDatasrc", readyDatasrc);
  // console.log("Card66 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card66 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-12 px-4">
        <div className="max-w-sm bg-white p-10 dark:bg-gray-800 rounded">
          <div className="sm:pr-12 pr-5">
            <div className="flex items-end">
              <p className="sm:text-5xl text-4xl font-bold leading-10 text-indigo-700">
                $5
              </p>
              <p className="text-xs font-medium leading-4 text-indigo-700">
                / per month
              </p>
            </div>
            <p className="pt-4 sm:text-3xl text-2xl font-bold leading-10 dark:text-gray-100 text-gray-800">
              Basic
            </p>
            <p className="pt-1.5 sm:text-sm text-xs leading-5 dark:text-gray-400 text-gray-500">
              To familiarize yourself with our tools
            </p>
            <div className="flex items-center pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={18}
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7866 0.920117C8.28414 0.500586 5.71582 0.500586 3.21337 0.920117C2.29914 1.07338 1.57106 1.77525 1.38775 2.68529C0.547975 6.85437 0.502151 11.1444 1.25269 15.3305L1.55826 17.0348C1.65249 17.5603 2.29315 17.7703 2.68022 17.4027L6.36867 13.8987C6.72241 13.5626 7.27755 13.5626 7.63138 13.8987L11.3198 17.4027C11.7068 17.7703 12.3474 17.5603 12.4417 17.0348L12.7473 15.3305C13.4978 11.1445 13.452 6.85437 12.6122 2.68529C12.4289 1.77525 11.7008 1.07338 10.7866 0.920117Z"
                  fill="#4338CA"
                />
              </svg>
              <p className="dark:text-gray-100 sm:pl-1 pl-2 sm:text-base text-sm leading-4 text-gray-800">
                Host Project
              </p>
            </div>
            <div className="flex items-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={18}
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7866 0.920117C8.28414 0.500586 5.71582 0.500586 3.21337 0.920117C2.29914 1.07338 1.57106 1.77525 1.38775 2.68529C0.547975 6.85437 0.502151 11.1444 1.25269 15.3305L1.55826 17.0348C1.65249 17.5603 2.29315 17.7703 2.68022 17.4027L6.36867 13.8987C6.72241 13.5626 7.27755 13.5626 7.63138 13.8987L11.3198 17.4027C11.7068 17.7703 12.3474 17.5603 12.4417 17.0348L12.7473 15.3305C13.4978 11.1445 13.452 6.85437 12.6122 2.68529C12.4289 1.77525 11.7008 1.07338 10.7866 0.920117Z"
                  fill="#D2DCFE"
                />
              </svg>
              <p className="dark:text-gray-100 sm:pl-1 pl-2 sm:text-base text-sm leading-4 text-gray-800">
                Billing
              </p>
            </div>
            <div className="flex items-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={18}
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7866 0.920117C8.28414 0.500586 5.71582 0.500586 3.21337 0.920117C2.29914 1.07338 1.57106 1.77525 1.38775 2.68529C0.547975 6.85437 0.502151 11.1444 1.25269 15.3305L1.55826 17.0348C1.65249 17.5603 2.29315 17.7703 2.68022 17.4027L6.36867 13.8987C6.72241 13.5626 7.27755 13.5626 7.63138 13.8987L11.3198 17.4027C11.7068 17.7703 12.3474 17.5603 12.4417 17.0348L12.7473 15.3305C13.4978 11.1445 13.452 6.85437 12.6122 2.68529C12.4289 1.77525 11.7008 1.07338 10.7866 0.920117Z"
                  fill="#D2DCFE"
                />
              </svg>
              <p className="dark:text-gray-100 sm:pl-1 pl-2 sm:text-base text-sm leading-4 text-gray-800">
                Support
              </p>
            </div>
            <div className="flex items-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={18}
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7866 0.920117C8.28414 0.500586 5.71582 0.500586 3.21337 0.920117C2.29914 1.07338 1.57106 1.77525 1.38775 2.68529C0.547975 6.85437 0.502151 11.1444 1.25269 15.3305L1.55826 17.0348C1.65249 17.5603 2.29315 17.7703 2.68022 17.4027L6.36867 13.8987C6.72241 13.5626 7.27755 13.5626 7.63138 13.8987L11.3198 17.4027C11.7068 17.7703 12.3474 17.5603 12.4417 17.0348L12.7473 15.3305C13.4978 11.1445 13.452 6.85437 12.6122 2.68529C12.4289 1.77525 11.7008 1.07338 10.7866 0.920117Z"
                  fill="#D2DCFE"
                />
              </svg>
              <p className="dark:text-gray-100 sm:pl-1 pl-2 sm:text-base text-sm leading-4 text-gray-800">
                Customer Domen
              </p>
            </div>
            <div className="flex items-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={18}
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7866 0.920117C8.28414 0.500586 5.71582 0.500586 3.21337 0.920117C2.29914 1.07338 1.57106 1.77525 1.38775 2.68529C0.547975 6.85437 0.502151 11.1444 1.25269 15.3305L1.55826 17.0348C1.65249 17.5603 2.29315 17.7703 2.68022 17.4027L6.36867 13.8987C6.72241 13.5626 7.27755 13.5626 7.63138 13.8987L11.3198 17.4027C11.7068 17.7703 12.3474 17.5603 12.4417 17.0348L12.7473 15.3305C13.4978 11.1445 13.452 6.85437 12.6122 2.68529C12.4289 1.77525 11.7008 1.07338 10.7866 0.920117Z"
                  fill="#D2DCFE"
                />
              </svg>
              <p className="dark:text-gray-100 sm:pl-1 pl-2 sm:text-base text-sm leading-4 text-gray-800">
                Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
