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
export default function Cookies2() {
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
  // console.log("Cookies2 config", config);
  // console.log("Cookies2 datasrc", datasrc);
  // console.log("Cookies2 otherattr", otherattr);
  // console.log("Cookies2 positionConfig", positionConfig);
  return (
    <div>
      <div className="relative flex justify-center items-center ">
        <button
          // onclick="showMenu(true)"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black"
        >
          Open
        </button>
        <div
          id="menu"
          className=" w-full h-full bg-black bg-opacity-20 top-0  fixed sticky-0"
        >
          <div className="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center  ">
            <div className="blur w-96 md:w-8/12 lg:w-5/12 xl:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-6  xl:p-20">
              <div role="banner">
                {/* <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M77.9661 45.0266C77.3664 45.1147 76.7533 45.1613 76.1291 45.1613C70.3819 45.1613 65.5178 41.4017 63.8494 36.2089C63.5641 35.3213 62.8392 34.6378 61.9233 34.4634C52.3789 32.6462 45.1612 24.267 45.1612 14.1936C45.1612 9.96281 46.4384 6.03297 48.623 2.75969C49.1423 1.98141 48.7089 0.944844 47.7911 0.763125C45.2711 0.264062 42.6666 0 40 0C17.9086 0.00015625 0 17.9086 0 40C0 62.0913 17.9086 80 40 80C59.9098 80 76.373 65.5075 79.4694 46.4675C79.6098 45.6036 78.8319 44.8995 77.9661 45.0266Z"
                      fill="#F5B97D"
                    />
                    <path
                      d="M21.9344 32.2579C24.7847 32.2579 27.0953 29.9473 27.0953 27.097C27.0953 24.2467 24.7847 21.936 21.9344 21.936C19.0841 21.936 16.7734 24.2467 16.7734 27.097C16.7734 29.9473 19.0841 32.2579 21.9344 32.2579Z"
                      fill="#CD916E"
                    />
                    <path
                      d="M24.5155 56.7741C26.6533 56.7741 28.3864 55.041 28.3864 52.9032C28.3864 50.7653 26.6533 49.0322 24.5155 49.0322C22.3776 49.0322 20.6445 50.7653 20.6445 52.9032C20.6445 55.041 22.3776 56.7741 24.5155 56.7741Z"
                      fill="#CD916E"
                    />
                    <path
                      d="M63.2269 52.9035C62.7531 52.9035 62.2981 52.6427 62.0714 52.1902L60.7811 49.6096C60.4623 48.9719 60.7206 48.1971 61.3583 47.8782C61.9947 47.5607 62.7695 47.8177 63.0897 48.4554L64.38 51.036C64.6987 51.6737 64.4404 52.4485 63.8028 52.7674C63.6175 52.8594 63.4209 52.9035 63.2269 52.9035Z"
                      fill="#A06E50"
                    />
                    <path
                      d="M49.0342 45.1615C48.5605 45.1615 48.1055 44.9007 47.8787 44.4482C47.56 43.8105 47.8183 43.0357 48.4559 42.7168L51.0365 41.4265C51.6742 41.1102 52.4478 41.366 52.768 42.0037C53.0867 42.6413 52.8284 43.4162 52.1908 43.7351L49.6101 45.0254C49.4248 45.1174 49.2283 45.1615 49.0342 45.1615Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M14.1956 42.5807C13.7219 42.5807 13.2669 42.3199 13.0401 41.8674L11.7498 39.2868C11.4311 38.6491 11.6894 37.8743 12.327 37.5554C12.9634 37.2391 13.7383 37.4949 14.0584 38.1326L15.3487 40.7132C15.6675 41.3508 15.4092 42.1257 14.7716 42.4446C14.5862 42.5366 14.3897 42.5807 14.1956 42.5807Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M30.9717 65.8066C30.498 65.8066 30.043 65.5458 29.8162 65.0933C29.4975 64.4556 29.7558 63.6808 30.3934 63.3619L32.9741 62.0715C33.6117 61.754 34.3853 62.0111 34.7055 62.6487C35.0242 63.2864 34.7659 64.0612 34.1283 64.3801L31.5476 65.6705C31.3623 65.7625 31.1658 65.8066 30.9717 65.8066Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M33.5495 15.4841C33.2193 15.4841 32.8891 15.3582 32.6371 15.1062L31.3468 13.8159C30.8427 13.3118 30.8427 12.4952 31.3468 11.9913C31.8509 11.4873 32.6674 11.4873 33.1713 11.9913L34.4616 13.2815C34.9657 13.7855 34.9657 14.6021 34.4616 15.106C34.2098 15.3582 33.8796 15.4841 33.5495 15.4841Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M30.9674 45.1614C30.6373 45.1614 30.3071 45.0355 30.0551 44.7834L28.7648 43.4931C28.2607 42.989 28.2607 42.1725 28.7648 41.6686C29.2688 41.1645 30.0854 41.1645 30.5893 41.6686L31.8796 42.9589C32.3837 43.463 32.3837 44.2795 31.8796 44.7834C31.6276 45.0355 31.2976 45.1614 30.9674 45.1614Z"
                      fill="#A06E50"
                    />
                    <path
                      d="M45.1614 72.2581C44.4481 72.2581 43.8711 71.681 43.8711 70.9678V69.6775C43.8711 68.9642 44.4483 68.3872 45.1614 68.3872C45.8745 68.3872 46.4517 68.9644 46.4517 69.6775V70.9678C46.4517 71.681 45.8747 72.2581 45.1614 72.2581Z"
                      fill="#A06E50"
                    />
                    <path
                      d="M37.4193 23.2258C37.0891 23.2258 36.759 23.0999 36.507 22.8479C36.0029 22.3438 36.0029 21.5272 36.507 21.0233L37.7973 19.733C38.3013 19.229 39.1179 19.229 39.6218 19.733C40.1259 20.2371 40.1259 21.0537 39.6218 21.5576L38.3315 22.8479C38.0796 23.0997 37.7495 23.2258 37.4193 23.2258Z"
                      fill="#A06E50"
                    />
                    <path
                      d="M56.6145 10.4585L56.2444 12.6796C55.9402 14.5051 56.9706 16.2907 58.7034 16.9405L61.9808 18.1696C64.1456 18.9813 66.5347 17.7269 67.0953 15.484L68.2636 10.8112C68.9917 7.89881 66.2713 5.30194 63.3959 6.16459L59.3205 7.38725C57.9067 7.81116 56.8572 9.0024 56.6145 10.4585Z"
                      fill="#F5B97D"
                    />
                    <path
                      d="M69.6767 24.5161L68.1184 25.2954C66.8962 25.9065 66.3623 27.3643 66.9006 28.62L68.1544 31.5454C68.9134 33.3165 71.2753 33.6611 72.5089 32.1808L74.5258 29.7605C75.4714 28.6257 75.2734 26.9302 74.0917 26.044L72.3795 24.7597C71.5973 24.1733 70.5511 24.079 69.6767 24.5161Z"
                      fill="#F5B97D"
                    />
                    <path
                      d="M77.4166 19.3556C78.8418 19.3556 79.9972 18.2002 79.9972 16.775C79.9972 15.3497 78.8418 14.1943 77.4166 14.1943C75.9913 14.1943 74.8359 15.3497 74.8359 16.775C74.8359 18.2002 75.9913 19.3556 77.4166 19.3556Z"
                      fill="#F5B97D"
                    />
                    <path
                      d="M44.8387 75.1615C22.7473 75.1615 4.83875 57.2529 4.83875 35.1615C4.83875 25.3477 8.37359 16.3594 14.2384 9.3999C5.53156 16.7376 0 27.7226 0 40.0002C0 62.0915 17.9086 80.0002 40 80.0002C52.2853 80.0002 63.2578 74.4822 70.588 65.7827C63.6361 71.6377 54.6561 75.1615 44.8387 75.1615Z"
                      fill="#E3AA75"
                    />
                    <path
                      d="M62.5549 15.175C60.3905 14.3632 59.1033 12.1331 59.4833 9.85309L59.9245 7.20605L59.3206 7.3873C57.9069 7.81152 56.8574 9.00277 56.6145 10.4587L56.2444 12.6798C55.9402 14.5053 56.9706 16.2909 58.7035 16.9407L61.9808 18.1698C63.7189 18.8215 65.6003 18.1429 66.5652 16.6886L62.5549 15.175Z"
                      fill="#E3AA75"
                    />
                    <path
                      d="M78.872 17.9032C77.4469 17.9032 76.2914 16.7478 76.2914 15.3226C76.2914 14.9882 76.3556 14.6667 76.4714 14.3735C75.5147 14.7512 74.8398 15.6834 74.8398 16.7743C74.8398 18.1995 75.9953 19.3549 77.4205 19.3549C78.5114 19.3549 79.4434 18.6801 79.8211 17.7234C79.5278 17.839 79.2064 17.9032 78.872 17.9032Z"
                      fill="#E3AA75"
                    />
                    <path
                      d="M70.9076 29.8826L69.4876 26.5695C69.2209 25.9473 69.1987 25.2846 69.3603 24.6743L68.1184 25.2953C66.8962 25.9063 66.3623 27.3642 66.9006 28.6201L68.1544 31.5454C68.9134 33.3165 71.2753 33.6612 72.5087 32.181L73.01 31.5795C72.1233 31.3982 71.3125 30.8271 70.9076 29.8826Z"
                      fill="#E3AA75"
                    />
                    <path
                      d="M24.6767 29.5162C21.8262 29.5162 19.5155 27.2054 19.5155 24.355C19.5155 23.6411 19.6606 22.9612 19.9227 22.3428C18.0719 23.1271 16.7734 24.9601 16.7734 27.0968C16.7734 29.9473 19.0842 32.2581 21.9347 32.2581C24.0712 32.2581 25.9044 30.9596 26.6886 29.1089C26.0703 29.3709 25.3905 29.5162 24.6767 29.5162Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M26.5316 54.7581C24.3938 54.7581 22.6606 53.025 22.6606 50.8872C22.6606 50.3413 22.7762 49.8231 22.9803 49.3521C21.607 49.9467 20.6445 51.3114 20.6445 52.9033C20.6445 55.0411 22.3777 56.7742 24.5155 56.7742C26.1073 56.7742 27.472 55.8117 28.0667 54.4385C27.5956 54.6424 27.0775 54.7581 26.5316 54.7581Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M49.032 61.9356C51.8823 61.9356 54.193 59.625 54.193 56.7747C54.193 53.9244 51.8823 51.6138 49.032 51.6138C46.1817 51.6138 43.8711 53.9244 43.8711 56.7747C43.8711 59.625 46.1817 61.9356 49.032 61.9356Z"
                      fill="#CD916E"
                    />
                    <path
                      d="M51.7744 59.1935C48.9239 59.1935 46.6131 56.8827 46.6131 54.0322C46.6131 53.3183 46.7583 52.6385 47.0203 52.02C45.1695 52.8044 43.8711 54.6374 43.8711 56.7741C43.8711 59.6246 46.1819 61.9353 49.0323 61.9353C51.1689 61.9353 53.002 60.6369 53.7863 58.7861C53.1681 59.0481 52.4881 59.1935 51.7744 59.1935Z"
                      fill="#B67F5F"
                    />
                    <path
                      d="M38.6548 36.129C40.0801 36.129 41.2355 34.9736 41.2355 33.5484C41.2355 32.1232 40.0801 30.9678 38.6548 30.9678C37.2296 30.9678 36.0742 32.1232 36.0742 33.5484C36.0742 34.9736 37.2296 36.129 38.6548 36.129Z"
                      fill="#CD916E"
                    />
                    <path
                      d="M40.0258 34.7581C38.6005 34.7581 37.4452 33.6026 37.4452 32.1775C37.4452 31.8205 37.5178 31.4806 37.6487 31.1714C36.7234 31.5636 36.0742 32.4801 36.0742 33.5484C36.0742 34.9736 37.2295 36.129 38.6548 36.129C39.7231 36.129 40.6397 35.4798 41.0319 34.5545C40.7227 34.6855 40.3827 34.7581 40.0258 34.7581Z"
                      fill="#B67F5F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg> */}
              </div>
              <div className="mt">
                <p className="mt-6 w-48 md:w-54 lg:w-64 text-base leading-7 text-center text-gray-600">
                  This website uses cookies to ensure you get the best
                  experience on our website
                </p>
              </div>
              <button className="w-full md:w-auto mt-6 text-base leading-4 text-center text-white py-5 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                Ok, understood
              </button>
              <a
                href="javascript:void(0)"
                className="mt-4 text-base leading-4 font-semibold focus:outline-none hover:underline focus:underline text-center text-gray-800"
              >
                Learn More
              </a>
              <button
                // onclick="showMenu(true)"
                className=" absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                aria-label="close"
              >
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .blur {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(20px);
            }
            `}
      </style>
    </div>
  );
}