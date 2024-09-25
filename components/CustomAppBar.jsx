import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const CustomAppBar = ({ title, rightAction, backAction }) => {
  return (
    <Appbar.Header>
      {backAction}
      <Appbar.Content title={title} />
      {rightAction}
    </Appbar.Header>
  );
};

export default CustomAppBar;
