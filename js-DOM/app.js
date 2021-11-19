const testElement = document.getElementById("test");
const testElement2 = document.getElementById("test-2");
//console.log(testElement);

const changeTest = () => {
  testElement.innerHTML = "Hejsan hoppsan";
  testElement.style.color = "black";
};

const changeBgColor = (color) => {
  testElement2.style.backgroundColor = color;
};

const changeBgBack = () => {
  testElement2.style.backgroundColor = "yellow";
};

const submitForm = () => {
  const email = document.getElementById("email").value;
  const firstname = document.getElementById("first-name").value;
  alert(email + " " + firstname);
};

window.addEventListener("load", () => {
  testElement2.addEventListener("mouseover", () => changeBgColor("red"));
  testElement2.addEventListener("mouseout", changeBgBack);
});
