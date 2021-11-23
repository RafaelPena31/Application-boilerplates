import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import _Feature_Name_Screen from "../screens/_Feature_Name_Screen";

export const _Feature_Name_Stack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="_Feature_Name_Screen">
      <Screen name="_Feature_Name_Screen" component={_Feature_Name_Screen} />
    </Navigator>
  );
};
