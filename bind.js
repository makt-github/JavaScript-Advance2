
const simpleOne = {
    firstName : 'Kadir',
    lastName : 'Tayef',
    salary : 20000,
    getFullName : function(){
       return this.firstName + this.lastName ;
    },
    chargeSalary : function(amount){
        this.salary = this.salary - amount ;
        return this.salary ;
    }

}

const perfectOne = {
    firstName : 'Rafid',
    lastName : 'Rahman',
    salary : 22000
}

const niceOne = {
    firstName : 'Nayeem',
    lastName : 'Islam',
    salary: 25000
}

// How to use one object method to other using Bind process

// const perfectChargeSalary = simpleOne.chargeSalary.bind(perfectOne);
// perfectChargeSalary(2000);
// console.log(perfectOne.salary);
// perfectChargeSalary(3000);
// console.log(perfectOne.salary);

const niceChargeSalary = simpleOne.chargeSalary.bind(niceOne);
niceChargeSalary(5500);
console.log(niceOne.salary);
