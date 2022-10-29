let arr = [NaN, 3, 7, 7, 4, 0, null, "sda", 0];
let a = 0;
let b = 0;
let c = 0;

for(let i = 0; i < arr.length; i++){
  if (arr[i] === 0 ){
    c++;
  }else {
    if (arr[i] != null && arr[i] % 2 == 0){
      a++
    } else if (arr[i] % 2 == 1){
      b++
    }
  }
}
console.log("В этом массиве – " + a + " четных элементов");
console.log("В этом массиве – " + b + " нечетных элементов");
console.log("Нулевых элементов – " + c);