import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import _ from 'lodash'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Link from 'next/link'
function LandingPageFooter() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
  } = useContext(WidgetWrapperContext)
  const otherSettings = widgetnemgooReady?.otherSettings

  const item = readyDatasrc[0]
  return (
    <footer className="relative">
      <div className={`py-16 ${otherSettings?.theme}`}>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  z-10 relative">
          {readyDatasrc.map((item: any, index: number) => {
            const footerTitle = () => {
              if (_.isEmpty(item?.title)) {
                return <img src={item?.logo} className="h-16 p-2" />
              }
              return (
                <RenderAtom
                  item={item?.position1}
                  defaultAtom="title"
                  customClassName="text-lg text-white font-bold pt-6 pb-6 px-3"
                />
              )
            }
            return (
              <div className="item-col  " key={item?.id || index}>
                {footerTitle()}
                <RenderAtom
                  item={{ value: item?.description }}
                  defaultAtom="title"
                  customClassName=" text-white p-3 mt-3 text-sm font-normal text-opacity-80 "
                />
                {item?.link?.map((item1: any, i: number) => {
                  return (
                    <div key={i} className="my-2">
                      <Link href={item1?.url}>
                        <a className="text-white text-opacity-80 p-3 ">
                          {item1?.name}
                        </a>
                      </Link>
                    </div>
                  )
                })}
                <div className="flex jusitfy-between  gap-6">
                  {item?.applink?.map((item2: any, index: number) => {
                    return (
                      <div key={item2?.id || index} className="my-1">
                        <Link href={item2?.url}>
                          <img
                            src={item2?.imgpath}
                            alt={item2?.name}
                            className="w-full cursor-pointer"
                          />
                        </Link>
                      </div>
                    )
                  })}
                </div>
                <div className="flex jusitfy-between  gap-8 mt-8">
                  {item?.social?.map((item3: any, index: number) => {
                    return (
                      <div
                        key={item3?.id || index}
                        className="w-10 h-10 bg-blue-800 text-center pt-2  rounded-full cursor-pointer hover:opacity-80"
                      >
                        <Link href={item3?.url}>
                          <i
                            className={`fa-brands fa-${item3.name} text-white text-base`}
                          ></i>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {otherSettings?.bg1 && (
        <img
          src={otherSettings?.bg1}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
      )}
      {otherSettings?.bg2 && (
        <img
          src={otherSettings?.bg2}
          className="absolute  object-right right-0 bottom-0 hidden md:block transition ease-in-out delay-150 "
        />
      )}
    </footer>
  )
}
export default LandingPageFooter
