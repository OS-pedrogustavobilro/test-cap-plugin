var capacitorTestPlugin = (function (exports, core, synapse) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports, synapse);
//# sourceMappingURL=plugin.js.map
