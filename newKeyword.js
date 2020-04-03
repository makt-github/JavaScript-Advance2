
class Person{
    constructor(firstName,lastName,age,gender){
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.age = age ;
        this.gender = gender ;
    }
}

const tayef = new Person("MD ABDUL KADIR","TAYEF",24, "MALE");
const rafid = new Person("Rafidur","Rahman",25,"Male");
const afsana = new Person("AFSANA","BEGUM", 24,"FEMALE");
const faiza = new Person("FAIZA","CHOWDHURY",20,"FEMALE");

console.log(tayef);
console.log(afsana);
console.log(faiza);
console.log(rafid);


function person1(firstname,lastname,salry){
    this.firstName = firstname ;
    this.lastName  = lastname ;
    this.salry = salry ;
}

const grandpa = new person1("Grand","Papa",1150);
console.log(grandpa);
