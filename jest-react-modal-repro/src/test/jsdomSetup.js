import { jsdom } from 'jsdom';

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'Node.js' };
