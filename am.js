//Day 13 exceptional handling in JS
try {
  let a = 5/ 0;
  console.log(a);
} catch(e) {
  console.log(`${e}`); //`${e}` this code use for exceptional handling in JS
} finally {
  console.log("you are right");
}


try {
  let a =10/5;
  console.log(a);
} catch(e){
  console.log(e);
}

try {
  let age = 12;
  if(age < 18) {
    throw new error ("your age above +18");
  }
  console.log(age);
} catch(e){
  console.log(e);
}

