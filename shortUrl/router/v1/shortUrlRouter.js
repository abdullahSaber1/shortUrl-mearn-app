const express = require('express');
const findShortUrlBySlug = require('../../middleware/findShortUrlBySlug');

const {
  getAllShortlinks,
  createShortUrl,
  getOriginUrl,
  updateUrl,
} = require('../../controller/shortUrlController');

const shortUrlRouter = express.Router();

shortUrlRouter.route('/').get(getAllShortlinks).post(createShortUrl);

shortUrlRouter
  .route('/:slug')
  .all(findShortUrlBySlug)
  .get(getOriginUrl)
  .patch(updateUrl);

module.exports = shortUrlRouter;
