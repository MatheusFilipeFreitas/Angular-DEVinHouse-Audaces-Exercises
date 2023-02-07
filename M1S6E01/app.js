const sleep = function (valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  }).then((response) => {
    console.log(response);
  });
};

sleep(5);
