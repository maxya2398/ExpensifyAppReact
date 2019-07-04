const promise = new Promise((resolve, reject) => {
<<<<<<< HEAD
    setTimeout(()=>{
        resolve({
            name: 'Maximiliano',
            age: 21
        });
        // reject('Algo no funciono');
    }, 1500);
});

console.log('antes');

promise.then((data) => {
    console.log(data);
}).then(()=>{
    console.log('esto corre?');
}).catch((error)=>{
    console.log(error);
});

console.log('despues');
=======
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
>>>>>>> de3a69f3ec1d8c57c8a719084edbb40bf9d15307
