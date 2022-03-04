import { Dimensions } from "react-native";

export const appPaddingHorizontal = 25;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const availableWidth = screenWidth - 2 * appPaddingHorizontal;

export const shadowDefault = {
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
};
