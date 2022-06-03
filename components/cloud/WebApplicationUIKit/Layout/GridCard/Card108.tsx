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
const Card108 = () => {
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

  // console.log("Card108 config", config);
  // console.log("Card108 readyDatasrc", readyDatasrc);
  // console.log("Card108 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card108 positionConfig", positionConfig);
  return (
    <>
      <div className="max-w-sm px-6 py-6 rounded shadow bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="w-20  h-20 ">
            <div className="rounded-full w-full h-full bg-gray-100 flex items-center justify-center">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={31}
                viewBox="0 0 45 31"
                fill="none"
              >
                <path
                  d="M22.2228 2.71902H25.007V0.367257H22.2228V2.71902Z"
                  fill="#475293"
                />
                <path
                  d="M25.007 2.71902H27.7913V0.367257H25.007V2.71902Z"
                  fill="#FF3565"
                />
                <path
                  d="M22.2228 5.07079H25.007V2.71904H22.2228V5.07079Z"
                  fill="#5C5C68"
                />
                <path
                  d="M25.007 5.07079H27.7913V2.71904H25.007V5.07079Z"
                  fill="#DCE7E6"
                />
                <path
                  d="M39.2942 12.7748L45 5.07079H38.3358L34.319 11.3003V0.367257H28.791V20.8516H34.319V17.5039L35.3938 16.0606L37.943 20.8516H44.7304L39.2942 12.7748Z"
                  fill="#5C5C68"
                />
                <path
                  d="M22.2633 15.1701C22.2603 15.1731 22.2569 15.1765 22.2543 15.1799C22.2309 16.4065 21.2333 17.3952 20.0007 17.3952C18.7536 17.3952 17.7427 16.3843 17.7427 15.1372V0.367257H12.2515V15.6269C12.2515 19.3055 15.6405 20.849 18.1996 20.849C20.8102 20.849 21.5127 20.2387 22.2633 19.5721V20.8516H27.7913V6.01806H22.2633V15.1701Z"
                  fill="#D81767"
                />
                <path
                  d="M22.2228 15.4439C22.0722 16.5438 21.1424 17.3952 20.0007 17.3952C18.7536 17.3952 17.7427 16.3843 17.7427 15.1372V0.367257H12.2515V15.6269C12.2515 19.3055 15.6405 20.849 18.1996 20.849C20.7633 20.849 21.4871 20.26 22.2228 19.6075V15.4439Z"
                  fill="#5C5C68"
                />
                <path
                  d="M22.2633 20.8516H27.7912V20.2651H22.2633V20.8516Z"
                  fill="#D81767"
                />
                <path
                  d="M22.2228 20.8516H27.7912V6.01806H22.2228V20.8516Z"
                  fill="#FF3565"
                />
                <path
                  d="M0 0.367257V5.47938H5.49725V20.8516H11.3468V5.48662H12.2514V5.77239H17.7427V0.367257H0Z"
                  fill="#5C5C68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.69181 26.0533C8.69181 26.3399 8.4598 26.5719 8.17316 26.5719C7.8934 26.5719 7.66135 26.3399 7.66135 26.0533C7.66135 25.7666 7.8934 25.5415 8.17316 25.5415C8.4598 25.5415 8.69181 25.7666 8.69181 26.0533ZM2.47718 26.5241V30.2228H1.50133V26.5241H0.17063V25.6711H3.80106V26.5241H2.47718ZM6.0042 29.7997C5.74487 30.1273 5.39001 30.3047 4.98739 30.3047C4.16166 30.3047 3.52703 29.6769 3.52703 28.5713C3.52703 27.5 4.14801 26.8449 4.98739 26.8449C5.37635 26.8449 5.73806 27.0087 6.0042 27.3499V26.9267H6.87767V30.2228H6.0042V29.7997ZM5.26034 29.5335C4.7622 29.5335 4.42099 29.1446 4.42099 28.5713C4.42099 28.0049 4.7622 27.616 5.26034 27.616C5.54695 27.616 5.86087 27.7798 6.0042 27.9981V29.1583C5.86087 29.3766 5.54695 29.5335 5.26034 29.5335ZM8.60989 30.2228V26.9268H7.74323V30.2228H8.60989ZM11.1269 30.0931C10.9972 30.2091 10.7584 30.3047 10.4036 30.3047C9.79618 30.3047 9.47545 29.9908 9.47545 29.3971V25.6711H10.3421V29.1651C10.3421 29.3766 10.4513 29.5336 10.6424 29.5336C10.772 29.5336 10.8949 29.4858 10.9426 29.4312L11.1269 30.0931ZM13.0161 30.2228L13.7122 27.9777L14.4082 30.2228H15.3363L16.3395 26.9268H15.4319L14.8177 29.1446L14.0943 26.9268H13.3232L12.5998 29.1446L11.9857 26.9268H11.0849L12.088 30.2228H13.0161ZM17.7237 26.0533C17.7237 26.3399 17.4917 26.5719 17.2051 26.5719C16.9253 26.5719 16.6932 26.3399 16.6932 26.0533C16.6932 25.7666 16.9253 25.5415 17.2051 25.5415C17.4917 25.5415 17.7237 25.7666 17.7237 26.0533ZM17.6418 30.2228V26.9268H16.7751V30.2228H17.6418ZM19.374 27.9981V30.2228H18.5073V26.9267H19.374V27.3499C19.5856 27.1042 19.995 26.8449 20.5273 26.8449C21.2575 26.8449 21.6055 27.2543 21.6055 27.8958V30.2228H20.732V28.2301C20.732 27.7729 20.4932 27.616 20.1247 27.616C19.7835 27.616 19.5241 27.8071 19.374 27.9981ZM23.7131 30.3047C24.1157 30.3047 24.4706 30.1273 24.7298 29.7997V30.2228H25.6034V25.6711H24.7298V27.3499C24.4706 27.0087 24.102 26.8449 23.7131 26.8449C22.8737 26.8449 22.2527 27.5 22.2527 28.5714C22.2527 29.6769 22.8874 30.3047 23.7131 30.3047ZM23.1467 28.5713C23.1467 29.1446 23.4879 29.5335 23.986 29.5335C24.2726 29.5335 24.5866 29.3766 24.7298 29.1583V27.9913C24.5866 27.7729 24.2726 27.616 23.986 27.616C23.4879 27.616 23.1467 28.0049 23.1467 28.5713ZM30.303 30.3047C31.6883 30.3047 32.3571 29.5267 32.3571 28.4008V25.6711H31.3675V28.3735C31.3675 29.0081 31.0059 29.4449 30.303 29.4449C29.6001 29.4449 29.2316 29.0081 29.2316 28.3735V25.6711H28.2489V28.4008C28.2489 29.5267 28.9177 30.3047 30.303 30.3047ZM34.2326 25.6711V30.2228H33.2636V25.6711H34.2326ZM37.7448 30.2228V29.3766L38.1406 28.9535L39.0141 30.2228H40.099L38.7548 28.4213L40.0584 26.9267H38.9937L37.7448 28.3939V25.6711H36.8782V30.2228H37.7448ZM41.4904 26.0533C41.4904 26.3399 41.2582 26.5719 40.9715 26.5719C40.6919 26.5719 40.4598 26.3399 40.4598 26.0533C40.4598 25.7666 40.6919 25.5415 40.9715 25.5415C41.2582 25.5415 41.4904 25.7666 41.4904 26.0533ZM41.4084 30.2228V26.9268H40.5418V30.2228H41.4084ZM44.1028 30.0931C43.973 30.2091 43.7412 30.3047 43.3792 30.3047C42.7719 30.3047 42.4513 29.9908 42.4513 29.3971V27.6842H41.9054V26.9268H42.4513V26.026H43.3179V26.9268H43.9869V27.6842H43.3179V29.1651C43.3179 29.3766 43.427 29.5336 43.6181 29.5336C43.748 29.5336 43.8706 29.4858 43.9184 29.4312L44.1028 30.0931Z"
                  fill="#5C5C68"
                />
              </svg>
            </div>
          </div>
          <p className="text-base md:text-lg font-semibold leading-4 text-right text-gray-500 dark:text-gray-400">
            3 days ago
          </p>
        </div>
        <p className="text-base md:text-lg font-bold leading-5 text-gray-800 dark:text-gray-100 mt-4">
          Creative Personnel (Graphics Design / Digital Media)
        </p>
        <div>
          <div className="flex items-center mt-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 flex items-center justify-center">
              <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                Full Time
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 flex items-center justify-center ml-4">
              <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                2 years
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-base md:text-lg font-semibold leading-5 text-center text-indigo-700">
            $18-22/hr
          </p>
          <div className="flex items-center">
            <svg
              className="w-4 sm:w-6 md:w-auto"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 9C10.7595 9 9.75 10.0095 9.75 11.25C9.75 12.4905 10.7595 13.5 12 13.5C13.2405 13.5 14.25 12.4905 14.25 11.25C14.25 10.0095 13.2405 9 12 9ZM12 16.5C9.105 16.5 6.75 14.145 6.75 11.25C6.75 8.355 9.105 6 12 6C14.895 6 17.25 8.355 17.25 11.25C17.25 14.145 14.895 16.5 12 16.5ZM12 0C5.3835 0 0 5.331 0 11.8845C0 20.0955 10.5735 29.253 11.0235 29.6385C11.3055 29.88 11.652 30 12 30C12.348 30 12.6945 29.88 12.9765 29.6385C13.4265 29.253 24 20.0955 24 11.8845C24 5.331 18.6165 0 12 0Z"
                fill="#1F2937"
              />
            </svg>
            <p className="text-sm md:text-base leading-4 text-gray-800 dark:text-gray-100 ml-1">
              Texas, USA
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card108;
