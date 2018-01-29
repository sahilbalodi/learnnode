const verify = (fileName) => {
  if (typeof (fileName) === 'string') {
    if (fileName.length > 0) { return true; }
  }
  return null;
};
module.exports = verify;
