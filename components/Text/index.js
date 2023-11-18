import React from "react";

const SizeClasses = {
  txtMontserratMedium14RedA100: "font-medium font-montserrat",
  txtInterExtraRegular48: "font-extrabold font-inter",
  txtMontserrateRegular16: "font-montserrat font-normal",
  txtMonserratMedium14: "font-medium font-montserrat",
  txtMonserrateRegular: "font-montserrat font-normal",
  txtMonserratRegular16Gray900: "font-montserrat font-normal",
};

const Text = ({children, className = "", size, as, ...restProps}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && SizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export {Text};
