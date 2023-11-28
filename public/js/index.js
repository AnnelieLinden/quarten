const content = document.querySelector('#content')


onhashchange = changePage;
changePage()
function changePage() {
  document.querySelector('main').textContent = ""

  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    renderHomepage();
  } else if (location.hash === "#sale") {
    renderSalePage()
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
function renderSalePage() {
  const form = document.createElement('form')
  form.setAttribute("id", "saleForm")
  const propertyLabel = document.createElement('label')
  propertyLabel.innerText = "Fastighetsbeteckning:"
  const propertyInput = document.createElement('input')
  const buildingTypeLabel = document.createElement('label')
  buildingTypeLabel.innerText = "Bostadstyp:"
  const apartmentType = document.createElement('input')
  const villaType = document.createElement('input')
  apartmentType.setAttribute('type', 'radio', 'name', 'apartmentType', 'value', 'Bostadsrätt')
  //const apartmentTypeLabel = cosument.createElement('label')
  //apartmentTypeLabel.innerText = "Bostadsrätt"
  villaType.setAttribute('type', 'radio', 'name', 'villaType', 'value', 'Villa')
  //const villaTypeLabel = cosument.createElement('label')
  //vilaTypeLabel.innerText = "Villa"
  const spaceLabel = document.createElement('label')
  spaceLabel.innerText = "Bostadsyta:"
  const spaceInput = document.createElement('input')
  const elevatorLabel = document.createElement('label')
  elevatorLabel.innerText = "Hiss" 
  const elevatorInput = document.createElement('input')
  elevatorInput.setAttribute('type', 'radio', 'name', 'elevator','value', 'Ja')
  elevatorInput.setAttribute('type', 'radio', 'name', 'elevator','value', 'Nej')
  form.appendChild(propertyLabel)  
  form.appendChild(propertyInput)  
  form.appendChild(buildingTypeLabel)
  form.appendChild(apartmentType)
  form.appendChild(villaType)
  //form.appendChild(apartmentTypeLabel)
  //form.appendChild(villaTypeLabel)
  form.appendChild(spaceLabel)
  form.appendChild(spaceInput)
  form.appendChild(elevatorLabel) 
  form.appendChild(elevatorInput)

  content.appendChild(form)
}


