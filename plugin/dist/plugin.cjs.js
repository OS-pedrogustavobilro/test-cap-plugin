'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');
var synapse = require('@capacitor/synapse');

class TestWeb {
    test() {
        console.log('test');
    }
}
const TestCapacitorPlugin = core.registerPlugin('Test', {
    web: () => new TestWeb(),
});
synapse.exposeSynapse();

exports.TestCapacitorPlugin = TestCapacitorPlugin;
//# sourceMappingURL=plugin.cjs.js.map
