const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom logger middleware to log every request
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
