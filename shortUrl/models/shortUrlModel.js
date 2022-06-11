const mongoose = require('mongoose');
const { isAlphanumeric } = require('validator');

const { Schema, model } = mongoose;

const shortUrlSchema = new Schema({
  slug: {
    type: String,
    required: [true, 'slug is required'],
    unique: [true, 'slug is already taken'],
    minlength: [6, 'slug must be at least 6 characters'],
    validate: [isAlphanumeric, 'slug must be an case-sensitive alphanumeric'],
  },
  android: {
    primary: {
      type: String,
      required: [true, 'android Primary is required'],
      unique: [true, 'android Primary is already taken'],
    },

    fallback: {
      type: String,
      required: [true, 'android fallback is required'],
      unique: [true, 'android fallback is already taken'],
    },
  },
  ios: {
    primary: {
      type: String,
      required: [true, 'ios Primary is required'],
      unique: [true, 'ios Primary is already taken'],
    },

    fallback: {
      type: String,
      required: [true, 'ios fallback is required'],
      unique: [true, 'ios fallback is already taken'],
    },
  },
  web: {
    type: String,
    required: [true, 'web is required'],
  },
});

const shortUrlModel = model('shortUrl', shortUrlSchema);

module.exports = shortUrlModel;
