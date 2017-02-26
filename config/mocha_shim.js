
// Needed to tell ts-node to compile to es5/commonjs modules since mocha can't go typescript -> es6 -> es5
require('ts-node').register({ project: 'config' });
