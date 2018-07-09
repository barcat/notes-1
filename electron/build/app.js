"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
// tslint:disable-next-line:no-console
console.log('test');
let url;
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8092/';
    // tslint:disable-next-line:no-console
    console.log('1');
}
else {
    // tslint:disable-next-line:no-console
    console.log('2');
    url = `file://${process.cwd()}/dist/index.html`;
}
electron_1.app.on('ready', () => {
    // tslint:disable-next-line:no-console
    console.log('3');
    const window = new electron_1.BrowserWindow({ width: 800, height: 600 });
    window.loadURL(url);
});
//# sourceMappingURL=app.js.map