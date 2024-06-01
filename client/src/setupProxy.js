const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  

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
 

};