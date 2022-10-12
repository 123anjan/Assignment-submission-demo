
function findLargest(num1, num2) {

    if(num1 > num2){
      console.log(`${num1} is the largest number`)
    }
    else if (num2 > num1){
      console.log(`${num2} the largest number`)
    }
    else{
      console.log(`${num1} is equal to ${num2}`)
    }
  }
  
  findLargest(21,45) //"45 the largest number"
   findLargest(34,18) //"34 is the largest number"
  findLargest(41,41) //"41 is equal to 41"