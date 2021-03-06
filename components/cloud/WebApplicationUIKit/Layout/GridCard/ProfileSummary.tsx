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

function ProfileSummary() {
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

  // console.log("ProfileSummary config", config);
  // console.log("ProfileSummary readyDatasrc", readyDatasrc);
  // console.log("ProfileSummary widgetnemgooReady", widgetnemgooReady);
  // console.log("ProfileSummary positionConfig", positionConfig);
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
                alt="profile"
              />
              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
                Ricardo Boveta
              </p>
            </div>
          </div>
          <div className="flex items-center mt-7">
            <div>
              <p className="text-xs text-gray-300">Products</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
                28
              </p>
            </div>
            <div className="ml-12">
              <p className="text-xs text-gray-300">Revenue</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
                $2890
              </p>
            </div>
            <div className="ml-12">
              <p className="text-xs text-gray-300">Average</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
                $169
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSummary;
