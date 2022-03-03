import { Dimensions } from "react-native";

export const appPaddingHorizontal = 25;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const availableWidth = screenWidth - 2 * appPaddingHorizontal;
