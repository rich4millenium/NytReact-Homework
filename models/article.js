// Bring Mongoose into the app 
var mongoose = require( 'mongoose' ); 
const mongoose = require('./db');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Article Name is Required"
  },

  date: {
    type: Date,
    default: Date.now
  },
  
  url: {
    type: String,
    trim: true,
    unique: true,
    required: "Article URL is Required"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;