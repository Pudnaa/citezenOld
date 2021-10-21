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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
export default function Cookies9() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;
  // console.log("Cookies9 config", config);
  // console.log("Cookies9 datasrc", datasrc);
  // console.log("Cookies9 otherattr", otherattr);
  // console.log("Cookies9 positionConfig", positionConfig);
  return (
    <div>
      <div className="relative flex justify-center items-center ">
        <button
          //   onclick="showMenu(true)"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black"
        >
          Open
        </button>
        <div
          id="menu"
          className=" w-full h-full bg-black bg-opacity-20 top-0  fixed sticky-0"
        >
          <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center  ">
            <div className=" w-96 md:w-10/12 lg:w-5/12 xl:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-6  xl:p-20">
              <div role="banner">
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M22.8242 9.07115L25.4521 10.0959C25.7095 10.1962 25.978 10.2462 26.2462 10.2462C26.5445 10.2462 26.8423 10.1843 27.1237 10.0608L31.6018 8.0954C32.1363 7.86078 32.5475 7.43203 32.7593 6.8884L34.2822 2.98178C34.5907 2.1904 34.4213 1.31303 33.8401 0.692277C33.2611 0.0741521 32.4007 -0.151723 31.5942 0.102902C30.6938 0.387277 29.797 0.724902 28.9283 1.10615C26.4615 2.18878 24.1921 3.62928 22.1835 5.38715C21.6017 5.89628 21.334 6.65428 21.4672 7.41465C21.5998 8.17228 22.1072 8.79153 22.8242 9.07115ZM23.4182 6.79815C25.2828 5.16628 27.3901 3.8289 29.6817 2.82303C30.489 2.46878 31.3225 2.15503 32.159 1.89078C32.1943 1.87965 32.2271 1.87478 32.2573 1.87478C32.3548 1.87478 32.4256 1.92503 32.4713 1.9739C32.5217 2.02778 32.5971 2.1419 32.5352 2.3009L31.0122 6.20753C30.9822 6.28453 30.924 6.34528 30.8482 6.37853L26.37 8.34403C26.2943 8.37715 26.2101 8.3789 26.1331 8.34903L23.5055 7.3244C23.3648 7.26953 23.3251 7.15465 23.3138 7.09103C23.3025 7.02565 23.3008 6.9009 23.4182 6.79815Z"
                      fill="black"
                    />
                    <path
                      d="M3.79684 36.6641C3.82209 36.6661 3.84722 36.667 3.87222 36.667C4.35622 36.667 4.76672 36.2946 4.80572 35.8039C5.5121 26.9242 11.0144 19.1471 19.1654 15.5076C19.2784 15.4576 19.4149 15.4842 19.5053 15.5747L22.2924 18.3619C22.7051 18.7745 23.2536 19.0016 23.8372 19.0016H28.7279C28.8105 19.0016 28.8882 19.0339 28.9467 19.0925L33.1061 23.2518C33.5188 23.6644 34.0674 23.8917 34.652 23.8917L39.3924 23.8862H39.3928C39.5012 23.8862 39.6032 23.944 39.6587 24.0372L40.8808 26.0855C41.2484 26.7015 41.8952 27.098 42.6107 27.1458L45.1875 27.3184C45.7051 27.3544 46.151 26.962 46.1856 26.4457C46.2202 25.929 45.8295 25.4823 45.3128 25.4477L42.7359 25.275C42.6346 25.2683 42.5429 25.212 42.4908 25.1248L41.2687 23.0765C40.8766 22.4193 40.1578 22.0113 39.3926 22.0113C39.3918 22.0113 39.3909 22.0113 39.3902 22.0113L34.6508 22.0168C34.5681 22.0168 34.4904 21.9845 34.4319 21.9259L30.2725 17.7666C29.8599 17.354 29.3112 17.1267 28.7277 17.1267H23.8371C23.7543 17.1267 23.6766 17.0945 23.6182 17.036L20.8311 14.2488C20.1951 13.613 19.2186 13.4306 18.4011 13.7955C9.623 17.7149 3.69747 26.091 2.93659 35.6551C2.89559 36.1712 3.28071 36.623 3.79684 36.6641Z"
                      fill="black"
                    />
                    <path
                      d="M53.0814 27.1339C52.7524 26.3926 52.0434 25.8983 51.2311 25.8439L49.4293 25.7231C48.9114 25.686 48.4658 26.0793 48.4311 26.5959C48.3965 27.1125 48.7873 27.5593 49.3039 27.5939L51.1058 27.7146C51.2215 27.7224 51.3219 27.7913 51.3676 27.8944C52.7492 31.0074 53.4497 34.3279 53.4497 37.7633C53.4497 43.5427 51.4125 49.0899 47.6979 53.4829L46.6779 52.2329C46.6779 52.2329 46.6779 52.2329 46.6777 52.2329C46.1554 51.593 45.3292 51.3034 44.522 51.4777L41.7691 52.0712C40.8256 52.2747 40.1351 53.0574 40.0508 54.0192L39.7736 57.1928C39.7045 57.9837 40.066 58.7364 40.7068 59.1798C37.1544 61.1101 33.1687 62.1247 29.0885 62.1247C22.9126 62.1247 17.03 59.8273 12.5244 55.6557C8.04327 51.5068 5.30338 45.8676 4.80951 39.7773C4.76763 39.2613 4.31663 38.8763 3.79925 38.9187C3.28325 38.9606 2.89875 39.4128 2.94062 39.929C3.47262 46.4889 6.42377 52.5627 11.2505 57.0317C16.1038 61.5252 22.4387 64 29.0885 63.9999C33.8904 63.9999 38.5722 62.6951 42.6561 60.2231L43.954 60.9043C44.2824 61.0767 44.6326 61.1587 44.977 61.1587C45.742 61.1587 46.478 60.754 46.88 60.035L48.6604 56.8501C48.9745 56.2883 49.0206 55.6391 48.8156 55.0588C53.016 50.2718 55.3247 44.149 55.3247 37.7636C55.3247 34.0644 54.5699 30.488 53.0814 27.1339ZM47.0237 55.9352L45.2434 59.1199C45.16 59.269 44.9765 59.3232 44.8254 59.2442L41.8076 57.6603C41.6957 57.6016 41.6305 57.4822 41.6415 57.3562L41.9187 54.1825C41.9307 54.045 42.0295 53.9333 42.1642 53.9042L44.9171 53.3107C44.9392 53.3059 44.9615 53.3035 44.9836 53.3035C45.0762 53.3035 45.1649 53.3447 45.2251 53.4185L46.9931 55.5851C47.0746 55.6852 47.0867 55.8224 47.0237 55.9352Z"
                      fill="black"
                    />
                    <path
                      d="M41.5951 12.6993C42.0078 13.112 42.5564 13.3392 43.1399 13.3392H48.0666C48.6501 13.3392 49.1989 13.112 49.6114 12.6993L53.118 9.19258C53.5734 8.7372 53.8045 8.1077 53.752 7.4657C53.6999 6.8287 53.3732 6.25033 52.8556 5.87908C51.8687 5.1712 50.8197 4.52483 49.738 3.95795C49.2794 3.71733 48.7129 3.89445 48.4724 4.35308C48.232 4.8117 48.409 5.37833 48.8676 5.61858C49.8725 6.1452 50.8466 6.74558 51.7629 7.40258C51.8531 7.46745 51.8782 7.55583 51.8834 7.61845C51.8877 7.67283 51.8819 7.77733 51.7922 7.8667L48.2854 11.3735C48.2277 11.4311 48.148 11.4642 48.0666 11.4642H43.1399C43.0572 11.4642 42.9795 11.432 42.921 11.3733L39.278 7.73033C39.1991 7.65145 39.1874 7.55945 39.1874 7.51145C39.1874 7.46358 39.1991 7.37158 39.2781 7.2927L42.9701 3.5997C43.046 3.52358 43.1566 3.49108 43.2591 3.51608C43.9012 3.6692 44.558 3.85595 45.2111 4.07108C45.7029 4.2332 46.2329 3.96583 46.395 3.4742C46.557 2.98233 46.2899 2.45245 45.7981 2.29033C45.0951 2.05858 44.3872 1.85733 43.6942 1.6922C42.9629 1.5177 42.1776 1.7407 41.6444 2.27383L37.9523 5.96695C37.5396 6.37958 37.3124 6.92808 37.3125 7.5117C37.3125 8.09508 37.5398 8.6437 37.9524 9.0562L41.5951 12.6993Z"
                      fill="black"
                    />
                    <path
                      d="M60.7444 15.0036C60.564 13.8641 59.5237 13.0607 58.3732 13.1713L53.6216 13.6356C52.6246 13.7329 51.8237 14.4928 51.674 15.4833L51.3566 17.5824C51.2494 18.2917 51.4972 19.0086 52.0197 19.5002L57.1199 24.2983C57.5329 24.6867 58.0686 24.8929 58.6164 24.8929C58.857 24.8929 59.0999 24.8532 59.3356 24.7714C60.1035 24.5057 60.6555 23.8427 60.7761 23.0411C61.1775 20.3758 61.1667 17.6716 60.7444 15.0036ZM58.9221 22.7619C58.9 22.9088 58.8012 22.9723 58.7224 22.9994C58.6551 23.0227 58.5244 23.0451 58.4047 22.9324L53.3046 18.1344C53.2306 18.0647 53.1954 17.9631 53.2106 17.8626L53.528 15.7634C53.5492 15.6231 53.6627 15.5154 53.804 15.5016L58.5555 15.0373C58.5657 15.0362 58.576 15.0357 58.586 15.0357C58.737 15.0357 58.8685 15.1453 58.8925 15.2966C59.2849 17.7749 59.2947 20.2867 58.9221 22.7619Z"
                      fill="black"
                    />
                    <path
                      d="M33.6835 14.3016L34.3788 16.504C34.5544 17.0605 34.9361 17.5153 35.4539 17.7846C35.7698 17.9488 36.1133 18.0321 36.4595 18.0321C36.6806 18.0321 36.9029 17.9982 37.1198 17.9298L37.6068 17.7761C38.1631 17.6005 38.6179 17.2186 38.8871 16.7008C39.1564 16.1832 39.208 15.5917 39.0324 15.0352L38.3371 12.8326C37.9746 11.6841 36.745 11.045 35.5964 11.407L35.1091 11.5606C33.9606 11.9235 33.321 13.153 33.6835 14.3016ZM35.6735 13.3487L36.1606 13.1951C36.1915 13.1853 36.2229 13.1807 36.2536 13.1807C36.3851 13.1807 36.5074 13.2652 36.549 13.3971L37.2443 15.5997C37.2779 15.7061 37.2458 15.7932 37.2236 15.8357C37.2015 15.8782 37.1485 15.9545 37.0421 15.9881C37.0421 15.9881 37.0421 15.9881 37.042 15.9881L36.5551 16.1418C36.4486 16.1755 36.3615 16.1435 36.319 16.1212C36.2765 16.0991 36.2003 16.0462 36.1666 15.9397L35.4714 13.7373C35.4201 13.5745 35.5109 13.4001 35.6735 13.3487Z"
                      fill="black"
                    />
                    <path
                      d="M17.787 36.5079C17.8621 36.5155 17.9369 36.5193 18.0111 36.5193C18.75 36.5193 19.4384 36.1484 19.8455 35.5176L21.3725 33.1514C21.8959 32.3403 21.8305 31.2985 21.21 30.559L19.162 28.1189C18.5934 27.4414 17.6804 27.1735 16.8356 27.4366L13.5818 28.4505C12.4411 28.8059 11.8024 29.9846 12.1276 31.1343L13.1206 34.6451C13.3665 35.5146 14.1063 36.1353 15.0051 36.2261L17.787 36.5079ZM14.9248 34.1348L13.9318 30.6239C13.8853 30.4598 13.9765 30.2913 14.1395 30.2405L17.3934 29.2266C17.4243 29.2171 17.4556 29.2125 17.4868 29.2125C17.5775 29.2125 17.6654 29.252 17.7259 29.3243L19.7739 31.7644C19.8625 31.8701 19.8719 32.0189 19.7971 32.1349L18.2703 34.501C18.2063 34.6 18.0939 34.6543 17.9763 34.6425L15.194 34.3608C15.0655 34.3476 14.9599 34.2589 14.9248 34.1348Z"
                      fill="black"
                    />
                    <path
                      d="M18.0708 50.9152C18.3636 51.8551 19.2154 52.4541 20.1491 52.4541C20.3488 52.4541 20.5521 52.4266 20.7545 52.3694L24.2655 51.3765C25.1349 51.1305 25.7554 50.3907 25.8464 49.492L26.1281 46.7098C26.1281 46.7098 26.1281 46.7098 26.1281 46.7097C26.2114 45.888 25.8319 45.0992 25.1379 44.6513L22.7718 43.1245C21.9608 42.6011 20.9189 42.6663 20.1793 43.2868L17.739 45.335C17.0614 45.9036 16.7936 46.8167 17.0568 47.6613L18.0708 50.9152ZM18.9444 46.7711L21.3846 44.723C21.4428 44.6742 21.5139 44.6495 21.5854 44.6495C21.644 44.6495 21.7028 44.6661 21.755 44.6997L24.1211 46.2266C24.2203 46.2906 24.2745 46.4032 24.2626 46.5207L23.9809 49.3028C23.9679 49.4312 23.8793 49.537 23.755 49.5721L20.244 50.565C20.08 50.6113 19.9115 50.5203 19.8608 50.3572L18.8469 47.1033C18.8094 46.9828 18.8476 46.8523 18.9444 46.7711Z"
                      fill="black"
                    />
                    <path
                      d="M42.5563 39.9012L42.8848 36.6568C42.976 35.7569 42.5606 34.8932 41.8005 34.4027L39.041 32.6219C38.1528 32.0487 37.012 32.12 36.2022 32.7998L33.3562 35.1883C32.6142 35.8109 32.3211 36.8108 32.6092 37.7357L33.7917 41.5305C34.1123 42.5594 35.0451 43.2154 36.0677 43.2154C36.2862 43.2154 36.5088 43.1854 36.7305 43.1228L40.8251 41.9647C41.7771 41.6955 42.4566 40.8854 42.5563 39.9012ZM40.3148 40.1605L36.2203 41.3187C35.9468 41.3957 35.6665 41.2439 35.582 40.9727L34.3995 37.1778C34.337 36.977 34.4006 36.7598 34.5617 36.6245L37.4078 34.2359C37.5045 34.1549 37.623 34.1135 37.742 34.1135C37.8395 34.1135 37.9375 34.1413 38.0245 34.1973L40.784 35.978C40.9491 36.0847 41.0393 36.2723 41.0195 36.4675V36.4677L40.691 39.7122C40.6692 39.926 40.5215 40.102 40.3148 40.1605Z"
                      fill="black"
                    />
                    <path
                      d="M36.918 47.0283C36.4002 47.0283 35.9805 47.4479 35.9805 47.9658C35.9805 48.4837 36.4002 48.9033 36.918 48.9033H38.2505C38.7682 48.9033 39.188 48.4837 39.188 47.9658C39.188 47.4479 38.7682 47.0283 38.2505 47.0283H36.918Z"
                      fill="black"
                    />
                    <path
                      d="M28.2539 51.7725C27.7362 51.7725 27.3164 52.1921 27.3164 52.71V54.0425C27.3164 54.5603 27.7362 54.9799 28.2539 54.9799C28.7717 54.9799 29.1914 54.5603 29.1914 54.0425V52.71C29.1914 52.1921 28.7718 51.7725 28.2539 51.7725Z"
                      fill="black"
                    />
                    <path
                      d="M24.8559 26.4707C24.8559 25.9528 24.4362 25.5332 23.9184 25.5332H22.5859C22.0682 25.5332 21.6484 25.9528 21.6484 26.4707C21.6484 26.9886 22.0682 27.4082 22.5859 27.4082H23.9184C24.4362 27.4082 24.8559 26.9884 24.8559 26.4707Z"
                      fill="black"
                    />
                    <path
                      d="M18.0848 22.8414L19.027 21.8991C19.3932 21.533 19.3932 20.9394 19.027 20.5734C18.6608 20.2074 18.0674 20.2072 17.7012 20.5735L16.7589 21.5157C16.3928 21.8819 16.3929 22.4755 16.7589 22.8415C16.942 23.0245 17.1819 23.116 17.4218 23.116C17.6617 23.116 17.9017 23.0245 18.0848 22.8414Z"
                      fill="black"
                    />
                    <path
                      d="M46.8242 36.7891C46.3065 36.7891 45.8867 37.2087 45.8867 37.7266C45.8867 38.2444 46.3065 38.6641 46.8242 38.6641H46.8371C47.3548 38.6641 47.7746 38.2444 47.7746 37.7266C47.7746 37.2087 47.3548 36.7891 46.8371 36.7891H46.8242Z"
                      fill="black"
                    />
                    <path
                      d="M22.1328 36.2646C21.6151 36.2646 21.1953 36.6843 21.1953 37.2021C21.1953 37.72 21.6151 38.1396 22.1328 38.1396H22.1457C22.6634 38.1396 23.0832 37.72 23.0832 37.2021C23.0832 36.6843 22.6634 36.2646 22.1457 36.2646H22.1328Z"
                      fill="black"
                    />
                    <path
                      d="M42.5078 48.5508H42.5207C43.0384 48.5508 43.4582 48.1312 43.4582 47.6133C43.4582 47.0954 43.0384 46.6758 42.5207 46.6758H42.5078C41.9901 46.6758 41.5703 47.0954 41.5703 47.6133C41.5703 48.1312 41.9899 48.5508 42.5078 48.5508Z"
                      fill="black"
                    />
                    <path
                      d="M12.9855 43.2295H12.9727C12.4549 43.2295 12.0352 43.6491 12.0352 44.167C12.0352 44.6849 12.4549 45.1045 12.9727 45.1045H12.9855C13.5033 45.1045 13.923 44.6849 13.923 44.167C13.923 43.6491 13.5033 43.2295 12.9855 43.2295Z"
                      fill="black"
                    />
                    <path
                      d="M31.2383 30.001C30.7205 30.001 30.3008 30.4206 30.3008 30.9385C30.3008 31.4563 30.7205 31.876 31.2383 31.876H31.2512C31.7689 31.876 32.1887 31.4563 32.1887 30.9385C32.1887 30.4206 31.7689 30.001 31.2512 30.001H31.2383Z"
                      fill="black"
                    />
                    <path
                      d="M10.4062 42.0684C9.8885 42.0684 9.46875 42.488 9.46875 43.0059C9.46875 43.5237 9.8885 43.9434 10.4062 43.9434H10.419C10.9367 43.9434 11.3565 43.5237 11.3565 43.0059C11.3565 42.488 10.9367 42.0684 10.419 42.0684H10.4062Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={64} height={64} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-10">
                <h1 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-center text-gray-800">
                  Allow Cookies
                </h1>
              </div>
              <div className="mt">
                <p className="mt-4 w-full sm:w-80 text-base leading-7 text-center text-gray-600">
                  This website uses cookies to ensure you get the best
                  experience on our website
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="mt-8 text-base leading-4 font-normal focus:outline-none hover:border-gray-800 border-b border-transparent focus:border-gray-800 text-center text-gray-800"
              >
                Cookie Policies
              </a>
              <button className="w-full md:w-auto mt-8 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                Accept Cookies
              </button>
              <button
                // onclick="showMenu(true)"
                className=" absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                aria-label="close"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}