

const numbers = [1,2,3,4]
 const newNumber = [...numbers,5,6,7]
console.log(newNumber)



//rest operator
function sum (...numbers){
    return numbers.reduce((total,num)=> total+num,0)
}
   console.log(sum(30,10.90))