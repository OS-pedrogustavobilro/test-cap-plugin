import { registerPlugin } from '@capacitor/core';
import { exposeSynapse } from '@capacitor/synapse';
class TestWeb {
    test() {
        console.log('test');
    }
}
const TestCapacitorPlugin = registerPlugin('Test', {
    web: () => new TestWeb(),
});
exposeSynapse();
export { TestCapacitorPlugin };
//# sourceMappingURL=index.js.map