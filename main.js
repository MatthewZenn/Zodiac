const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1600, height: 900, resizable: false, frame: true, icon: "Static/Logo.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});