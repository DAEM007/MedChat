import React from "react";
import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import { Link } from "react-router-dom";

const ChatUIPage = () => {

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-20 mx-auto pb-2.5 w-full h-screen md:h-full">
        <div className="flex flex-col items-center w-full">
          <Header />
        </div>
        <div className="flex flex-col font-inter items-center md:px-10 sm:px-5 gap-10 px-[217px] w-full">
          <Img
            className="flex h-7 items-center justify-center md:ml-[0] ml-[850px] mt-5 w-7"
            src="images/img_lock.svg"
            alt="lock"
          />
          <div className="flex flex-col gap-5 md:gap-2.5 items-center justify-center max-w-screen-sm w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center md:items-center justify-center md:justify-start md:m-[] max-w-screen-sm md:ml-[] md:mr-[] md:mt-[] w-full">
              <div className="bg-purple-A100 flex flex-col sm:gap-10 md:gap-5 gap-[69px] items-start justify-start md:m-5 p-5 rounded-[30px] w-full">
                <Img
                  className="h-[60px] mt-1 rounded-[10px] w-[60px]"
                  src="images/img_close_purple_100.svg"
                  alt="close"
                />
                <Text
                  className="leading-[120.00%] mb-0.5 ml-0.5 md:ml-[0] text-black-900 text-lg w-[99%] sm:w-full"
                  size="txtInterSemiBold18"
                >
                  Discover health resources
                </Text>
              </div>
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
                  Locate a nearby hospital around you
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[66px] items-start justify-start md:m-5 p-2 rounded-[30px] w-full">
                <Img
                  className="h-[27px] ml-3 md:ml-[0] mt-[27px]"
                  src="images/img_map.svg"
                  alt="mapone"
                />
                <Text
                  className="leading-[120.00%] mb-5 ml-2.5 md:ml-[0] text-black-900 text-lg tracking-[-0.36px] w-[95%] sm:w-full"
                  size="txtInterSemiBold18"
                >
                  Talk to a medical personnel
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center md:items-center justify-center md:justify-start md:m-[] max-w-screen-sm md:ml-[] md:mr-[] md:mt-[] w-full">
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
                  className="h-[27px] ml-3 md:ml-[0] mt-[27px]"
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
              <div className="bg-purple-A100 flex flex-col sm:gap-10 md:gap-5 gap-[69px] items-start justify-start md:m-5 p-5 rounded-[30px] w-full">
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
      </div>
    </>
  );
};

export default ChatUIPage;
