import { appActions } from "..";

export const generatePaymentLinkAction = payload => ({
    type: appActions.GENERATE_PAYMENT_LINK,
    payload
  });

  export const verifyPaymentAction = payload => ({
    type: appActions.VERIFY_PAYMENT_STATUS,
    payload
  });

  export const saveLandDataAction = payload => ({
    type: appActions.SAVE_LAND,
    payload
  });

  export const getLandDataAction = payload => ({
    type: appActions.GET_LAND,
    payload
  });

  export const updateLandDataAction = payload => ({
    type: appActions.UPDATE_LAND,
    payload
  });

  export const deleteLandDataAction = payload => ({
    type: appActions.DELETE_LAND,
    payload
  });

  export const uploadSingleImageAction =(payload) => ({
    type: appActions.UPLOAD_SINGLE_IMAGE,
    payload
  });