let salary = 60000;
let increment = 10;
for(let year =1;year<=5;year++){
    salary += (salary * increment)/100;

    salary = Math.round(salary);
    console.log(salary);
}