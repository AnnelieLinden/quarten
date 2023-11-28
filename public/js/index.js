const content = document.querySelector('#content')


onhashchange = changePage;
changePage()
function changePage() {
  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    renderHomepage();
  } else if (location.hash === "#sale") {
    document.querySelector('main').innerHTML = '<h1>This is sale page</h1>';
  } else if (location.hash === "#buy") {
    document.querySelector('main').innerHTML = '<h1>This is buy page</h1>';
  } else if (location.hash === "#login") {
    document.querySelector('main').innerHTML = '<h1>This is login page</h1>';
  } else {
    document.querySelector('main').innerHTML = '<h1>This is contact us page</h1>';
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


