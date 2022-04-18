import React, { useMemo } from "react";
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { MediaType } from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { primaryColor, accentColor } from "../../constants/colors";

const ForceInset = {
  top: "never",
  bottom: "never",
};

const widgetErrors = {
  errorTextColor: "blue",
  errorMessages: {
    hasErrorWithPermissions: "Hãy cấp cho ứng dụng quyền truy cập ảnh.",
    hasErrorWithLoading: "Không load được ảnh, xin vui lòng thử lại.",
    hasErrorWithResizing: "Không load được ảnh, xin vui lòng thử lại.",
    hasNoAssets: "Không có ảnh nào được tìm thấy.",
  },
};

const widgetSettings = {
  getImageMetaData: false,
  initialLoad: 100,
  assetsType: [MediaType.photo],
  minSelection: 1,
  maxSelection: 10,
  portraitCols: 3,
  landscapeCols: 3,
};

const widgetStyles = {
  margin: 2,
  bgColor: "white",
  spinnerColor: primaryColor,
  widgetWidth: 99,
  videoIcon: {
    Component: Ionicons,
    iconName: "ios-videocam",
    color: "tomato",
    size: 20,
  },
  selectedIcon: {
    Component: Ionicons,
    iconName: "ios-checkmark-circle-outline",
    color: accentColor,
    bg: "rgba(0, 0, 0, .35)",
    size: 26,
  },
};

// const widgetResize = {
//   // width: 300,
//   // compress: 0.5,
//   // base64: false,
//   // saveTo: 'png',
// };

const SelectImagesModal = (props) => {
  const { isVisible, onCancel, onSelectImages } = props;

  const onSuccess = (data) => {
    const imagesSelected = data.map((image) => image.uri);
    onSelectImages(imagesSelected);
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: "Chọn",
        back: "Huỷ",
        selected: "ảnh",
      },
      midTextColor: "black",
      minSelection: 1,
      buttonTextStyle: { color: primaryColor },
      buttonStyle: { borderRadius: 5 },
      onBack: onCancel,
      onSuccess: (e) => onSuccess(e),
    }),
    []
  );

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <SafeAreaProvider style={styles.container}>
        <TouchableWithoutFeedback style={styles.container}>
          <SafeAreaView forceInset={ForceInset} style={styles.container}>
            <AssetsSelector
              Settings={widgetSettings}
              Errors={widgetErrors}
              Styles={widgetStyles}
              Navigator={widgetNavigator}
              // Resize={widgetResize}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SelectImagesModal;
