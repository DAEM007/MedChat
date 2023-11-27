import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import { Link } from "react-router-dom";

const ChatUIPage = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-20 justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center w-full">
          <Header />
        </div>
        <div className="flex flex-col font-inter items-center md:px-10 sm:px-5 px-[217px] w-full">
          <Img
            className="flex h-7 items-center justify-center md:ml-[0] ml-[850px] mt-5 w-7"
            src="images/img_lock.svg"
            alt="lock"
          />
          <div className="flex flex-col gap-10 md:gap-2.5 items-center justify-center max-w-screen-sm mr-[100px] w-full h-screen">
            <div className="flex md:flex-col flex-row gap-5 md:h-screen items-start md:items-start justify-start md:justify-start md:m-[] max-w-screen-sm md:ml-[] md:mr-[] md:mt-[] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="bg-purple-A100 flex flex-col gap-[41px] items-start justify-end p-4 rounded-[30px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center ml-1 md:ml-[0] mt-1.5 w-[60px]"
                    shape="round"
                    color="gray_50_26"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_settings_black_900.svg"
                      alt="settings"
                    />
                  </Button>
                  <Text
                    className="leading-[120.00%] ml-1 md:ml-[0] text-black-900 text-lg tracking-[-0.36px] w-[95%] sm:w-full"
                    size="txtInterSemiBold18"
                  >
                    Discover health resources{" "}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="bg-teal-A400 flex flex-col gap-[43px] items-start justify-start p-2 rounded-[30px] w-full">
                  <Img
                    className="h-[60px] ml-3 md:ml-[0] mt-[17px] rounded-[10px] w-[60px]"
                    src="images/img_location_teal_50.svg"
                    alt="location"
                  />
                  <Text
                    className="leading-[120.00%] mb-3.5 md:ml-[0] ml-[13px] text-black-900 text-lg tracking-[-0.36px] w-[93%] sm:w-full"
                    size="txtInterSemiBold18"
                  >
                    Locate a nearby hospital around you
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-12 items-start justify-end p-[18px] rounded-[30px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center ml-0.5 md:ml-[0] mt-[5px] w-[60px]"
                    shape="round"
                    color="gray_300_03"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_music.svg" alt="music" />
                  </Button>
                  <Link to="/chatmessages">
                    <Text
                      className="leading-[120.00%] ml-0.5 md:ml-[0] text-black-900 text-lg tracking-[-0.36px] w-[95%] sm:w-full"
                      size="txtInterSemiBold18"
                    >
                      Talk to MedChat
                    </Text>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:block gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-end justify-start md:m-[] md:mt-[] w-auto md:w-full">
              <div className="bg-teal-A400 flex flex-col sm:gap-10 md:gap-5 gap-[69px] items-start justify-start md:m-5 p-5 rounded-[30px] w-full">
                <Img
                  className="h-[33px] md:ml-[0] ml-[3px] mt-[15px]"
                  src="images/img_map.svg"
                  alt="map"
                />
                <Text
                  className="mb-3.5 text-black-900 text-lg tracking-[-0.36px]"
                  size="txtInterMedium18"
                >
                  Discover blog post
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[66px] items-start justify-start md:m-5 p-2 rounded-[30px] w-full">
                <Img
                  className="h-[27px] ml-3 md:ml-[0] mt-[21px]"
                  src="images/img_map.svg"
                  alt="mapone"
                />
                <Text
                  className="leading-[120.00%] mb-5 ml-2.5 md:ml-[0] text-black-900 text-lg tracking-[-0.36px] w-[95%] sm:w-full"
                  size="txtInterSemiBold18"
                >
                  What’s the possible symtopms for covid
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-purple-A100 flex flex-col gap-11 items-start justify-start p-5 rounded-[30px] w-full">
                  <Img
                    className="h-[60px] mt-1 rounded-[10px] w-[60px]"
                    src="images/img_close_purple_100.svg"
                    alt="close"
                  />
                  <Text
                    className="leading-[120.00%] mb-0.5 ml-0.5 md:ml-[0] text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtInterSemiBold18"
                  >
                    Check your symptoms
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-center mr-[57px] md:w-full w-screen">
            <Input
              name="language_One"
              placeholder="Malaria symptoms                                                     "
              className="!p-0 flex flex-row items-center justify-center md:text-[22px] placeholder:text-white-A700 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
              wrapClassName="flex h-[70px] max-w-[828px] mr-[50px] w-full"
              suffix={
                <Img
                  className="h-12 my-auto"
                  src="images/img_barcode.svg"
                  alt="barcode"
                />
              }
              shape="round"
              color="purple_A100"
              size="sm"
              variant="outline"
            ></Input>
            <Img
              className="h-12 w-12"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatUIPage;
