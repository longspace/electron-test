const { app, BrowserWindow } = require('electron')

// 热重载
const  reloader = require("electron-reloader")
reloader(module)

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame:false  // 设置为true 即无黑夜的系统边框
    })

    win.loadFile('index.html')

    // win.webContents.openDevTools();
}
app.whenReady().then(() => {
    createWindow()
})