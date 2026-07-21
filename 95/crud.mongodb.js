use("Crudb")

console.log(db)

//create
// db.createCollection("courses")
// db.courses.insertOne({
//     name:"omkar free web dev course",
//     price:0,
//     assignments:12,
//     projects:45
// })

// db.courses.insertMany([
//   {
//     name: "JavaScript Mastery",
//     price: 499,
//     assignments: 15,
//     projects: 10
//   },
//   {
//     name: "React Complete Guide",
//     price: 999,
//     assignments: 20,
//     projects: 18
//   },
//   {
//     name: "Node.js Backend Development",
//     price: 799,
//     assignments: 16,
//     projects: 12
//   },
//   {
//     name: "MongoDB for Beginners",
//     price: 299,
//     assignments: 10,
//     projects: 8
//   },
//   {
//     name: "Full Stack MERN Bootcamp",
//     price: 1499,
//     assignments: 30,
//     projects: 25
//   },
//   {
//     name: "Python Programming",
//     price: 699,
//     assignments: 18,
//     projects: 15
//   },
//   {
//     name: "Data Structures & Algorithms",
//     price: 899,
//     assignments: 40,
//     projects: 5
//   },
//   {
//     name: "Machine Learning Basics",
//     price: 1299,
//     assignments: 22,
//     projects: 14
//   },
//   {
//     name: "DevOps Essentials",
//     price: 999,
//     assignments: 17,
//     projects: 11
//   }
// ]);

// //Read
// let a=db.courses.find({price:0})
// console.log(a)
// console.log(a.count())

//update
db.courses.updateOne({price:0},{$set:{price:1000}})

db.courses.updateMany({price:0},{$set:{price:1000}})

//delete

db.courses.deleteOne({price:299})