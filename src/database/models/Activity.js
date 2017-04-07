/**
 * # Activity.js
 *
 * The user document for Mongoose
 *
 */
'use strict';
/**
 * ## Imports
 *
 */
//Mongoose - the ORM
var Mongoose = require('mongoose'),
  //The document structure definition
  Schema = Mongoose.Schema;

//Same fields as Parse.com
var ActivitySchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    unique: true,
    required: true
  },
  is_active: {
    type: Boolean,
    required: true
  },
  rate:{
    type: Number,
    required: true
  }
});
//Make a compound index of username/email
//ActivitySchema.index({ type: 1, isActive: 1 }, { unique: true });
/**
 * ## findUserByIdAndUserName
 *
 * @param data - Object
 * @param callback - resolve the action
 *
 */
ActivitySchema.statics.findBy = function(data) {
  return this.find(data).exec();
};

/**
 * ## Mongoose model for User
 *
 * @param ActivitySchema - the document structure definition
 *
 */
var activity = Mongoose.model('Activity', ActivitySchema);

module.exports = activity;
