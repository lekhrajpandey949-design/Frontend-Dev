let name = "Chandra Shekhar";          
let age = 21;                  
let isStudent = true;          
let subjects = ["HTML", "CSS", "JS"];
let details = { city: "Delhi", grade: "A" }; 
let marks = null;            
let address;                
let summary = [
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
  { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
  { Label: "Details", Value: details, Type: typeof details },
  { Label: "Marks", Value: marks, Type: typeof marks }, 
  { Label: "Address", Value: address, Type: typeof address }
];
console.table(summary);