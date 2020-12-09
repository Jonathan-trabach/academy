const assert = require('assert');
const app = require('../../src/app');

describe('\'academy\' service', () => {
  it('registered the service', () => {
    const service = app.service('academy');

    assert.ok(service, 'Registered the service');
  });
});
