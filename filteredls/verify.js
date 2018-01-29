const verify = (parameter) => {
  if (parameter === undefined) { return false; } else if (!(typeof (parameter) === 'string')) {
    return false;
  } else if (parameter.length === 0) {
    return false;
  } return true;
};
module.exports = verify;
