import { app, BrowserWindow } from 'electron';

// tslint:disable-next-line:no-console
console.log('test');

let url: any;
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8092/';
  // tslint:disable-next-line:no-console
  console.log('1');
} else {
  // tslint:disable-next-line:no-console
  console.log('2');
  url = `file://${process.cwd()}/dist/index.html`;
}

app.on('ready', () => {
  // tslint:disable-next-line:no-console
  console.log('3');
  const window = new BrowserWindow({ width: 800, height: 600 })
  window.loadURL(url);
});
