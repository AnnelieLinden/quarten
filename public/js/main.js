import { getAllProperties, addProperty, login, getOneProperty, getAllGeneralMsg, getAllSaleMsg, updateUser } from "./function/server-request.js";

async function main() {
  console.log(await getAllProperties());
  console.log(await login({ "userName": "Sakuya", "pass": "4444" }));
  //console.log(await addProperty({ home: " house" }));
  console.log(await getOneProperty(2));
  console.log(await getAllGeneralMsg());
  console.log(await getAllSaleMsg());
}
main()