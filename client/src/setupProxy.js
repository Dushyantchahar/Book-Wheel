const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("h1")

  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
    
  );
  app.use(
    '/signin',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
    
  );
  console.log("h2")

};