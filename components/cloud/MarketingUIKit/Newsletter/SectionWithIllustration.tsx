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
function SectionWithIllustration() {
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

  // console.log("SectionWithIllustration config", config);
  // console.log("SectionWithIllustration readyDatasrc", readyDatasrc);
  // console.log("SectionWithIllustration widgetnemgooReady", widgetnemgooReady);
  // console.log("SectionWithIllustration positionConfig", positionConfig);
  return (
    <div className="pt-16">
      <div className="w-full bg-gray-900 sm:pt-32 sm:pb-32 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="xl:flex lg:flex md:flex flex-wrap xl:justify-between lg:justify-around sm:w-full w-11/12 mx-auto sm:mx-0 xl:items-center">
            <div className="xl:w-1/2 lg:w-1/2 w-11/12 mx-auto xl:mx-0 lg:mx-0">
              <h1 className="xl:text-5xl text-3xl text-white sm:pb-5 pb-6 text-center sm:text-left">
                Sign Up for Product Updates and News
              </h1>
              <p className="text-xl text-white sm:pb-10 pb-16 text-center sm:text-left">
                You can subscribe to our newsletter to get to know about our
                latest products and exciting offers.
              </p>
              <div className="bg-white px-4 flex justify-between pt-2 pb-2 items-center rounded">
                <input
                  type="text"
                  placeholder="Your Email"
                  id="email"
                  aria-label="email"
                  className="py-2 text-base bg-transparent focus:outline-none w-11/12"
                />
                <button className="focus:outline-none bg-indigo-700 w-32 h-10 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="xl:w-5/12 lg:w-5/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 lg:pt-0 pt-6">
              <div className="flex items-end justify-center h-full">
                <img
                  src="https://cdn.tuk.dev/assets/newsletter.png"
                  className="mt-10 sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWithIllustration;
