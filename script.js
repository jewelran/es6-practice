// back up parameter... 
function add (n1, n2){
    // n2 = n2 || 10;
    if (n2 == undefined) {
        n2 = 0;
    }
    return n1 + n2
}
const result = add(12, 54);
// console.log(result);

//template,,,,,,,,,,,,,,
const firstName = 'jewel';
const secondName = "rana";
const fullName = firstName + " " + secondName;
const fullName1 = `${firstName}  ${secondName} i am web deginer and web devoloper `

const fullName2 = `
${firstName}
${secondName}
hy i am jewel rana and u?
`
console.log(fullName2)

