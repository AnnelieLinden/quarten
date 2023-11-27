import { getAllProperties, addProperty, login, getOneProperty, updateUser } from "./function/server-request.js";

async function main() {
  document.getElementById("display").innerText = await getAllProperties();
  console.log(await getAllProperties());
  console.log(await login({ "userName": "Sakuya", "pass": "4444" }));
  console.log(await addProperty({ home: " house" }));
  console.log(await getOneProperty(1));
}
main()