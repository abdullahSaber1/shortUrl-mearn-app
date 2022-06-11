const catchAsync = require('../utiles/catchAsync');
const ErrorResponse = require('../utiles/ErrorResponse');
const SHORTURL = require('../models/shortUrlModel');

const findShortUrlBySlug = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const urlDocument = await SHORTURL.findOne({ slug });
  if (urlDocument === null) {
    return next(new ErrorResponse(404, 'Page Not Found'));
  }
  req.urlDocument = urlDocument;
  next();
});

module.exports = findShortUrlBySlug;
