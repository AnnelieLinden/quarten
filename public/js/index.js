const content = document.querySelector('#content')


onhashchange = changePage;
changePage()
function changePage() {
  document.querySelector('main').textContent = ""

  console.log('my page will be', location.hash);
  if (location.hash === "#homepage") {
    renderHomepage();
  } else if (location.hash === "#sale") {
    renderSaleForm()
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
function renderSaleForm() {
  const form = document.createElement('form')
  form.setAttribute("id", "saleForm")
  const propertyLabel = document.createElement('label')
  propertyLabel.innerText = "Fastighetsbeteckning:"
  const propertyInput = document.createElement('input')
  const startBidLabel = document.createElement('label')
  startBidLabel.innerText = "Utgångspris:"
  const startBidInput = document.createElement('input')
  const buildYearLabel = document.createElement('label')
  buildYearLabel.innerText = "Byggnadsår:"
  const buildYearInput = document.createElement('input')
  const addressLabel = document.createElement('label')
  addressLabel.innerText = "Adress:"
  const addressInput = document.createElement('input')
  const spaceLabel = document.createElement('label')
  spaceLabel.innerText = "Bostadsyta:"
  const spaceInput = document.createElement('input')
  const amountRoomLabel = document.createElement('label')
  amountRoomLabel.innerText = "Antal rum:"
  const amountRoomInput = document.createElement('input')
  const infoLabel = document.createElement('label')
  infoLabel.innerText = "Info:"
  const infoInput = document.createElement('input')
  const apartmentType = document.createElement('input')
  const villaType = document.createElement('input')
  apartmentType.setAttribute('type', 'radio', 'name', 'propertyType', 'value', 'Bostadsrätt')
  const apartmentTypeLabel = document.createElement('label')
  apartmentTypeLabel.innerText = "Bostadsrätt:"
  villaType.setAttribute('type', 'radio', 'name', 'propertyType', 'value', 'Villa')
  const villaTypeLabel = document.createElement('label')
  villaTypeLabel.innerText = "Villa:"

  form.appendChild(propertyLabel)  
  form.appendChild(propertyInput)  
  form.appendChild(addressLabel)  
  form.appendChild(addressInput)
  form.appendChild(startBidLabel)
  form.appendChild(startBidInput)
  form.appendChild(spaceLabel)
  form.appendChild(spaceInput)
  form.appendChild(amountRoomLabel)
  form.appendChild(amountRoomInput)
  form.appendChild(buildYearLabel)
  form.appendChild(buildYearInput)
  form.appendChild(infoLabel)
  form.appendChild(infoInput)
  form.appendChild(apartmentTypeLabel)
  form.appendChild(apartmentType)
  form.appendChild(villaTypeLabel)  
  form.appendChild(villaType)
  content.appendChild(form)
  apartmentSaleForm()
  villaSaleForm()
}

function apartmentSaleForm() {
  const form = document.createElement('form')
  const label = document.createElement('form')
  label.innerText = "Lägenhet formulär"
  form.setAttribute('id', 'apartmentSaleForm')
  const elevatorLabel = document.createElement('label')
  const elevatorLabel1 = document.createElement('label')
  elevatorLabel.innerText = "Hiss:" 
  elevatorLabel1.innerText = "Ja" 
  const elevatorInput = document.createElement('input')
  elevatorInput.setAttribute('type', 'checkbox', 'name', 'elevator','value', 'True')
  const feeLabel = document.createElement('label')
  feeLabel.innerText = "Avgift:"
  const feeInput = document.createElement('input')
  const balconyLabel = document.createElement('label')
  balconyLabel.innerText = "Balkong:"
  const balconyInput = document.createElement('input')
  const balconyLabel1 = document.createElement('label')
  balconyLabel1.innerText = "Ja"
  balconyInput.setAttribute('type', 'checkbox', 'name', 'balcony', 'value', 'true')
  const floorLabel = document.createElement('label')
  floorLabel.innerText = "Våning:"
  const floorInput = document.createElement('input')
  const storeHouseLabel = document.createElement('label')
  storeHouseLabel.innerText = "Förråd:"
  const storeHouseInput = document.createElement('input')
  const parkingLabel = document.createElement('label')
  parkingLabel.innerText = "Parkering:"
  const parkingInput = document.createElement('input')
  const patioLabel = document.createElement('label')
  patioLabel.innerText = "Uteplats:"
  const patioInput = document.createElement('input')
  patioInput.setAttribute('type', 'checkbox', 'name', 'patio', 'value', 'true')
  
  form.appendChild(label)
  form.appendChild(feeLabel)
  form.appendChild(feeInput)
 
  form.appendChild(floorLabel)
  form.appendChild(floorInput)
  form.appendChild(storeHouseLabel)
  form.appendChild(storeHouseInput)
  form.appendChild(parkingLabel)
  form.appendChild(parkingInput)
  form.appendChild(elevatorLabel) 
  form.appendChild(elevatorInput)
  form.appendChild(balconyLabel)
  form.appendChild(balconyLabel)
  form.appendChild(balconyInput)
  form.appendChild(patioLabel)
  form.appendChild(patioInput)
  content.appendChild(form)
}

function villaSaleForm() {
  const form = document.createElement('form')
  form.setAttribute('id', 'villaSaleForm')
  const label = document.createElement('label')
  label.innerText = "Villa formulär"
  const lotLabel = document.createElement('label')
  lotLabel.innerText = "Tomtyta:"
  const lotInput = document.createElement('input')
  const garageLabel = document.createElement('label')
  const garageLabel1 = document.createElement('label')
  garageLabel.innerText = "Garage:"
  const garageInput = document.createElement('input')
  garageInput.setAttribute('type','checkbox','name','garage','value', 'true')
  const waterAndSewerLabel = document.createElement('label')
  waterAndSewerLabel.innerText = "Vatten/avlopp:"
  const waterAndSewerInput = document.createElement('input')
  const conectionLabel = document.createElement('label')
  conectionLabel.innerText = "Anslutningar:"
  const connectionInput = document.createElement('input')
  const heatingLabel = document.createElement('label')
  heatingLabel.innerText = "Uppvärming:"
  const heatingInput = document.createElement('input')
 
  form.appendChild(label)
  form.appendChild(lotLabel)
  form.appendChild(lotInput)
  form.appendChild(waterAndSewerLabel)
  form.appendChild(waterAndSewerInput)
  form.appendChild(conectionLabel)
  form.appendChild(connectionInput)
  form.appendChild(heatingLabel)
  form.appendChild(heatingInput)
  form.appendChild(garageLabel)
  form.appendChild(garageInput)
  content.appendChild(form)
}
