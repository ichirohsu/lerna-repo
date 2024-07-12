'use strict';

const appApi2Server = require('..');
const assert = require('assert').strict;

assert.strictEqual(appApi2Server(), 'Hello from appApi2Server');
console.info('appApi2Server tests passed');
