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
export default function NewsletterIV() {
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
      // console.log("NewsletterIV config", config);
      // console.log("NewsletterIV datasrc", datasrc);
      // console.log("NewsletterIV otherattr", otherattr);
      // console.log("NewsletterIV positionConfig", positionConfig);
    return (
        <div className="xl:flex items-center  2xl:mx-auto 2xl:container py-16 sm:mx-20">
            <div className="lg:p-24 sm:p-9 md:p-16 p-4 2xl:w-8/12 xl:w-11/12 w-full  sm:border-2 sm:border-gray-800">
                <h1 className="text-4xl font-semibold leading-9 text-gray-800">Subscribe</h1>
                <p className="text-base leading-4 mt-2 text-gray-600">Subscribe to our newsletter to get news about latest trends</p>
                <div className="sm:flex items-center mt-10 xl:pb-0 pb-32">
                    <div className="flex items-center bg-gray-100 lg:w-96 w-full">
                        <div className="px-4 py-4">
                            <svg width={18} height={16} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6667 1.33333H2.33333C1.59695 1.33333 1 1.93028 1 2.66666V9.33333C1 10.0697 1.59695 10.6667 2.33333 10.6667H11.6667C12.403 10.6667 13 10.0697 13 9.33333V2.66666C13 1.93028 12.403 1.33333 11.6667 1.33333Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 2.66667L7 6.66667L13 2.66667" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input className="pl-2 w-full text-base font-medium leading-none text-gray-600 placeholder-gray-600 focus:outline-none bg-gray-100" placeholder="Enter your email address here" />
                    </div>
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-none text-white py-4 px-6 bg-gray-800 sm:ml-2 sm:w-auto w-full sm:mt-0 mt-4">Subscribe</button>
                </div>
            </div>
            <div className="w-1/2 xl:block absolute hidden  right-0 2xl:-mr-0 -mr-24 ">
                <img src="https://i.ibb.co/DwT275g/img-1.png" alt="tv-lounge" />
            </div>
            <div className="w-full xl:hidden  flex items-center justify-center xl:-mt-0 -mt-32 sm:px-0 px-4">
                <img src="https://i.ibb.co/DwT275g/img-1.png" alt="tv-lounge" className="sm:w-10/12 w-full" />
            </div>
        </div>
    );
}