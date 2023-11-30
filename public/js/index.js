import { getAllProperties, addProperty, addGenaralForm, login, getOneProperty, getAllGeneralMsg, getAllSaleMsg, addSaleForm, updateUser } from "./function/server-request.js";
import createForm from "./function/createForm.js";
import renderSaleForm from "./salepage.js";

const content = document.querySelector('#content')
let form;

onhashchange = changePage;
changePage()
function changePage() {
  document.querySelector('main').textContent = ""
  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    renderHomepage();
  } else if (location.hash === "#sale") {
    form = document.createElement('form')
    renderSaleForm(form)
  } else if (location.hash === "#buy") {
    document.querySelector('main');
  } else if (location.hash === "#login") {
    document.querySelector('main');
  } else {
    document.querySelector('main');
  }
}

function renderHomepage() {
  const saleButton = document.createElement('a')
  saleButton.setAttribute('href', '#sale')
  const linkText2 = document.createTextNode("Sälj");
  saleButton.appendChild(linkText2);
  content.appendChild(saleButton)

  const buyButton = document.createElement('a')
  buyButton.setAttribute('href', '#buy')
  const linkText = document.createTextNode("Köp");
  buyButton.appendChild(linkText);
  content.appendChild(buyButton)
}

