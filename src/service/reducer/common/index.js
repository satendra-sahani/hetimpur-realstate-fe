import { appActions } from "../../action";

const initialState = {
  devListLoading: false,
  devListSpotlight: [],
  jobLists: [],
  compnySpotLight: [],
  user: {},
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    //It will be removed from here, it is just for example, particular action will be place here
    case `${appActions.FORGET_PASSWORD}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_FAIL`:
      return { ...state, devListLoading: true };

    case `${appActions.OPEN_CANDIDATE_LISTS}_SUCCESS`:
      return { ...state, devListSpotlight: action?.payload?.data };

    case `${appActions.JOB_LISTS}_START`:
      return { ...state, isJobLoading: true };
    case `${appActions.JOB_LISTS}_SUCCESS`:
      return { ...state, isJobLoading: false, jobLists: action?.payload?.data };
    case `${appActions.JOB_LISTS}_FAIL`:
      return { ...state, isJobLoading: false };

    case `${appActions.OPEN_COMPANY_PROFILE}_SUCCESS`:
      return {
        ...state,
        isCompanySpotLoading: false,
        compnySpotLight: action?.payload?.data,
      };
    case `${appActions.GET_USER}_SUCCESS`:
      return {
        ...state,
        user: action?.payload?.data,
      };

    // image
    case `${appActions.UPLOAD_IMAGE}_START`:
      return { ...state, isJobLoading: true ,[`isLoading${action?.request?.imageType}`]:true};
    case `${appActions.UPLOAD_IMAGE}_SUCCESS`:
      return { ...state, isJobLoading: true ,[`isLoading${action?.request?.imageType}`]:false,[action?.request?.imageType]:action?.payload?.imageUrl};
    case `${appActions.UPLOAD_IMAGE}_FAIL`:
      return { ...state, isJobLoading: true ,[`isLoading${action?.request?.imageType}`]:false};

      case appActions.CLEAR_IMAGE:
        return {...state,[action?.payload?.imageName]:null}

    default:
      return { ...state };
  }
};
