import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsonlation must be enabled in the BrowserWinodw')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (error) {
  console.log(error)
}
