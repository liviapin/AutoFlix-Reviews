const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

const changeProp = (obj, propName, newPropName, defaultValue) => {
  if (propName in obj) {
    obj[newPropName] = obj[propName] || defaultValue;
    delete obj[propName];
  }
};

const sanitizeObj = obj => {
    Object.keys(obj).forEach(key => {
        if ([undefined, null, ''].includes(obj[key])) {
            delete obj[key];
        }
    })
}

server.use((req, res, next) => {
    changeProp(req.query, 'Pg',    '_page',   1      );
    changeProp(req.query, 'Qt',    '_limit',  10     );
    changeProp(req.query, 'TpOrd', '_sort',  'Codigo');
    changeProp(req.query, 'CpOrd', '_order', 'asc'   );
    sanitizeObj(req.query);

    next();
});

server.use(jsonServer.bodyParser);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
