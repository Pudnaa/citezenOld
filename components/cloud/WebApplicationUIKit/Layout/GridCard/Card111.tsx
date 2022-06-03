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
const Card111 = () => {
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

  // console.log("Card111 config", config);
  // console.log("Card111 readyDatasrc", readyDatasrc);
  // console.log("Card111 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card111 positionConfig", positionConfig);
  return (
    <div className="py-12 flex justify-center">
      <div className="cursor-pointer flex flex-col mt-4 md:mt-0 ">
        <div className="flex justify-center items-center border rounded-tl rounded-tr border-gray-200 dark:border-gray-800">
          <svg
            width={295}
            height={256}
            viewBox="0 0 295 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.65"
              x={20}
              y={52}
              width={255}
              height={152}
              rx={4}
              fill="#1F2937"
            />
            <rect x={40} y={169} width={53} height={19} rx={2} fill="#D1D5DB" />
            <rect x={79} y={77} width={63} height={6} rx={2} fill="#D1D5DB" />
            <rect x={79} y={87} width={31} height={4} rx={2} fill="#D1D5DB" />
            <circle cx="55.5" cy="83.5" r="15.5" fill="#D1D5DB" />
            <rect x={40} y={113} width={190} height={5} rx={2} fill="#D1D5DB" />
            <rect x={40} y={131} width={190} height={5} rx={2} fill="#D1D5DB" />
            <rect x={40} y={149} width={120} height={5} rx={2} fill="#D1D5DB" />
          </svg>
        </div>
        <div className="flex justify-between w-full px-4 py-5  bg-gray-100 dark:bg-gray-800 rounded-bl-sm rounded-br-sm">
          <p className="text-xl leading-tight tracking-tight text-gray-900 dark:text-gray-50 capitalize">
            Grid card
          </p>
          <p className="text-xl leading-tight tracking-tight text-gray-900 dark:text-gray-50">
            12
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card111;
