import { Dimensions } from "react-native";
import { commonTextColor } from "./colors";

export const appPaddingHorizontal = 20;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const availableWidth = screenWidth - 2 * appPaddingHorizontal;

export const appCarouselItemWidth = availableWidth + 10;

export const shadowDefault = {
  shadowColor: commonTextColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};

export const iconBottomSize = 27.5;
