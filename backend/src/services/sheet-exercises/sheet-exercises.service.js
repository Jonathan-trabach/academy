// Initializes the `SheetExercises` service on path `/sheet-exercises`
const { SheetExercises } = require('./sheet-exercises.class');
const createModel = require('../../models/sheet-exercises.model');
const hooks = require('./sheet-exercises.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sheet-exercises', new SheetExercises(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sheet-exercises');

  service.hooks(hooks);
};
