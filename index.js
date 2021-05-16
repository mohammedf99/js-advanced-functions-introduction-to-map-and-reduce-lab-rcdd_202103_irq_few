// Your code here

function mapToNegativize(srcArr) {
  
  let newArr = [];
  
  for (let i = 0; i < srcArr.length; i++) {
    newArr.push(srcArr[i] * -1);
  }
  
  return newArr;
}


function mapToDouble(srcArr) {
  
  let newArr = [];
  
  for (let i = 0; i < srcArr.length; i++) {
    newArr.push(srcArr[i] * 2);
  }
  
  return newArr;
}


function mapToSquare(srcArr) {
  let newArr = [];
  
  for (let i = 0; i < srcArr.length; i++) {
    newArr.push(srcArr[i] ** 2);
  }
  
  return newArr;
}


//reduce functions

function reduceToTotal(srcArr) {
  let total = 0;
  
  for (let i = 0; i < srcArr.length; i++){
    total += srcArr[i];
  }
  
  return total;
}

















