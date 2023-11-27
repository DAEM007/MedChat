import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className="bg-white-A700 border-b border-black-900 border-solid flex h-[72px] md:h-auto items-center justify-center px-16 md:px-5 w-full">
        <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
          <div className="header-row my-1.5">
            <Img
              className="h-[27px] w-[63px]"
              src="images/img_content.svg"
              alt="content"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-row gap-8 sm:hidden items-center justify-center w-auto">
            <ul className="flex sm:flex-col flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="text-base text-gray-900_01"
                >
                  <Text size="txtRobotoRegular16">About Us</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-base text-gray-900_01"
                >
                  <Text size="txtRobotoRegular16">Services</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-base text-gray-900_01"
                >
                  <Text size="txtRobotoRegular16">Contact</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Dropdown
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-center w-auto">
              <Button
                className="cursor-pointer min-w-[121px] text-base text-center"
                shape="square"
                color="black_900"
                size="xs"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
