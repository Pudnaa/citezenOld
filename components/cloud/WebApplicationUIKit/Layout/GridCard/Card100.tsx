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
const Card100 = () => {
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

  // console.log("Card100 config", config);
  // console.log("Card100 readyDatasrc", readyDatasrc);
  // console.log("Card100 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card100 positionConfig", positionConfig);
  return (
    <>
      <div className="flex justify-center py-8 sm:px-6 px-4">
        <div className="max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800">
          <div className="absolute m-4 top-0 right-0">
            <div className="flex items-center justify-center flex-1 h-full bg-gradient-to-tl from-yellow-300 to-red-400 shadow-inner rounded">
              <p className="sm:text-lg text-base py-2 px-4 font-semibold leading-5 text-center text-white">
                Pets
              </p>
            </div>
          </div>
          <img src="https://i.ibb.co/7bkVjbt/image2.png" alt="protest" />
          <div className="py-6 px-6 flex md:items-center justify-between">
            <div>
              <p className="sm:text-lg text-base font-semibold leading-5 text-gray-800 dark:text-gray-100">
                Lorem ipsum dolor sit
              </p>
              <p className="sm:text-base text-sm leading-4 pt-3 text-gray-500 dark:text-gray-400">
                Sed ut perspiciatis unde…
              </p>
            </div>
            <svg
              className="w-8 md:w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71 60"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4306 7.05882C15.3812 7.05882 12.5224 8.23765 10.3835 10.38C5.94353 14.8271 5.94353 22.0659 10.3871 26.52L35.3012 51.4765L60.2188 26.52C64.6624 22.0659 64.6624 14.8271 60.2188 10.38C55.9412 6.09176 48.4024 6.09882 44.1247 10.38L37.8 16.7153C36.4729 18.0459 34.1294 18.0459 32.8024 16.7153L26.4776 10.3765C24.3388 8.23765 21.4835 7.05882 18.4306 7.05882ZM35.3012 60C34.3659 60 33.4659 59.6294 32.8059 58.9624L5.38941 31.5035C-1.79647 24.3035 -1.79647 12.5894 5.38941 5.38941C8.86235 1.91647 13.4929 0 18.4306 0C23.3682 0 28.0024 1.91647 31.4718 5.38941L35.3012 9.22588L39.1306 5.39294C42.6035 1.91647 47.2341 0 52.1753 0C57.1094 0 61.7435 1.91647 65.2129 5.38941C72.4024 12.5894 72.4024 24.3035 65.2165 31.5035L37.8 58.9659C37.1365 59.6294 36.24 60 35.3012 60Z"
                fill="#6B7280"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card100;
