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
    textHomepage();
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

  function textHomepage() {
    const homepageBr = document.createElement('br');
    const homeSection = document.createElement('section');
    const homeSection2 = document.createElement('section');
    const homePtext = document.createElement('homePtext');
    const homeP2text = document.createElement('homeP2text');
    homeSection.setAttribute('id', 'homeSection');
    homeSection2.setAttribute('id', 'homeSection2');
    homepageBr.setAttribute('id', 'homepageBr');
    homePtext.setAttribute('id', 'homePtext');
    homeP2text.setAttribute('id', 'homeP2text');
    homePtext.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    homeP2text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    homeSection.appendChild(homePtext);
    homeSection.appendChild(homepageBr);
    content.appendChild(homeSection);
    content.appendChild(homepageBr);
    homeSection2.appendChild(homeP2text);
    homeSection2.appendChild(homepageBr);
    content.appendChild(homeSection2);
    content.appendChild(homepageBr);
  }


