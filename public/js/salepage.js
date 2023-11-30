import Property from "./property.js"
import Villa from "./villa.js"

export default function renderSaleForm(form) {
  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText="Är det dags att sälja din bostad?"
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
  buildYearInput.setAttribute('type', 'number')
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
  infoInput.setAttribute('id', 'infoInput')
  const apartmentType = document.createElement('input')
  const villaType = document.createElement('input')
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
  form.appendChild(pTag)
  fieldset.appendChild(apartmentTypeLabel)
  fieldset.appendChild(apartmentType)
  fieldset.appendChild(villaTypeLabel)
  fieldset.appendChild(villaType)
  form.appendChild(fieldset)
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
  content.appendChild(form)
  apartmentSaleForm(form)
  villaSaleForm(form)
}
function apartmentSaleForm(form) {
  const label = document.createElement('label')
  label.setAttribute('id', 'apartmentTitel')
  label.innerText = "Bostadsrätt:"
  const elevatorLabel = document.createElement('label')
  const elevatorLabel1 = document.createElement('label')
  elevatorLabel.innerText = "Hiss:"
  elevatorLabel1.innerText = "Ja"
  const elevatorInput = document.createElement('input')
  elevatorInput.setAttribute('type', 'checkbox')
  elevatorInput.setAttribute('name', 'elevator')
  elevatorInput.setAttribute('value', 'checked')
  const feeLabel = document.createElement('label')
  feeLabel.innerText = "Avgift:"
  const feeInput = document.createElement('input')
  const balconyLabel = document.createElement('label')
  balconyLabel.innerText = "Balkong:"
  const balconyInput = document.createElement('input')
  const balconyLabel1 = document.createElement('label')
  balconyLabel1.innerText = "Ja"
  balconyInput.setAttribute('type', 'checkbox')
  balconyInput.setAttribute('name', 'balcony')
  balconyInput.setAttribute('value', 'checked')
  const floorLabel = document.createElement('label')
  floorLabel.innerText = "Våning:"
  const floorInput = document.createElement('input')
  const storeHouseLabel = document.createElement('label')
  storeHouseLabel.innerText = `Kryssa i rutan om följande finns
  Förråd:`
  const storeHouseInput = document.createElement('input')
  storeHouseInput.setAttribute('type', 'checkbox')
  storeHouseInput.setAttribute('name', 'storeHouse')
  storeHouseInput.setAttribute('value', 'checked')
  const parkingLabel = document.createElement('label')
  parkingLabel.innerText = "Parkering:"
  const parkingInput = document.createElement('input')
  parkingInput.setAttribute('type', 'checkbox')
  parkingInput.setAttribute('name', 'parking')
  parkingInput.setAttribute('value', 'checked')
  const patioLabel = document.createElement('label')
  patioLabel.innerText = "Uteplats:"
  const patioInput = document.createElement('input')
  patioInput.setAttribute('type', 'checkbox')
  patioInput.setAttribute('name', 'patio')
  patioInput.setAttribute('value', 'checked')
  const fieldset1 = document.createElement('fieldset')
  form.appendChild(label)
  form.appendChild(feeLabel)
  form.appendChild(feeInput)
  form.appendChild(floorLabel)
  form.appendChild(floorInput)
  fieldset1.appendChild(storeHouseLabel)
  fieldset1.appendChild(storeHouseInput)
  fieldset1.appendChild(parkingLabel)
  fieldset1.appendChild(parkingInput)
  fieldset1.appendChild(elevatorLabel)
  fieldset1.appendChild(elevatorInput)
  fieldset1.appendChild(balconyLabel)
  fieldset1.appendChild(balconyLabel)
  fieldset1.appendChild(balconyInput)
  fieldset1.appendChild(patioLabel)
  fieldset1.appendChild(patioInput)
  form.appendChild(fieldset1)
  content.appendChild(form)
}
function villaSaleForm(form) {
  const label = document.createElement('label')
  label.innerText = "Villa:"
  label.setAttribute('id', 'villaTitel')
  const lotLabel = document.createElement('label')
  lotLabel.innerText = "Tomtyta:"
  const lotInput = document.createElement('input')
  const garageLabel = document.createElement('label')
  const garageLabel1 = document.createElement('label')
  garageLabel.innerText = `Kryssa i rutan om följande finns
  Garage:`
  const garageInput = document.createElement('input')
  garageInput.setAttribute('type', 'checkbox')
  garageInput.setAttribute('name', 'garage')
  garageInput.setAttribute('value', 'checked')
  const waterAndSewerLabel = document.createElement('label')
  waterAndSewerLabel.innerText = "Vatten/avlopp:"
  const waterAndSewerInput = document.createElement('input')
  const conectionLabel = document.createElement('label')
  conectionLabel.innerText = "Anslutningar:"
  const connectionInput = document.createElement('input')
  const heatingLabel = document.createElement('label')
  heatingLabel.innerText = "Uppvärming:"
  const heatingInput = document.createElement('input')
  const fieldset2 = document.createElement('fieldset')
  const submitbtn = document.createElement('input')
  submitbtn.setAttribute('type', 'submit', 'value', 'Skicka till mäklare')
  form.appendChild(label)
  form.appendChild(lotLabel)
  form.appendChild(lotInput)
  form.appendChild(waterAndSewerLabel)
  form.appendChild(waterAndSewerInput)
  form.appendChild(conectionLabel)
  form.appendChild(connectionInput)
  form.appendChild(heatingLabel)
  form.appendChild(heatingInput)
  fieldset2.appendChild(garageLabel)
  fieldset2.appendChild(garageInput)
  form.appendChild(fieldset2)
  form.appendChild(submitbtn)
  content.appendChild(form)
}
