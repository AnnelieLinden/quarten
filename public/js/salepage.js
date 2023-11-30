import Property from "./property.js"
import Villa from "./villa.js"
import Apartment from "./apartment.js"
let apartmentType;
let villaType;
let addressInput;
let startBidInput;
let spaceInput;
let amountRoomInput;
let buildYearInput;
let infoInput;
let feeInput;
let balconyInput;
let floorInput;
let elevatorInput;
let storeHouseInput;
let parkingInput;
let patioInput;
let lotInput;
let garageInput;
let waterAndSewerInput;
let connectionInput;
let heatingInput;

export default function renderSaleForm(saleForm) {
  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText="Är det dags att sälja din bostad?"
  saleForm.setAttribute("id", "saleForm")
  const startBidLabel = document.createElement('label')
  startBidLabel.innerText = "Utgångspris:"
  startBidInput = document.createElement('input')
  const buildYearLabel = document.createElement('label')
  buildYearLabel.innerText = "Byggnadsår:"
   buildYearInput = document.createElement('input')
  buildYearInput.setAttribute('type', 'number')
  const addressLabel = document.createElement('label')
  addressLabel.innerText = "Adress:"
  addressInput = document.createElement('input')
  const spaceLabel = document.createElement('label')
  spaceLabel.innerText = "Bostadsyta:"
  spaceInput = document.createElement('input')
  const amountRoomLabel = document.createElement('label')
  amountRoomLabel.innerText = "Antal rum:"
  amountRoomInput = document.createElement('input')
  const infoLabel = document.createElement('label')
  infoLabel.innerText = "Info:"
  infoInput = document.createElement('input')
  infoInput.setAttribute('id', 'infoInput')
  apartmentType = document.createElement('input')
  villaType = document.createElement('input')
  apartmentType.setAttribute('type', 'radio')
  apartmentType.setAttribute('name', 'propertyType')
  apartmentType.setAttribute('value', 'Bostadsrätt')
  const apartmentTypeLabel = document.createElement('label')
  apartmentTypeLabel.innerText = "Bostadsrätt:"
  villaType.setAttribute('type', 'radio')
  villaType.setAttribute('name', 'propertyType')
  villaType.setAttribute('value', 'Villa')
  const villaTypeLabel = document.createElement('label')
  villaTypeLabel.innerText = "Villa:"
  const fieldset = document.createElement('fieldset')
  saleForm.appendChild(pTag)
  fieldset.appendChild(apartmentTypeLabel)
  fieldset.appendChild(apartmentType)
  fieldset.appendChild(villaTypeLabel)
  fieldset.appendChild(villaType)
  saleForm.appendChild(fieldset)
  saleForm.appendChild(addressLabel)
  saleForm.appendChild(addressInput)
  saleForm.appendChild(startBidLabel)
  saleForm.appendChild(startBidInput)
  saleForm.appendChild(spaceLabel)
  saleForm.appendChild(spaceInput)
  saleForm.appendChild(amountRoomLabel)
  saleForm.appendChild(amountRoomInput)
  saleForm.appendChild(buildYearLabel)
  saleForm.appendChild(buildYearInput)
  saleForm.appendChild(infoLabel)
  saleForm.appendChild(infoInput)
  content.appendChild(saleForm)

  apartmentSaleForm(saleForm, feeInput, balconyInput, floorInput, elevatorInput, storeHouseInput, parkingInput, patioInput)
  villaSaleForm(saleForm,lotInput, garageInput, waterAndSewerInput, connectionInput, heatingInput)
}

function apartmentSaleForm(saleForm) {
  const label = document.createElement('label')
  label.setAttribute('id', 'apartmentTitel')
  label.innerText = "Bostadsrätt:"
  const elevatorLabel = document.createElement('label')
  elevatorLabel.innerText = "Hiss:"
  elevatorInput = document.createElement('input')
  elevatorInput.setAttribute('type', 'checkbox')
  elevatorInput.setAttribute('name', 'elevator')
  elevatorInput.setAttribute('value', 'checked')
  const feeLabel = document.createElement('label')
  feeLabel.innerText = "Avgift:"
  feeInput = document.createElement('input')
  const balconyLabel = document.createElement('label')
  balconyLabel.innerText = "Balkong:"
  balconyInput = document.createElement('input')
  const balconyLabel1 = document.createElement('label')
  balconyLabel1.innerText = "Ja"
  balconyInput.setAttribute('type', 'checkbox')
  balconyInput.setAttribute('name', 'balcony')
  balconyInput.setAttribute('value', 'checked')
  const floorLabel = document.createElement('label')
  floorLabel.innerText = "Våning:"
  floorInput = document.createElement('input')
  const storeHouseLabel = document.createElement('label')
  storeHouseLabel.innerText = `Kryssa i rutan om följande finns
  Förråd:`
  storeHouseInput = document.createElement('input')
  storeHouseInput.setAttribute('type', 'checkbox')
  storeHouseInput.setAttribute('name', 'storeHouse')
  storeHouseInput.setAttribute('value', 'checked')
  const parkingLabel = document.createElement('label')
  parkingLabel.innerText = "Parkering:"
  parkingInput = document.createElement('input')
  parkingInput.setAttribute('type', 'checkbox')
  parkingInput.setAttribute('name', 'parking')
  parkingInput.setAttribute('value', 'checked')
  const patioLabel = document.createElement('label')
  patioLabel.innerText = "Uteplats:"
  patioInput = document.createElement('input')
  patioInput.setAttribute('type', 'checkbox')
  patioInput.setAttribute('name', 'patio')
  patioInput.setAttribute('value', 'checked')
  const fieldset1 = document.createElement('fieldset')
  saleForm.appendChild(label)
  saleForm.appendChild(feeLabel)
  saleForm.appendChild(feeInput)
  saleForm.appendChild(floorLabel)
  saleForm.appendChild(floorInput)
  fieldset1.appendChild(storeHouseLabel)
  fieldset1.appendChild(storeHouseInput)
  fieldset1.appendChild(parkingLabel)
  fieldset1.appendChild(parkingInput)
  fieldset1.appendChild(elevatorLabel)
  fieldset1.appendChild(elevatorInput)
  fieldset1.appendChild(balconyLabel)
  fieldset1.appendChild(balconyInput)
  fieldset1.appendChild(patioLabel)
  fieldset1.appendChild(patioInput)
  saleForm.appendChild(fieldset1)
  content.appendChild(saleForm)
}
function villaSaleForm(saleForm) {
  const label = document.createElement('label')
  label.innerText = "Villa:"
  label.setAttribute('id', 'villaTitel')
  const lotLabel = document.createElement('label')
  lotLabel.innerText = "Tomtyta:"
  lotInput = document.createElement('input')
  const garageLabel = document.createElement('label')
  garageLabel.innerText = `Kryssa i rutan om följande finns
  Garage:`
  garageInput = document.createElement('input')
  garageInput.setAttribute('type', 'checkbox')
  garageInput.setAttribute('name', 'garage')
  garageInput.setAttribute('value', 'checked')
  const waterAndSewerLabel = document.createElement('label')
  waterAndSewerLabel.innerText = "Vatten/avlopp:"
  waterAndSewerInput = document.createElement('input')
  const conectionLabel = document.createElement('label')
  conectionLabel.innerText = "Anslutningar:"
  connectionInput = document.createElement('input')
  const heatingLabel = document.createElement('label')
  heatingLabel.innerText = "Uppvärming:"
  heatingInput = document.createElement('input')
  const fieldset2 = document.createElement('fieldset')
  const submitbtn = document.createElement('input')
  submitbtn.setAttribute('type', 'submit', 'value', 'Skicka till mäklare')
 
  
  saleForm.appendChild(label)
  saleForm.appendChild(lotLabel)
  saleForm.appendChild(lotInput)
  saleForm.appendChild(waterAndSewerLabel)
  saleForm.appendChild(waterAndSewerInput)
  saleForm.appendChild(conectionLabel)
  saleForm.appendChild(connectionInput)
  saleForm.appendChild(heatingLabel)
  saleForm.appendChild(heatingInput)
  fieldset2.appendChild(garageLabel)
  fieldset2.appendChild(garageInput)
  saleForm.appendChild(fieldset2)
  saleForm.appendChild(submitbtn)
  content.appendChild(saleForm)
  sendToBroker()
}
function sendToBroker(submitbtn) {
  submitbtn
  saveSaleInfo()
}
function saveSaleInfo() {
  if (apartmentType==checked) {
    new Apartment(feeInput.value, balconyInput.value, floorInput.value, elevatorInput.value, storeHouseInput.value, parkingInput.value, patioInput.value, addressInput.value, startBidInput.value, spaceInput.value, buildYearInput.value, amountRoomInput.value, infoInput.value)
  } else if (villaType==checked) {
    new Villa(lotInput.value, garageInput.value, waterAndSewerInput.value, connectionInput.value, heatingInput.value, addressInput, startBidInput, spaceInput, amountRoomInput, buildYearInput, infoInput)
  }
  return Apartment(), Villa()
} 

