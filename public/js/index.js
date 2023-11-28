
onhashchange = changePage;
changePage()

function changePage() {
  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    document.querySelector('main').innerHTML = `<h1>This is homepage</h1>`;
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
  const content = document.querySelector('#content')
  const buyButton = document.createElement('a')
  buyButton = document.setAttribute('href,')
  buyButton.innerHTML= 'Köp'
  const form1 = document.createElement('form')
  content.appendChild(buyButton)

}


/* 

  const saleButton = document.createElement('a').addEventListener('click', function ());
  saleButton.innerHTML = 'Sälj'
  const form2 = document.createElement('form')


  content.appendChild(saleButton)*/ 
