var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


  //by name
students.sort(function(a,b){
  var compare = a.name.localeCompare(b.name);
  if(a.name === b.name){
    return b.age - a.age;
  }
  if(compare!==0){
    return compare;
  }

});

console.log(students);