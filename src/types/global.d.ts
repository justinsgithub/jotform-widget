type CoreEvents = "ready" | "submit";

interface WidgetData {
  formID: string;
}

interface TypeJF {
  subscribe: (event: CoreEvents, callback: () => void) => void;
  sendData: (data: string) => void;
  sendSubmit: (data: { valid: boolean; value: string }) => void;
  requestFrameResize: (data: { width: number; height: number }) => void;
  getWidgetSetting: (parameterName: string) => string;
  getWidgetData: () => WidgetData;
  getWidgetSettings: () => object;
  replaceWidget: (inputType: string, height: number) => void;
}

declare interface Window {
  JFCustomWidget: TypeJF;
  JFid: string;
}

// declare const JFCustomWidget: TypeJF;
