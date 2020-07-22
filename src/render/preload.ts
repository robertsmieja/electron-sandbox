import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electron", {
  sendInputText: (inputText: string) =>
    ipcRenderer.sendSync("inputSubmit", inputText),
})
