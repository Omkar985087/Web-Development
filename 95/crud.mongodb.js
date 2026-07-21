use("Crudb")

console.log(db)

db.createCollection("courses")
db.courses.insertOne({
    name:"omkar free web dev course",
    price:0,
    assignments:12,
    projects:45
})