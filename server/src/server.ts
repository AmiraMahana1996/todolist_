import App from './app';

import productHandler from './handlers/todo';

const app = new App([new productHandler()]);
app.listen();
