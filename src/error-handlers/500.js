'uses strict';

module.exports = async function (err, req, res, next){
  const error = await err.message ? err.message : err;
  res.status(500).send(error);
};
