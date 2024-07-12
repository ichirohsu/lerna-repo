'use strict';

const appApiServer = require('..');
const assert = require('assert').strict;

assert.strictEqual(appApiServer(), 'Hello world');
console.info('appApiServer tests passed');
