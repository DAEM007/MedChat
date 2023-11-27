import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtRobotoRegular16: "font-normal font-roboto",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
