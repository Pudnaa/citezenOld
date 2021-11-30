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
const Banner6 = () => {
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
  // console.log("Banner6 config", config);
  console.log("Banner6 datasrc", datasrc);
  // console.log("Banner6 otherattr", otherattr);
  // console.log("Banner6 positionConfig", positionConfig);
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
              <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                <div className="flex flex-col justify-center md:w-1/2">
                  <AtomTitle
                    item={item.title}
                    customClassName="text-3xl lg:text-4xl font-semibold text-gray-800"
                  />
                  <AtomText
                    customClassName="text-base lg:text-xl text-gray-800 mt-2"
                    item={item.description}
                  />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                  <AtomImage
                    item={item.mainimage}
                    alt={item.title}
                    customClassName="w-auto"
                  />
                </div>
              </div>
              <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                <div className="flex flex-col justify-center">
                  <AtomTitle
                    customClassName="text-3xl lg:text-4xl font-semibold text-gray-800"
                    item={item.title1}
                  />
                  <AtomText
                    customClassName="text-base lg:text-xl text-gray-800"
                    item={item.description1}
                  />
                </div>
                <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                  <AtomImage
                    item={item.image}
                    customClassName="md:w-20 md:h-20 lg:w-full lg:h-full"
                    alt={item.title1}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner6;
