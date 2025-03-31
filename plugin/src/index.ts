import { registerPlugin } from '@capacitor/core';
import { exposeSynapse } from '@capacitor/synapse';

interface TestPlugin {
    test(): void;
}

class TestWeb implements TestPlugin {
    test(): void {
        console.log('test');
    }
}

const TestCapacitorPlugin = registerPlugin<TestPlugin>('Test', {
  web: () => new TestWeb(),
});

exposeSynapse();

export { TestCapacitorPlugin };