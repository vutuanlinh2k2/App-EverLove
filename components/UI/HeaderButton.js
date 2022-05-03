import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";

import { primaryColor } from "../../constants/colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Feather}
      iconSize={25}
      color={primaryColor}
    />
  );
};

export default CustomHeaderButton;
