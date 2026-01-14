

const numbers = [1,2,3,4]
 const newNumber = [...numbers,5,6,7]
console.log(newNumber)



//rest operator
function multiplay (...numbers){
    return numbers.reduce((total,num)=> total*num,1)
}
   console.log(multiplay(30,10))