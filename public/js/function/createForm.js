import createInputWhitLabel from "./createInput.js";
import { login } from "./server-request.js";
import createSellerVeiw from "./createSellerVeiw.js";

export default function createLoginForm() {
  const form = document.createElement("form");
  form.setAttribute('id', 'logInForm')
  const inputWhitLableArrUname = createInputWhitLabel("Användare");
  form.appendChild(inputWhitLableArrUname[0]);
  form.appendChild(inputWhitLableArrUname[1]);

  const inputWhitLableArrPass = createInputWhitLabel("Lösenord");
  inputWhitLableArrPass[1].setAttribute("type", "password");
  form.appendChild(inputWhitLableArrPass[0]);
  form.appendChild(inputWhitLableArrPass[1]);

  const button = document.createElement("button");
  const userName = inputWhitLableArrUname[1];
  const pass = inputWhitLableArrPass[1];

  button.innerText = "Logga in";
  button.addEventListener("click", async function (event) {
    event.preventDefault();
    const user = {
      "userName": userName.value,
      "pass": pass.value
    }
    createSellerVeiw(await login(user), form);
    if (!await login(user)) {
      alert("Fel lösenord eller användaranamn");
    }
  });

  form.appendChild(button);
  return form;
}

