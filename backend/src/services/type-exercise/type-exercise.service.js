// Initializes the `typeExercise` service on path `/type-exercise`
const { TypeExercise } = require('./type-exercise.class');
const createModel = require('../../models/type-exercise.model');
const hooks = require('./type-exercise.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/type-exercise', new TypeExercise(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('type-exercise');

  service.hooks(hooks);
};
