/** create constructor */
function Student(name,age,branch,roll){
    this.name=name;
    this.age=age;
    this.branch=branch;
    this.roll=roll;
}

/** call constructor */
let student1=new Student('ambuj','21','cse','04')
console.log(student1);

let student2=new Student("akash","17",'cse','05');
console.log(student2);



/**now we can use ES6 convention */

class Animal{ //define a classs
constructor(name){ //create constructor
    this.name=name;
}}

let animal=new Animal('dog');
console.log(animal);