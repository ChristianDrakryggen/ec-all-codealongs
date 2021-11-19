//Regular expressions

const message = "hello I like to say hello";

const myRegex = /Hello/i;

//return s an array with the matched values
console.log(message.match(myRegex));

//replace pattern in string with second given argument
console.log(message.replace(myRegex, "hi"));

const displayMessage = (username) => {
  const message = "Welcome my friend";
  const userRegex = /my friend/;
  if (!username) {
    console.log(message);
  } else {
    console.log(message.replace(userRegex, username));
  }
};

displayMessage("Christian");

//regex test method
const aRegExp = /Hello/;

const aString = "sdfsdfsdfhellosdfsdfsdf there!";

console.log(aRegExp.test(aString));

const testEmail = (email) => {
  const emailRegex = /@/;
  if (emailRegex.test(email)) {
    alert("valid email");
  } else {
    alert("not valid email");
  }
};

//testEmail("sdfsdfds@f.dfgdfg.dfgdfg");

//Errors
const checkSomething = (something) => {
  try {
    consol.log(something);
  } catch (err) {
    alert("Something went wrong");
  }
};

//checkSomething(234);

const onlyNumbers = (number) => {
  try {
    if (typeof number !== "number") {
      throw "That's not a number";
    } else {
      console.log("That's a number");
    }
  } catch (error) {
    console.log(error);
  }
};

onlyNumbers("678");

const isAnEmail = (email) => {
  const myExpression = /\S+@\S+\./;
  try {
    if (myExpression.test(email)) {
      alert("Your email is valid!");
    } else {
      throw "Not a valid email!";
    }
  } catch (error) {
    alert(error);
  }
};

isAnEmail("sak@dsakdl");
