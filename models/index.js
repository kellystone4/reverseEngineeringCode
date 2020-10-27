'use strict';

// below are the variables set for requiring modules
//var fs requiring 'fs' : read files, create files
var fs        = require('fs');
//var path requiring 'path': path modules provides a way of working with directories and file paths
var path      = require('path');
//var sequlize requiring 'sequlize': promise-based node.js ORM 
var Sequelize = require('sequelize');
// var basename: extracts the filename part of a filepath
var basename  = path.basename(module.filename);
//process.env=represents state of system environment it is in when it start
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
//var db {}: setting db as a variable for an empty array (database)
var db        = {};


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//this exports the module db
module.exports = db;
