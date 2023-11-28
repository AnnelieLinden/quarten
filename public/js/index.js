
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
  const buyButton = document.createElement('button');
  const saleButton = document.createElement('button');
  

}



