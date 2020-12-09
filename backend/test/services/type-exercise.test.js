const assert = require('assert');
const app = require('../../src/app');

describe('\'typeExercise\' service', () => {
  it('registered the service', () => {
    const service = app.service('type-exercise');

    assert.ok(service, 'Registered the service');
  });
});
