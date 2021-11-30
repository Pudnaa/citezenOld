import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import {
  AtomList,
  AtomTitleV2,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomLink,
  AtomImageV2,
} from "@components/common/Atom";
type PropsType = {
  item: any;
  position: any;
  type: any;
};

const CartItem: FC<PropsType> = ({ item, position, type }) => {
  // console.log("Card101", position);

  return (
    <div>
      <div className=" w-full relative rounded bg-white dark:bg-gray-800">
        <AtomImageV2
          item={item?.position2}
          customClassName="h-56 w-full rounded object-cover object-center"
        />

        <div className="py-4 px-6">
          {renderPositionType(item, "position40", position) && (
            <p className="sm:text-base text-sm text-gray-500">
              {renderPositionType(item, "position40", position)}
            </p>
          )}

          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customClassName="text-base font-semibold leading-6 text-gray-800"
            customProps={{
              truncateRow: 2,
            }}
          />
          <RenderAtom
            item={item?.position3}
            defaultAtom="text"
            customClassName="text-xs font-medium leading-5 text-gray-400"
            customProps={{
              truncateRow: 5,
            }}
          />
        </div>
        <div className="border-t-2 mt-4 border-gray-200">
          <div className="px-6 py-4 flex">
            <div className="w-1/2 items-center">
              <p className="text-sm leading-4 text-green-500 cursor-pointer flex items-center text-center pt-1.5">
                {renderPositionType(item, "position45", position)}
              </p>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="w-1/2 flex items-center justify-center">
                <AtomIcon
                  // item={item.icon}
                  item="far fa-commenting"
                  checked={false}
                  hoverSolid={true}
                  customClassName="text-lg"
                />
                <p className="text-sm leading-4 text-gray-400 ml-2">
                  {renderPositionType(item, "position81", position)}
                </p>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <AtomIcon
                  // item={item.icon}
                  item="far fa-heart"
                  checked={false}
                  hoverSolid={true}
                  customClassName="text-lg"
                />
                <p className="text-sm leading-4 text-gray-400 ml-2">
                  {renderPositionType(item, "position82", position)}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {/* <div className="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 38 36" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.47344 15.158C9.47344 14.1121 10.3223 13.2633 11.3682 13.2633C12.4141 13.2633 13.2629 14.1121 13.2629 15.158C13.2629 16.2039 12.4141 17.0528 11.3682 17.0528C10.3223 17.0528 9.47344 16.2039 9.47344 15.158ZM18.9465 13.2634C17.9006 13.2634 17.0518 14.1122 17.0518 15.1581C17.0518 16.204 17.9006 17.0529 18.9465 17.0529C19.9924 17.0529 20.8412 16.204 20.8412 15.1581C20.8412 14.1122 19.9924 13.2634 18.9465 13.2634ZM26.5262 13.2634C25.4803 13.2634 24.6314 14.1122 24.6314 15.1581C24.6314 16.204 25.4803 17.0529 26.5262 17.0529C27.5721 17.0529 28.4209 16.204 28.4209 15.1581C28.4209 14.1122 27.5721 13.2634 26.5262 13.2634ZM34.1056 24.6314C34.1056 25.6754 33.2549 26.5261 32.2109 26.5261H12.4185C11.3896 26.5261 10.3778 26.8065 9.493 27.337L3.78984 30.7589V5.68399C3.78984 4.63999 4.64058 3.78926 5.68458 3.78926H32.2109C33.2549 3.78926 34.1056 4.63999 34.1056 5.68399V24.6314ZM32.2105 0H5.68421C2.55032 0 0 2.55032 0 5.68421V34.1053C0 34.7874 0.367579 35.4183 0.960632 35.7537C1.25053 35.9185 1.57263 36 1.89474 36C2.232 36 2.56926 35.9109 2.87053 35.7291L11.4423 30.5867C11.7379 30.4086 12.0752 30.3158 12.4181 30.3158H32.2105C35.3444 30.3158 37.8947 27.7655 37.8947 24.6316V5.68421C37.8947 2.55032 35.3444 0 32.2105 0Z"
                                        fill="#6B7280"
                                    />
                                </svg>
                                <p className="sm:text-lg text-sm leading-4 text-gray-500 ml-3">{renderPositionType(item, 'position81', position)}</p>
                            </div> */}
              {/* <div className="flex items-center justify-between ml-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 43 36" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8936 36C21.3372 36 20.8019 35.7776 20.4093 35.3774L4.10045 18.9021C-0.174108 14.5821 -0.174108 7.55365 4.10045 3.23365C6.16635 1.14988 8.92088 0 11.8581 0C14.7952 0 17.5519 1.14988 19.6157 3.23365L21.8936 5.53553L24.1716 3.23576C26.2375 1.14988 28.992 0 31.9313 0C34.8664 0 37.623 1.14988 39.6868 3.23365C43.9634 7.55365 43.9634 14.5821 39.6889 18.9021L23.3801 35.3795C22.9853 35.7776 22.4521 36 21.8936 36Z" fill="#6B7280" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.8573 4.23535C10.0433 4.23535 8.34274 4.94265 7.07045 6.22806C4.42929 8.89629 4.42929 13.2396 7.07255 15.9121L21.8928 30.8859L36.7152 15.9121C39.3585 13.2396 39.3585 8.89629 36.7152 6.22806C34.1706 3.65512 29.6861 3.65935 27.1416 6.22806L23.3793 10.0292C22.5899 10.8276 21.1958 10.8276 20.4064 10.0292L16.6441 6.22594C15.3718 4.94265 13.6733 4.23535 11.8573 4.23535Z" fill="white" />
                                </svg>
                                {renderPositionType(item, 'position45', position) &&
                                <p className="sm:text-lg text-sm leading-4 text-gray-500 ml-3">{renderPositionType(item, 'position82', position)}</p>}
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
