
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Vikas"
  },
  {
    "name": "Python",
    "price": 18000,
    "instructor": "Amit"
  },
  {
    "name": "JavaScript",
    "price": 15000,
    "instructor": "Neha"
  },
  {
    "name": "C++",
    "price": 17000,
    "instructor": "Raj"
  },
  {
    "name": "C#",
    "price": 16000,
    "instructor": "Priya"
  },
  {
    "name": "Go",
    "price": 14000,
    "instructor": "Suresh"
  },
  {
    "name": "Kotlin",
    "price": 19000,
    "instructor": "Pooja"
  },
  {
    "name": "Swift",
    "price": 21000,
    "instructor": "Arjun"
  },
  {
    "name": "PHP",
    "price": 13000,
    "instructor": "Ravi"
  },
  {
    "name": "Ruby",
    "price": 12000,
    "instructor": "Simran"
  }
]
);



// Print a message to the output window.
console.log(`Done Inserting Data.`);

