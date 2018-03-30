var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://jooby:blue123@ds127899.mlab.com:27899/api_todos');

mongoose.Promise = Promise;


module.exports.Todo = require('./todo');