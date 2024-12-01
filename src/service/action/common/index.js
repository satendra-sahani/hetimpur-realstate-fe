import { appActions } from "..";

export const generatePaymentLinkAction = payload => ({
    type: appActions.GENERATE_PAYMENT_LINK,
    payload
  });