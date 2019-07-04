const promise = new Promise((resolve, reject) => {
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