const handleHTTP = (req, res) => {
  handleRequest(req, res);
};

const handleRequest = (req, res) => {
  let conf = {res};

  if (req.method === 'GET') {
    if (req.url === '/') {
      conf.body = 'Hello World';
    } else {
      conf.code = 403;
      conf.body = "Get out!!!";
    }
  } else {
    conf.code = 403;
    conf.body = "Get out!!!";
  }

  setResponse(conf);
};

const setResponse = ({res, code = 200, headers = {'Content-type': 'text/html'}, body} = {}) => {
  res.writeHead(code, headers);
  res.end(body);
};

const port = 8090;
const host = 'localhost';

const http = require('http');
const http_serv = http.createServer(handleHTTP).listen(port, host);
