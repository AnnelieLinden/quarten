export default function createInputWhitLabel(idValue = "default") {
  const returnArr = [];
  const input = document.createElement("input");
  const lable = document.createElement("label");
  if (idValue === "default") {
    idValue += "_0"
  }
  lable.setAttribute("name", idValue);
  input.id = idValue;
  returnArr.push(input);
  returnArr.push(lable);
  return returnArr;
}