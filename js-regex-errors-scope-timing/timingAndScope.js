//Scope

//global
const globalVariable = "I'm global";

//local (function)
const logLocalVar = () => {
  const localVariable = "I'm local";
  console.log(localVariable);
  console.log(globalVariable);
};

console.log(globalVariable);

logLocalVar();

//block
for (let index = 0; index < 5; index++) {
  let blockVariable = "I'm block local";
  console.log(blockVariable);
  console.log(globalVariable);
}

//console.log(blockVariable);

//Timing

//run code after a certain time has gone by specified in milliseconds
/*setTimeout(() => {
  alert("3 seconds has gone by");
}, 5000);*/

//Run code over and over again with a time interval specified in milliseconds
const myInterval = setInterval(() => {
  alert("Hejsan");
}, 3000);

const stopInterval = () => {
  clearInterval(myInterval);
};
