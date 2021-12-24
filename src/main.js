const server = require('http').createServer().listen(8080);
const gun = GUN({web: server});

import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;