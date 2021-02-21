
class Parent{
    constructor(){
        this.fatherName = 'abul kashem'
    }
}

class Student  extends Parent{
    constructor(sId, sName){
        super()
        this.studentId = sId;
        this.name = sName;
    }
    getFatherName(){
        return this.fatherName 
    }
}
const student1 = new Student(12, 'jewel rana');
const student2 = new Student(15, 'suhel rana');
console.log(student1.getFatherName(), student2.getFatherName());
console.log(student1, student2);
