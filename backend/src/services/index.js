const users = require('./users/users.service.js');

const academy = require('./academy/academy.service.js');

const typeExercise = require('./type-exercise/type-exercise.service.js');

const exercise = require('./exercise/exercise.service.js');

const sheetExercises = require('./sheet-exercises/sheet-exercises.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);

  app.configure(academy);
  app.configure(typeExercise);
  app.configure(exercise);
  app.configure(sheetExercises);
};
