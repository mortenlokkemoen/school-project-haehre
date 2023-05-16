import { StyleProp, ViewStyle } from "react-native";

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
