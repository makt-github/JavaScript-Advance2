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

const Name = simpleOne.firstName;
console.log(Name);

console.log(simpleOne.getFullName) ;


simpleOne.chargeSalary(2500);
simpleOne.chargeSalary(1500);
console.log(simpleOne.salary);


