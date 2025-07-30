// let obj={
//     a:1,
//     b:"harry"
// }

// console.log(obj);

// let animal={
//     eats:true
// }

// let rabbit={
//     jump:true
// }

// rabbit.__proto__=animal;

class Animal {
    constructor(name) {
        this.name=name;
        console.log("Object is Created..");
        
    }
    eats(){
        console.log("Eats");
    }
    jump(){
        console.log("Jumps");
        
    }
}

let a=new Animal("Bunny");
console.log(a);

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Lion Object is Created");
    }
}

let l=new Lion("Chiku");
console.log(l);
