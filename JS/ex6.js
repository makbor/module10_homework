let arr = [1, 1, 1, 1];
let bool;

for(let i = 1; i < arr.length; i++){
  if(arr[0] == arr[i]){
    bool = true;
    } else {
    bool = false;
    break;
    }
  } 
console.log(bool);