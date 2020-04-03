
const simpleOne = {
    firstName : 'Kadir',
    lastName : 'Tayef',
    salary : 20000,
    getFullName : function(){
       return this.firstName + this.lastName ;
    },
    chargeSalary : function(amount,tips,vat){
        console.log(this);
        this.salary = this.salary - amount - tips - vat ;
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

/// How use apply
/**
 * call(objectName,[that Function of that object's parameter])
 * see the following...
 * 
 */

 //simpleOne.chargeSalary.apply(perfectOne,[1500]);
 simpleOne.chargeSalary.apply(perfectOne,[2000,500,20]);
 console.log(perfectOne.salary);


 simpleOne.chargeSalary.apply(niceOne,[2500,250,100]);
 console.log(niceOne.salary);