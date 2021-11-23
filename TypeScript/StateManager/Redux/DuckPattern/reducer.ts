/**
 * @author Rafael Pena
 *
 * Github: @RafaelPena31
 * LinkedIn: https://www.linkedin.com/in/rafael-augusto-pena/
 *
 * @tutorial
 * TO-DOs
 * Change the _Feature_Name_Model interface and the return of each role service according to your needs
 */

import { combineReducers } from "redux";
import { _Feature_Name_Reducer } from "./_Feature_Name_Store";

const rootReducer = combineReducers({
  _Feature_Name_: _Feature_Name_Reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
