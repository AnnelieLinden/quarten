import createInputWhitLabel from "./createInput.js";
import { login } from "./server-request.js";
const content = document.querySelector('#content')
export default function createLoginForm(logInForm) {

  const inputWhitLableArrUname = createInputWhitLabel("userName");
  logInForm.appendChild(inputWhitLableArrUname[0]);
  logInForm.appendChild(inputWhitLableArrUname[1]);

  const inputWhitLableArrPass = createInputWhitLabel("pass");
  logInForm.appendChild(inputWhitLableArrPass[0]);
  logInForm.appendChild(inputWhitLableArrPass[1]);

  const button = document.createElement("button");
  const userName = inputWhitLableArrUname[1];
  const pass = inputWhitLableArrPass[1];

  button.innerText = "Submit";
  button.addEventListener("click", async function (event) {
    event.preventDefault();
    const user = {
      "userName": userName.value,
      "pass": pass.value
    }
    console.log(await login(user));
  });

  logInForm.appendChild(button);
  content.appendChild(logInForm)
  return logInForm;
}