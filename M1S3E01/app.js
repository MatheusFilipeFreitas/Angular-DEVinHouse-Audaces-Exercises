// function procuraMinMax(array) {
//   if (array == null || array.length == 0) {
//     console.log('Não é possivel encontrar');
//   } else {
//     console.log(Math.max.apply(null, array));
//     console.log(Math.min.apply(null, array));
//   }
// }

const result = (array = [20, 10, 30]) => {
  if (array == null || array.length == 0) {
    console.log('Não é possivel encontrar');
  } else {
    console.log(`Max: ${Math.max.apply(null, array)} \nMin: ${Math.min.apply(null, array)}`);
  }
};

result();

// procuraMinMax(array);
