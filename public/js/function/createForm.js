import createInputWhitLabel from "./createInput.js";
import { login } from "./server-request.js";

export default function createLoginForm() {
  const form = document.createElement("form");
  var inputWhitLableArrUname = createInputWhitLabel("userName");
  form.appendChild(inputWhitLableArrUname[0]);
  form.appendChild(inputWhitLableArrUname[1]);


  var inputWhitLableArrPass = createInputWhitLabel("pass");
  form.appendChild(inputWhitLableArrPass[0]);
  form.appendChild(inputWhitLableArrPass[1]);


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
  })
  form.appendChild(button);
  return form;
}