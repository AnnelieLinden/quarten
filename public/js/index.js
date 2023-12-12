
import createForm from "./function/createForm.js";
import generalForm from "./generalForm.js";
import renderSaleForm from "./salepage.js";
import findProperty from "./findProperty.js"
import createLoginForm from "./function/createForm.js";
import aboutUs from "./about-us.js";
const content = document.querySelector('#content')

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
  const homeSection = document.createElement('section');
  homeSection.setAttribute('id', 'homeSection')
  const homeTitel1 = document.createElement('h3')
  const homeTitel2 = document.createElement('h3')
  const hometext1 = document.createElement('p');
  const hometext2 = document.createElement('p');
  const homeDiv1 = document.createElement('div')
  const homeDiv2 = document.createElement('div')
  homeDiv1.setAttribute('id', 'homeDiv1')
  homeDiv2.setAttribute('id', 'homeDiv2')
  homeTitel1.innerText = "Vi erbjuder dig en trygg och säker bostadsförsäljning med våra smidiga försäljningspaket!"
  homeTitel2.innerText = "Bostäderna vi säljer är alltid besiktade!"
  hometext1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Kontakta oss om du vill veta hur vi kan göra
  din bostadsförsäljning smidigare!`;
  hometext2.innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. 
  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  
  Kontakta oss för mer information om vår policy.`
  homeDiv1.appendChild(homeTitel1)
  homeDiv1.appendChild(hometext1)
  homeDiv2.appendChild(homeTitel2)
  homeDiv2.appendChild(hometext2)
  homeSection.appendChild(homeDiv1);
  homeSection.appendChild(homeDiv2);
  content.appendChild(homeSection);
}


