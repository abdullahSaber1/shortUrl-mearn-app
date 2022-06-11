const shortid = require('shortid');

const SHORTURL = require('../models/shortUrlModel');
const catchAsync = require('../utiles/catchAsync');
const ErrorResponse = require('../utiles/ErrorResponse');

const createShortUrl = catchAsync(async (req, res) => {
  const { slug, url } = req.body;
  console.log(req.hostname, req.headers.host);
  let newUrl;
  if (!slug) {
    const slugGenerator = shortid.generate();
    newUrl = {
      slug: slugGenerator,
      android: {
        primary: url,
        fallback: `https://${req.hostname}/${slugGenerator}`,
      },
      ios: {
        primary: url,
        fallback: `https://${req.hostname}/${slugGenerator}`,
      },
      web: `https://${req.hostname}/${slugGenerator}`,
    };
  } else {
    newUrl = {
      slug,
      android: { primary: url, fallback: `https://${req.hostname}/${slug}` },
      ios: { primary: url, fallback: `https://${req.hostname}/${slug}` },
      web: `https://${req.hostname}/${slug}`,
    };
  }
  await SHORTURL.create(newUrl);
  res.json({
    message: 'succuss',
    data: newUrl,
    success: true,
  });
});

const getAllShortlinks = catchAsync(async (req, res) => {
  const shortlinks = await SHORTURL.find({});
  res.json({
    message: 'succuss',
    data: shortlinks,
    success: true,
  });
});

const getOriginUrl = catchAsync(async (req, res) => {
  res.json({
    message: 'succuss',
    data: req.urlDocument,
    success: true,
  });
});

const updateUrl = catchAsync(async (req, res, next) => {
  const { urlDocument, body } = req;

  if (body.slug) {
    return next(new ErrorResponse(400, 'slug cannot be updated'));
  }
  const updatedUrl = await SHORTURL.findByIdAndUpdate(
    urlDocument._id,
    { $set: body },
    {
      new: true,
    }
  );

  res.json({
    message: 'succuss',
    data: updatedUrl,
    success: true,
  });
});

module.exports = {
  getAllShortlinks,
  createShortUrl,
  getOriginUrl,
  updateUrl,
};
