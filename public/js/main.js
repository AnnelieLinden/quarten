import { getAllProperties, addProperty, login, getOneUser, updateUser } from "./function/server-request.js";

async function main() {
  document.getElementById("display").innerText = await getAllProperties();
  await login();
}
main()