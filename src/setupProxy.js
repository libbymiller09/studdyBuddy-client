const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/auth/google', proxy({ target: 'https://desolate-lowlands-90762.herokuapp.com' }));
  app.use('/api/*', proxy({ target: 'https://desolate-lowlands-90762.herokuapp.com' }));

//   app.use('/auth/google', proxy({ target: 'http://localhost:5000' }));
//   app.use('/api/*', proxy({ target: 'http://localhost:5000' }));
}