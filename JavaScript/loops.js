console.log("loops tutorial")

let a=1;
console.log(a);


for(let i=0;i<5;i++)
{
    console.log(a+i);
}

let obj={
    name:"omkar",
    role:"developer",
    company:"xyz"
}

for (const key in obj)
{
    console.log(key,obj[key]);
}

for(const c of "omkar")
{
    console.log(c);
}

let i=5;

while(i<6)
{
    console.log(i);
    i++;
}