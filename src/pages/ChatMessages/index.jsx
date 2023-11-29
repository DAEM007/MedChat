import React from "react";
import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const ChatMessagesPage = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[165px] justify-start mx-auto pb-2.5 w-full md:h-screen">
        <Header className="flex flex-col items-center w-full" />
        <div className="flex flex-col font-inter items-end md:px-10 sm:px-5 px-[274px] w-full">
          <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
            <div className="bg-green-A200 flex flex-col items-center justify-center ml-0.5 md:ml-[0] p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[522px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                <>
                  Hello! I&#39;m here to help with any health concerns you may
                  have. Please describe the symptoms you&#39;re experiencing.
                </>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-center md:ml-[0] ml-[381px] mt-10 p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[427px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                <>
                  Hi. I&#39;ve been feeling really tired lately, and I have this
                  persistent cough. I also had a mild fever yesterday.
                </>
              </Text>
            </div>
            <div className="bg-green-A200 flex flex-col items-center justify-center mt-10 p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[524px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                <>
                  I&#39;m sorry to hear that you&#39;re not feeling well.
                  I&#39;ll do my best to assist you. Can you provide more
                  details about the cough? Is it dry or do you produce mucus?
                </>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-center md:ml-[0] ml-[397px] mt-10 p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[412px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                <>
                  It&#39;s a bit dry, and I do feel some tightness in my chest
                  when I cough.
                </>
              </Text>
            </div>
            <div className="bg-green-A200 flex flex-col items-center justify-center mt-10 p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-auto sm:w-full">
              <Text
                className="leading-[180.00%] max-w-[523px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                Thank you for clarifying. Have you noticed any shortness of
                breath or difficulty breathing?
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-center md:ml-[0] ml-[299px] mt-5 p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] w-auto sm:w-full">
              <Text
                className="leading-[180.00%] max-w-[505px] md:max-w-full text-base text-black-900 tracking-[-0.32px]"
                size="txtInterRegular16"
              >
                Yes, actually. Today, I felt a bit short of breath, especially
                when I tried to climb the stairs.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start mt-[60px] w-auto md:w-full">
              <Input
                name="language"
                placeholder="Malaria symptoms"
                className="!p-0 md:text-[22px] placeholder:text-white-A700 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
                wrapClassName="!p-[5px] flex max-w-[828px] md:w-full w-screen"
                shape="round"
                color="purple_A100"
                size="sm"
                variant="outline"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessagesPage;