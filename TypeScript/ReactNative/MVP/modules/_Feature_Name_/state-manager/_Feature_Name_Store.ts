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

import { Dispatch } from "redux";
import { _Feature_Name_Model } from "../_Feature_Name_Model";
import { create_Feature_Name_ } from "../_Feature_Name_Service";

export const SET__FEATURE_NAME_ = "SET__FEATURE_NAME_";
export const UPDATE__FEATURE_NAME_ = "UPDATE__FEATURE_NAME_";
export const DELETE__FEATURE_NAME_ = "DELETE__FEATURE_NAME_";

interface ISet_Feature_Name_ {
  type: typeof SET__FEATURE_NAME_;
  payload: _Feature_Name_Model;
}

interface IUpdate_Feature_Name_ {
  type: typeof UPDATE__FEATURE_NAME_;
  payload: _Feature_Name_Model;
}

interface IDelete_Feature_Name_ {
  type: typeof DELETE__FEATURE_NAME_;
  payload: string;
}

export interface _Feature_Name_ModelState {
  _feature_Name_stateData: _Feature_Name_Model | null;
}

export type _Feature_Name_Actions =
  | ISet_Feature_Name_
  | IUpdate_Feature_Name_
  | IDelete_Feature_Name_;

export const _feature_Name_State: _Feature_Name_ModelState = {
  _feature_Name_stateData: null,
};

export const _Feature_Name_Reducer = (
  state = _feature_Name_State,
  action: _Feature_Name_Actions
) => {
  switch (action.type) {
    case SET__FEATURE_NAME_:
      return {
        ...state,
        _feature_Name_stateData: action.payload,
      };
    case UPDATE__FEATURE_NAME_:
      return {
        ...state,
        _feature_Name_stateData: action.payload,
      };
    case DELETE__FEATURE_NAME_:
      return {
        ...state,
        _feature_Name_stateData: null,
      };
    default:
      return state;
  }
};

export const Set_Feature_Name_ =
  (_feature_Name_stateData: _Feature_Name_Model) =>
  async (dispatch: Dispatch<_Feature_Name_Actions>) => {
    const cache_feature_Name_ = await create_Feature_Name_(
      _feature_Name_stateData
    );

    dispatch({ type: SET__FEATURE_NAME_, payload: cache_feature_Name_ });
  };
