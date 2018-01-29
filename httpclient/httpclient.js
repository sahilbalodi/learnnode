const http = require('http');

const httpclient = (url) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', data => console.log(data));
    response.on('error', (error) => {
      console.log('error occured', error);
    });
    response.on('end', () => {
      console.log('response ended');
    });
  });
};
module.exports = httpclient;
