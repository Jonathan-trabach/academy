const assert = require('assert');
const app = require('../../src/app');

describe('\'SheetExercises\' service', () => {
  it('registered the service', () => {
    const service = app.service('sheet-exercises');

    assert.ok(service, 'Registered the service');
  });
});
