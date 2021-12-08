const sendMessage = () => {
  const email = document.querySelector("#email").value;
  const firstname = document.querySelector("#firstname").value;
  const message = document.querySelector("#message").value;
  const emailRegex = /\S+@\S+\./;
  const noHtmlRegex = /[</>]/;
  try {
    if (!emailRegex.test(email)) {
      throw "Incorrect email";
    }
    if (noHtmlRegex.test(email)) {
      throw "Incorrect email syntax";
    }
    if (noHtmlRegex.test(firstname)) {
      throw "Incorrect firstname";
    }
    if (noHtmlRegex.test(message)) {
      throw "Incorrect message";
    }
    showModal(firstname, message);
  } catch (error) {
    switch (error) {
      case "Incorrect email":
        document.querySelector("#email-error").innerHTML = error;
        setTimeout(() => {
          document.querySelector("#email-error").innerHTML = "";
        }, 2000);
        break;
      case "Incorrect email syntax":
        document.querySelector(
          "#email-error"
        ).innerHTML = `${error}, please avoid: <, /, or >`;
        setTimeout(() => {
          document.querySelector("#email-error").innerHTML = "";
        }, 2000);
        break;
      case "Incorrect firstname":
        document.querySelector(
          "#firstname-error"
        ).innerHTML = `${error}, please avoid: <, /, or >`;
        setTimeout(() => {
          document.querySelector("#firstname-error").innerHTML = "";
        }, 2000);
        break;
      case "Incorrect message":
        document.querySelector(
          "#message-error"
        ).innerHTML = `${error}, please avoid: <, /, or >`;
        setTimeout(() => {
          document.querySelector("#message-error").innerHTML = "";
        }, 2000);
        break;
      default:
        alert("something went wrong!");
    }
  }
};

const showModal = (firstname, message) => {
  document.querySelector("#modal").style.display = "flex";
  setTimeout(() => {
    document.querySelector("#modal").innerHTML = `
        <h2>Hi ${firstname}</h2>
        <p>Your message (${message.slice(0, 15)}...) has been received!</p>
        <p>We'll get back to you soon!</p>
        <button onclick="closeModal()">Close</button>
    `;
  }, 2000);
};

const closeModal = () => {
  document.querySelector("#email").value = "";
  document.querySelector("#firstname").value = "";
  document.querySelector("#message").value = "";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#modal").innerHTML = `<span class="loader"></span>`;
};
