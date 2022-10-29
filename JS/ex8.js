let map = new Map();

map.set("one", "red");
map.set("two", "green");
map.set("three", "white");

for (let item of map){
  console.log("Ключ — " + item[0] + ", значение – " + item[1]);  
}