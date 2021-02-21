//22-7 Class, constructor, create object from class
class student {
    constructor( sid, sName){
        this.id = sid;
        this.name = sName;
        this.schoolName = 'dhaka university'
    }
}
const student1 = new student( 12, 'jewelrana');
const student2 = new student( 13, 'suhel rana');
const student3 = new student( 14, ' rana');
console.log(
    student1.name, student2.name, student3.name
);