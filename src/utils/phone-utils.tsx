export const PhoneUtils = {
  cameraPermissions: () => {
    const event = {
      type: "camera_permission",
      hasPermission: true,
    };
    sendMessageToFlutter(event);
  },

};

function sendMessageToFlutter(event: { type: string, hasPermission: boolean }) {
   window.ReactNativeWebView.postMessage(JSON.stringify(event));
}
