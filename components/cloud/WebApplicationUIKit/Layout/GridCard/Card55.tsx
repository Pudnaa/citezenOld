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
export default function Card55() {
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

  // console.log("Card55 config", config);
  // console.log("Card55 readyDatasrc", readyDatasrc);
  // console.log("Card55 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card55 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="max-w-md py-6 pl-8 pr-8 sm:pr-24 bg-white dark:bg-gray-800 rounded">
          <img
            className="w-24 h-24 rounded-full shadow"
            src="https://i.ibb.co/h7tHKRm/Photo.png"
            alt="profile"
          />
          <p className="text-xl font-semibold leading-tight mt-2.5 text-gray-800 dark:text-gray-100">
            Delia Jimenez
          </p>
          <p className="text-sm leading-3 mt-2 text-gray-500 dark:text-gray-400">
            Bulgaria
          </p>
          <div className="mt-7">
            <div className="flex items-center">
              <div>
                <p className="text-xl font-semibold leading-tight text-green-600">
                  100,345
                </p>
                <p className="text-sm leading-3 mt-2 text-gray-500 dark:text-gray-400">
                  Followers
                </p>
              </div>
              <div className="ml-11">
                <p className="text-xl font-semibold leading-tight  text-blue-600">
                  1,765
                </p>
                <p className="text-sm leading-3 mt-2 text-gray-500 dark:text-gray-400">
                  Posts
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <button className="flex items-center justify-center px-5 py-3 border hover:bg-indigo-700 text-sm leading-none text-center text-indigo-700 dark:text-white dark:bg-indigo-700 hover:text-white rounded border-indigo-700 dark:hover:text-indigo-700  dark:hover:bg-white">
                Add to list
              </button>
              <div className="flex items-center ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.0002 9.99927C5.0002 9.44727 5.4482 8.99927 6.0002 8.99927C6.5522 8.99927 7.0002 9.44727 7.0002 9.99927C7.0002 10.5513 6.5522 10.9993 6.0002 10.9993C5.4482 10.9993 5.0002 10.5513 5.0002 9.99927ZM10.0002 8.99927C9.4482 8.99927 9.0002 9.44727 9.0002 9.99927C9.0002 10.5513 9.4482 10.9993 10.0002 10.9993C10.5522 10.9993 11.0002 10.5513 11.0002 9.99927C11.0002 9.44727 10.5522 8.99927 10.0002 8.99927ZM14.0002 8.99927C13.4482 8.99927 13.0002 9.44727 13.0002 9.99927C13.0002 10.5513 13.4482 10.9993 14.0002 10.9993C14.5522 10.9993 15.0002 10.5513 15.0002 9.99927C15.0002 9.44727 14.5522 8.99927 14.0002 8.99927ZM17.8986 11.2942C17.3916 14.5482 14.7686 17.2472 11.5196 17.8562C9.9506 18.1522 8.3526 17.9832 6.9026 17.3692C6.4916 17.1952 6.0666 17.1072 5.6496 17.1072C5.4596 17.1072 5.2716 17.1252 5.0866 17.1622L2.2746 17.7242L2.8376 14.9072C2.9556 14.3222 2.8836 13.6962 2.6306 13.0972C2.0166 11.6472 1.8486 10.0502 2.1436 8.48017C2.7526 5.23117 5.4506 2.60817 8.7056 2.10117C11.2956 1.69817 13.8286 2.51417 15.6566 4.34217C17.4856 6.17117 18.3026 8.70517 17.8986 11.2942ZM17.0716 2.92817C14.7866 0.644171 11.6266 -0.374829 8.3976 0.124171C4.3206 0.760171 0.9406 4.04417 0.1776 8.11117C-0.1904 10.0692 0.0216002 12.0632 0.7886 13.8762C0.8856 14.1072 0.9156 14.3222 0.8776 14.5152L0.0196002 18.8032C-0.0463998 19.1312 0.0566002 19.4702 0.2936 19.7062C0.4826 19.8962 0.7376 19.9992 1.0006 19.9992C1.0656 19.9992 1.1306 19.9932 1.1966 19.9802L5.4796 19.1232C5.7256 19.0762 5.9636 19.1452 6.1226 19.2112C7.9376 19.9782 9.9316 20.1892 11.8876 19.8222C15.9556 19.0592 19.2396 15.6792 19.8756 11.6022C20.3776 8.37517 19.3566 5.21317 17.0716 2.92817Z"
                    fill="#4338CA"
                  />
                </svg>
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={17}
                  viewBox="0 0 21 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.22289 2C4.35888 2 3.54888 2.334 2.94288 2.941C1.68489 4.201 1.68489 6.252 2.94388 7.514L10.0029 14.585L17.0629 7.514C18.3219 6.252 18.3219 4.201 17.0629 2.941C15.8509 1.726 13.7149 1.728 12.5029 2.941L10.7109 4.736C10.3349 5.113 9.67089 5.113 9.29488 4.736L7.50288 2.94C6.89688 2.334 6.08788 2 5.22289 2ZM10.0029 17C9.73788 17 9.48289 16.895 9.29589 16.706L1.52788 8.926C-0.508115 6.886 -0.508115 3.567 1.52788 1.527C2.51188 0.543 3.82388 0 5.22289 0C6.62189 0 7.93489 0.543 8.91788 1.527L10.0029 2.614L11.0879 1.528C12.0719 0.543 13.3839 0 14.7839 0C16.1819 0 17.4949 0.543 18.4779 1.527C20.5149 3.567 20.5149 6.886 18.4789 8.926L10.7109 16.707C10.5229 16.895 10.2689 17 10.0029 17Z"
                    fill="#4338CA"
                  />
                </svg>
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={19}
                  height={20}
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5211 13.9998L3.7011 12.8178C4.0791 12.4398 4.2871 11.9378 4.2871 11.4038V6.72683C4.2871 5.36983 4.8771 4.07283 5.9071 3.17083C6.9451 2.26083 8.2671 1.86083 9.6441 2.04183C11.9711 2.35083 13.7261 4.45483 13.7261 6.93683V11.4038C13.7261 11.9378 13.9341 12.4398 14.3111 12.8168L15.4921 13.9998H2.5211ZM11.0061 16.3408C11.0061 17.2398 10.0901 17.9998 9.0061 17.9998C7.9221 17.9998 7.0061 17.2398 7.0061 16.3408V15.9998H11.0061V16.3408ZM17.5271 13.2078L15.7261 11.4038V6.93683C15.7261 3.45583 13.2241 0.498833 9.9061 0.0598332C7.9841 -0.196167 6.0441 0.390833 4.5891 1.66683C3.1251 2.94883 2.2871 4.79283 2.2871 6.72683L2.2861 11.4038L0.485103 13.2078C0.0161031 13.6778 -0.122897 14.3768 0.131103 14.9898C0.386103 15.6038 0.979103 15.9998 1.6431 15.9998H5.0061V16.3408C5.0061 18.3588 6.8001 19.9998 9.0061 19.9998C11.2121 19.9998 13.0061 18.3588 13.0061 16.3408V15.9998H16.3691C17.0331 15.9998 17.6251 15.6038 17.8791 14.9908C18.1341 14.3768 17.9961 13.6768 17.5271 13.2078Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
