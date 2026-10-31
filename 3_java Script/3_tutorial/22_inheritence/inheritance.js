 /* parents class  */

class Animal{
    constructor(name){ // create contructor
    this.name=name;
    }

    same(){   // create method
    console.log(`every animal hai 4 legs`)
    }

     type(){ // create method
        console.log(`My animal is ${this.name}`)
     }
}

let animal=new Animal('Lion');// create object
animal.same();
animal.type();

/* child class */

class Lion extends Animal{ //create cild class

    constructor(name,breed){
        super(name);// call the parents class constructor
        this.breed=breed;
    }
  eat(){
    console.log(`${this.name} eats meet and the breed type is ${this.breed} `)
  }
}

let lion=new Lion('sera','chinige');
lion.same();
lion.type();
lion.eat();
