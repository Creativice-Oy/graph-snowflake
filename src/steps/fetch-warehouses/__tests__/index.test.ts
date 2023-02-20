import {
  executeStepWithDependencies,
  Recording,
} from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../../test/config';
import { setupProjectRecording } from '../../../../test/recording';

let recording: Recording;
beforeEach(() => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-warehouses',
  });
});

afterEach(async () => {
  await recording.stop();
});

test('fetch-warehouses', async () => {
  const stepConfig = buildStepTestConfigForStep('fetch-warehouses');
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
