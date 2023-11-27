import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]", square: "rounded-none" };
const variants = {
  fill: {
    purple_A400: "bg-purple-A400 text-white-A700",
    white_A700: "bg-white-A700",
    gray_300_03: "bg-gray-300_03",
    gray_50_26: "bg-gray-50_26",
    gray_900_01: "bg-gray-900_01 text-white-A700",
  },
  outline: {
    purple_A100: "border border-purple-A100 border-solid text-white-A700",
    purple_A400: "outline outline-[1px] outline-purple-A400 text-purple-A400",
    white_A700: "border border-solid border-white-A700 text-white-A700_90",
    black_900: "outline outline-[1px] outline-black-900 text-gray-900_01",
  },
};
const sizes = { xs: "p-2.5", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "purple_A400",
    "white_A700",
    "gray_300_03",
    "gray_50_26",
    "gray_900_01",
    "purple_A100",
    "black_900",
  ]),
};

export { Button };
