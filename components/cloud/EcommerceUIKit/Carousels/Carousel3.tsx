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
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel3() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Carousel3 config", config);
  // console.log("Carousel3 readyDatasrc", readyDatasrc);
  // console.log("Carousel3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Carousel3 positionConfig", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center">
      <div className="w-full">
        {/* Carousel for Small-Sized Screen */}
        <CarouselProvider
          className="relative block sm:hidden"
          naturalSlideHeight={570}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-6 h-6 md:w-12 md:h-12 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-10 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider>
              {readyDatasrc &&
                readyDatasrc.map((item: any, index: number) => {
                  return (
                    <Slide index={index} key={item?.id || index}>
                      <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                        <div className="relative w-full h-full">
                          <AtomImage
                            item={renderPositionType(
                              item,
                              "position2",
                              positionConfig
                            )}
                            customClassName="object-center object-cover w-full h-full"
                            alt={renderPositionType(
                              item,
                              "position1",
                              positionConfig
                            )}
                          />
                          <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                            <AtomTitle
                              item={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </Slide>
                  );
                })}
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-10 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          naturalSlideHeight={570}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
          currentSlide={1}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-8 h-8 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-10 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider className="carousel__sliderLarge">
              {readyDatasrc &&
                readyDatasrc.map((item: any, index: number) => {
                  return (
                    <Slide
                      key={item?.id || index}
                      index={index}
                      className="carousel__inner-slideLarge"
                    >
                      <div className="gallery-cell w-full h-full">
                        <div className="relative w-full h-full">
                          <AtomImage
                            item={renderPositionType(
                              item,
                              "position2",
                              positionConfig
                            )}
                            customClassName="object-center object-cover w-full h-full"
                            alt={renderPositionType(
                              item,
                              "position1",
                              positionConfig
                            )}
                          />
                          <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                            <AtomTitle
                              item={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </Slide>
                  );
                })}
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-8 h-8 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-10 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      <style>
        {`
                    .gallery-cell {
                        height: 277px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
}
