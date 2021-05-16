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

function reduceToTotal(srcArr, startingPoint) {
  let total;
  if (startingPoint === undefined) {
    total = 0;
  } else {
    total = startingPoint;
  }
  
  for (let i = 0; i < srcArr.length; i++){
    total += srcArr[i];
  }
  
  return total;
}

















