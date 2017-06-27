const handleHTTP = (req, res) => {
  handleRequest(req, res);
};

const handleRequest = (req, res) => {
  let conf = {res};

  if (req.method === 'GET') {
    if (req.url === '/') {
      let num;
      let text;

      timeOutPromise(() => {
        num = (Math.random()).toString();
      }, 957)
      .then(() => {
        return timeOutPromise(() => {
          text = 'Hello World => ' + num;
        }, 1239);
      })
      .then(() => {
        conf.body = text;
        setResponse(conf);
      });
    } else {
      conf.code = 403;
      conf.body = "Get out!!!";

      setResponse(conf);
    }
  } else {
    conf.code = 403;
    conf.body = "Get out!!!";

    setResponse(conf);
  }
};

const timeOutPromise = (cb, time) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, time);
  });

  return promise;
};

const setResponse = ({res, code = 200, headers = {'Content-type': 'text/html'}, body} = {}) => {
  res.writeHead(code, headers);
  res.write(body);
  res.end();
};

const port = 8090;
const host = 'localhost';

const http = require('http');
const http_serv = http.createServer(handleHTTP).listen(port, host);
