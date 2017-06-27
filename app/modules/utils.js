const timeOutPromise = (cb, time) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, time);
  });

  return promise;
};

module.exports = {
  timeOutPromise
}
