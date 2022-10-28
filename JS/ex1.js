let variable = prompt('Введите значение');
variable = + variable;

if (typeof variable === 'number' && !isNaN(variable)){
  if (variable === 0){
  console.log(variable);
  }else if (variable % 2 === 0){
    console.log('Это число четное');
  } else {
    console.log('Это число нечетное');
  }
} else {
  console.log('Упс, кажется, вы ошиблись');  
}