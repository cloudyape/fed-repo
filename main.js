
let x =3;
const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Success");
    reject("Promise Fail");
});

myPromise.then((value) => x === 3);