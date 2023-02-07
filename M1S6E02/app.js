const timer = function () {
  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    console.log(time);
  }, 1000);
};

timer();
