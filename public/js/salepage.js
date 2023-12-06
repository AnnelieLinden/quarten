import Villa from "./villa.js"
import Apartment from "./apartment.js"
import { addSaleForm } from "./function/server-request.js";
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
let communityInput;
let communityInput2;
let communityInput3;
let communityInput4;

export default function renderSaleForm(saleForm) {
  saleForm.addEventListener('submit', saveSaleInfo)
  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText = "Är det dags att sälja din bostad?"
  saleForm.setAttribute("id", "saleForm")
  const startBidLabel = document.createElement('label')
  startBidLabel.innerText = "Utgångspris:"
  startBidInput = document.createElement('input')
  startBidInput.setAttribute('type', 'number')
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
  spaceInput.setAttribute('type', 'number')
  const amountRoomLabel = document.createElement('label')
  amountRoomLabel.innerText = "Antal rum:"
  amountRoomInput = document.createElement('input')
  amountRoomInput.setAttribute('type', 'number')
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
  fieldset.setAttribute('id', 'fieldsetSales')
  //____________________________________________________________________
  const communityLabel = document.createElement('label')
  const karlskronaLabel = document.createElement('label')
  const malmoLabel = document.createElement('label')
  const ronnebyLabel = document.createElement('label')
  const stockholmLabel = document.createElement('label')

  communityLabel.innerText = "Område:"

  karlskronaLabel.innerText = "Karlskrona:"
  communityInput = document.createElement('input')
  communityInput.setAttribute('type', 'radio')
  communityInput.setAttribute('name', 'community')
  communityInput.setAttribute('value', 'Karlskrona')

  malmoLabel.innerText = "Malmö:"
  communityInput2 = document.createElement('input')
  communityInput2.setAttribute('type', 'radio')
  communityInput2.setAttribute('name', 'community')
  communityInput2.setAttribute('value', 'Malmö')

  ronnebyLabel.innerText = "Ronneby:"
  communityInput3 = document.createElement('input')
  communityInput3.setAttribute('type', 'radio')
  communityInput3.setAttribute('name', 'community')
  communityInput3.setAttribute('value', 'Ronneby')

  stockholmLabel.innerText = "Stockholm:"
  communityInput4 = document.createElement('input')
  communityInput4.setAttribute('type', 'radio')
  communityInput4.setAttribute('name', 'community')
  communityInput4.setAttribute('value', 'Stockholm')

  const fieldset20 = document.createElement('fieldset')
  fieldset20.setAttribute('id', 'fieldsetSales')
  //________________________________________________________________________________________________

  communityInput.setAttribute('id', 'community')
  buildYearInput.setAttribute('id', 'built')
  amountRoomInput.setAttribute('id', 'rooms')
  spaceInput.setAttribute('id', 'kvm')
  startBidInput.setAttribute('id', 'startBid')
  addressInput.setAttribute('id', 'address')
  apartmentType.setAttribute('id', 'apartment')
  villaType.setAttribute('id', 'villa')
  infoInput.setAttribute('id', 'info')

  saleForm.appendChild(pTag)
  fieldset.appendChild(apartmentTypeLabel)
  fieldset.appendChild(apartmentType)
  fieldset.appendChild(villaTypeLabel)
  fieldset.appendChild(villaType)
  saleForm.appendChild(fieldset)
  saleForm.appendChild(addressLabel)
  saleForm.appendChild(addressInput)
  saleForm.appendChild(communityLabel)
  fieldset20.appendChild(karlskronaLabel)
  fieldset20.appendChild(communityInput)
  fieldset20.appendChild(malmoLabel)
  fieldset20.appendChild(communityInput2)
  fieldset20.appendChild(ronnebyLabel)
  fieldset20.appendChild(communityInput3)
  fieldset20.appendChild(stockholmLabel)
  fieldset20.appendChild(communityInput4)
   saleForm.appendChild(fieldset20)
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
  villaSaleForm(saleForm, lotInput, garageInput, waterAndSewerInput, connectionInput, heatingInput)
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
  feeInput.setAttribute('type', 'number')
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
  floorInput.setAttribute('type', 'number')
  const storeHouseLabel = document.createElement('label')
  storeHouseLabel.innerText = `Kryssa om följande finns
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
  fieldset1.setAttribute('id', 'fieldsetSales')

  floorInput.setAttribute('id', 'floor')
  elevatorInput.setAttribute('id', 'elevator')
  parkingInput.setAttribute('id', 'parking')
  balconyInput.setAttribute('id', 'balcony')
  storeHouseInput.setAttribute('id', 'storage')
  feeInput.setAttribute('id', 'fee')
  patioInput.setAttribute('id', 'patio')

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
  lotInput.setAttribute('type', 'number')
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
  fieldset2.setAttribute('id', 'fieldsetSales')
  const submitbtn = document.createElement('input')
  submitbtn.setAttribute('type', 'submit')
  submitbtn.setAttribute('value', 'Skicka till mäklare')

  lotInput.setAttribute('id', 'lot')
  garageInput.setAttribute('id', 'garage')
  waterAndSewerInput.setAttribute('id', 'wAndS')
  connectionInput.setAttribute('id', 'connections')
  heatingInput.setAttribute('id', 'heating')

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
}

function saveSaleInfo(event) {
  event.preventDefault()
  const savedSales = allValues(event.target.elements)
  addSaleForm(savedSales);
  console.log(savedSales)

}

function allValues(elements) {
  elements.community.value
  elements.villa.value
  elements.apartment.value
  elements.fee.value
  elements.balcony.value
  elements.floor.value
  elements.elevator.value
  elements.storage.value
  elements.parking.value
  elements.patio.Valie
  elements.address.value
  elements.startBid.value
  elements.kvm.value
  elements.rooms.value
  elements.built.value
  elements.info.value
  elements.lot.value
  elements.garage.value
  elements.wAndS.value
  elements.connections.value
  elements.heating.Value

  if (apartmentType.checked) {
    return new Apartment(fee.value, balcony.value, floor.value, elevator.value, storage.value, parking.value, patio.value, address.value, community.value, startBid.value, kvm.value, built.value, rooms.value, info.value)
  } else if (villaType.checked) {
    return new Villa(lot.value, garage.value, wAndS.value, connections.value, heating.value, address.value, community.Value, startBid.value, kvm.value, built.value, rooms.value, info.value)
  }
}

