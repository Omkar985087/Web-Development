console.log("array tutorial")

let arr=[1,2,3,4,5];

console.log(arr.length)
arr[0]=10;
console.log(arr[0]);

console.log(arr.pop());
console.log(arr.push(5));
console.log(arr);
console.log(arr.splice(0,2));
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=4;
arr[4]=5;
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

let obj={
    a:1,
    b:2,
    c:3
}

for(let key in obj)
{
    console.log(key,obj[key]);
}