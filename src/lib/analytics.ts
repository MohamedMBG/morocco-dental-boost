type DataLayerValue = string | number | boolean | null | undefined;

type DataLayerEvent = {
  event: string;
  button_id?: string;
  button_text?: string;
  button_location?: string;
  action_type?: string;
  destination?: string;
  service_name?: string;
  form_name?: string;
  [key: string]: DataLayerValue;
};

type WindowWithDataLayer = Window & {
  dataLayer?: DataLayerEvent[];
};

const getWindowWithDataLayer = () => window as WindowWithDataLayer;

export const pushToDataLayer = (payload: DataLayerEvent) => {
  if (typeof window === "undefined") return;

  const analyticsWindow = getWindowWithDataLayer();
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push(payload);
};

type TrackButtonClickParams = {
  buttonId: string;
  buttonText: string;
  buttonLocation: string;
  actionType: "scroll_to_booking" | "phone_call" | "whatsapp" | "maps_direction" | "anchor_navigation";
  destination?: string;
  serviceName?: string;
};

export const trackButtonClick = ({
  buttonId,
  buttonText,
  buttonLocation,
  actionType,
  destination,
  serviceName,
}: TrackButtonClickParams) => {
  pushToDataLayer({
    event: "cta_click",
    button_id: buttonId,
    button_text: buttonText,
    button_location: buttonLocation,
    action_type: actionType,
    destination,
    service_name: serviceName,
  });
};

type TrackFormSubmitParams = {
  formName: string;
  buttonId: string;
  serviceName?: string;
};

export const trackFormSubmit = ({
  formName,
  buttonId,
  serviceName,
}: TrackFormSubmitParams) => {
  pushToDataLayer({
    event: "booking_form_submit",
    form_name: formName,
    button_id: buttonId,
    service_name: serviceName,
  });
};
