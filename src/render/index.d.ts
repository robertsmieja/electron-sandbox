export declare global {
  interface Window {
    electron: {
      sendInputText: (inputText: string) => string
    }
  }
}
