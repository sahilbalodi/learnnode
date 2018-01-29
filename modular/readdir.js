const callback = (error, data) => {
  if (error) { console.log(error); } else {
    for (let i = 0; i < data.length; i += 1) {
      console.log(data[i]);
    }
  }
};

module.exports = callback;
