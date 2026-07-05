console.log("aysnc and await tutorial")

async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
console.log("loading modules")

console.log("do something else");

console.log("load data");

let data = getdata();
// data.then((v) => {
//     console.log(data)

//     console.log("process data");
// })
console.log(data)

console.log("process data");