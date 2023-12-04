import { getAllProperties, addProperty, addGenaralForm, login, getOneProperty, getAllGeneralMsg, getAllSaleMsg, addSaleForm, updateUser } from "./function/server-request.js";
import createForm from "./function/createForm.js";
import generalForm from "./generalForm.js";
import renderSaleForm from "./salepage.js";
import Villa from "./villa.js"
import findProperty from "./findProperty.js"
import createLoginForm from "./function/createForm.js";
import aboutUs from "./about-us.js";
//import footer from "./footer.js"

const content = document.querySelector('#content')
//const footerElement = document.querySelector('#footer')



onhashchange = changePage;

changePage()
function changePage() {
  document.querySelector('main').textContent = ""
  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    renderHomepage();
  } else if (location.hash === "#sale") {
    const saleForm = document.createElement('form')
    renderSaleForm(saleForm)
  } else if (location.hash === "#buy") {
    const buyForm = document.createElement('form')
    findProperty(buyForm)
  } else if (location.hash === "#login") {
    document.querySelector('main').appendChild(createForm());

  } else if (location.hash === "#contact-us") {
    generalForm()
 
  } else if (location.hash === "#about-us") {
    aboutUs()
  }
  else {
    document.querySelector('main');
  }
}

function renderHomepage() {
  const saleButton = document.createElement('a')
  saleButton.setAttribute('href', '#sale')
  const linkText2 = document.createTextNode("SÄLJ");
  saleButton.appendChild(linkText2);
  content.appendChild(saleButton)

  const buyButton = document.createElement('a')
  buyButton.setAttribute('href', '#buy')
  const linkText = document.createTextNode("KÖP");
  buyButton.appendChild(linkText);
  content.appendChild(buyButton)
}

