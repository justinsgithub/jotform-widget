export {};

type CoreEvents = "ready" | "submit";

interface TypeJF {
  subscribe: (event: CoreEvents, callback: () => void) => void;
  sendData: (data: string) => void;
  sendSubmit: (data: { valid: boolean; value: string }) => void;
  requestFrameResize: (data: { width: number; height: number }) => void;
  getWidgetSetting: (parameterName: string) => string;
  getWidgetSettings: () => object;
  replaceWidget: (inputType: string, height: number) => void;
}

// interface Window {
//   JFCustomWidget: TypeJF;
// }

declare global {
  interface Window {
    JFid: string;
    JFCustomWidget: TypeJF;
  }
}
