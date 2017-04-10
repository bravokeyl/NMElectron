import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools();
  mainWindow.maximize();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', createWindow);
