import { getAllProperties, addProperty, addGenaralForm, login, getOneProperty, getAllGeneralMsg, getAllSaleMsg, addSaleForm, updateUser } from "./function/server-request.js";
import createForm from "./function/createForm.js";

async function main() {
  console.log(await getAllProperties());
  console.log(await login({ "userName": "Sakuya", "pass": "4444" }));
  console.log(await login({ "userName": "Yukina", "pass": "4444" }));
  console.log(await login({ "userName": "Sakuya", "pass": "0000" }));
  //console.log(await addProperty({ home: " house" }));
  await addSaleForm({
    "phone": "07000000",
    "email": "ex.ex@ex.ex",
    "firstName": "____",
    "lastName": "-----",
    "home": "house"
  })
  await addGenaralForm({
    "firstName": "____",
    "lastName": "-----",
    "req": "xxx"
  })
  console.log(await getOneProperty(2));
  console.log(await getAllGeneralMsg());
  console.log(await getAllSaleMsg());
  document.body.appendChild(createForm());
}
main()