export default function createInputWhitLabel(idValue = "default") {
  const returnArr = [];
  const input = document.createElement("input");
  const lable = document.createElement("label");

  if (idValue === "default") {
    idValue += "_0"
  }

  lable.setAttribute("for", idValue);
  lable.innerText = idValue;
  input.id = idValue;

  returnArr.push(lable);
  returnArr.push(input);
  return returnArr;
}