import React from "react";
import _Feature_Name_ContextProvider from "../../state-manager/_Feature_Name_Context";
import { _Feature_Name_Stack } from "../_Feature_Name_Stack";

export default function _Feature_Name_StackProvider() {
  return (
    <_Feature_Name_ContextProvider>
      <_Feature_Name_Stack />
    </_Feature_Name_ContextProvider>
  );
}
