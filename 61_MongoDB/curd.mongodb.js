//CRUD Operation
use("CrudDb")
//Create
// db.createCollection("courses")

// db.courses.insertOne({
//     name: "web development",
//     price:  0,
//     assigment:12,
//     projects:5
//})
db.courses.insertMany(
    [
  {
    "name": "Web Development",
    "price": 0,
    "assignment": 12,
    "projects": 5
  },
  {
    "name": "Java Programming",
    "price": 20000,
    "assignment": 15,
    "projects": 6
  },
  {
    "name": "Python for Beginners",
    "price": 15000,
    "assignment": 10,
    "projects": 4
  },
  {
    "name": "Full Stack Development",
    "price": 25000,
    "assignment": 20,
    "projects": 8
  },
  {
    "name": "Data Science",
    "price": 30000,
    "assignment": 18,
    "projects": 7
  },
  {
    "name": "Machine Learning",
    "price": 28000,
    "assignment": 16,
    "projects": 6
  },
  {
    "name": "Android Development",
    "price": 22000,
    "assignment": 14,
    "projects": 5
  },
  {
    "name": "Cloud Computing",
    "price": 27000,
    "assignment": 12,
    "projects": 6
  },
  {
    "name": "Cyber Security",
    "price": 24000,
    "assignment": 15,
    "projects": 7
  },
  {
    "name": "Artificial Intelligence",
    "price": 32000,
    "assignment": 20,
    "projects": 9
  }
]

)
//Read

// let a =db.courses.find({price:0})
// console.log(a.toArray());
// console.log(a.count());

// let b=db.courses.findOne({price:0});
// console.log(b);

//update

// db.courses.updateOne({price:0},{$set:{price:100}})

// db.courses.updateMany({price:100},{$set:{price:1000}})
//delete
// db.courses.deleteOne({price:15000})
// db.courses.deleteMany({price:32000})