export function appendSaleForm(saleForm) {
  saleForm.appendChild(createPTag());
  saleForm.appendChild(createBuildType());
  saleForm.appendChild(createAddress());
  saleForm.appendChild(createCommunity())
  saleForm.appendChild(createStartBid());
  saleForm.appendChild(createSpace());
  saleForm.appendChild(createAmountRoom())
  saleForm.appendChild(createBuildYear());
  saleForm.appendChild(createInfo());
  content.appendChild(saleForm);
}
export function createCommunity() {
  const communityPTag = document.createElement('p')
  const karlskronaLabel = document.createElement('label');
  const malmoLabel = document.createElement('label');
  const ronnebyLabel = document.createElement('label');
  const stockholmLabel = document.createElement('label');

  communityPTag.classList.add('salesPtag')
  communityPTag.innerText = "Område:"

  karlskronaLabel.innerText = "Karlskrona: ";
  const communityInput = document.createElement('input');
  communityInput.setAttribute('type', 'radio');
  communityInput.setAttribute('name', 'community');
  communityInput.setAttribute('value', 'Karlskrona');

  malmoLabel.innerText = "Malmö:";
  const communityInput2 = document.createElement('input');
  communityInput2.setAttribute('type', 'radio');
  communityInput2.setAttribute('name', 'community');
  communityInput2.setAttribute('value', 'Malmö');

  ronnebyLabel.innerText = "Ronneby:";
  const communityInput3 = document.createElement('input');
  communityInput3.setAttribute('type', 'radio');
  communityInput3.setAttribute('name', 'community');
  communityInput3.setAttribute('value', 'Ronneby');

  stockholmLabel.innerText = "Stockholm:";
  const communityInput4 = document.createElement('input');
  communityInput4.setAttribute('type', 'radio');
  communityInput4.setAttribute('name', 'community');
  communityInput4.setAttribute('value', 'Stockholm');

  const communityFieldset = document.createElement('fieldset');
  communityFieldset.classList.add('fieldsetSales');
 
  karlskronaLabel.appendChild(communityInput)
  malmoLabel.appendChild(communityInput2)
  ronnebyLabel.appendChild(communityInput3)
  stockholmLabel.appendChild(communityInput4)
  communityFieldset.appendChild(communityPTag)
  communityFieldset.appendChild(karlskronaLabel)
  communityFieldset.appendChild(malmoLabel)
  communityFieldset.appendChild(ronnebyLabel)
  communityFieldset.appendChild(stockholmLabel)
  return communityFieldset;
}
export function createBuildType() {
  const apartmentType = document.createElement('input');
  const villaType = document.createElement('input');
  apartmentType.setAttribute('type', 'radio');
  apartmentType.setAttribute('name', 'propertyType');
  apartmentType.setAttribute('value', 'Bostadsrätt');
  const apartmentTypeLabel = document.createElement('label');
  apartmentTypeLabel.innerText = "Bostadsrätt:";
  villaType.setAttribute('type', 'radio');
  villaType.setAttribute('name', 'propertyType');
  villaType.setAttribute('value', 'Villa');
  const villaTypeLabel = document.createElement('label');
  villaTypeLabel.innerText = "Villa:";
  apartmentType.setAttribute('id', 'apartment');
  villaType.setAttribute('id', 'villa');

  const buildTypeFieldset = document.createElement('fieldset');
  buildTypeFieldset.classList.add('fieldsetSales');
  buildTypeFieldset.appendChild(apartmentTypeLabel);
  buildTypeFieldset.appendChild(apartmentType);
  buildTypeFieldset.appendChild(villaTypeLabel);
  buildTypeFieldset.appendChild(villaType);
  return buildTypeFieldset;
}
export function createInfo() {
  const infoLabel = document.createElement('label');
  infoLabel.innerText = "Info:";
  const infoInput = document.createElement('input');
  infoInput.setAttribute('id', 'info');
  
  infoLabel.appendChild(infoInput)
  return infoLabel;
}
export function createAmountRoom() {
  const amountRoomLabel = document.createElement('label');
  amountRoomLabel.innerText = "Antal rum:";
  const amountRoomInput = document.createElement('input');
  amountRoomInput.setAttribute('type', 'number');
  amountRoomInput.setAttribute('id', 'rooms');
  amountRoomInput.classList.add('saleInput')
  amountRoomLabel.appendChild(amountRoomInput)
  return amountRoomLabel;
}
export function createSpace() {
  const spaceLabel = document.createElement('label');
  spaceLabel.innerText = "Bostadsyta:";
  const spaceInput = document.createElement('input');
  spaceInput.setAttribute('type', 'number');
  spaceInput.setAttribute('id', 'kvm');
  spaceInput.classList.add('saleInput')
  spaceLabel.appendChild(spaceInput)
  return spaceLabel;
}
export function createAddress() {
  const addressLabel = document.createElement('label');
  addressLabel.innerText = "Adress:";
  const addressInput = document.createElement('input');
  addressInput.setAttribute('id', 'address');
  addressInput.classList.add('saleInput')
  addressLabel.appendChild(addressInput);
  return addressLabel;
}
export function createBuildYear() {
  const buildYearLabel = document.createElement('label');
  buildYearLabel.innerText = "Byggnadsår:";
  const buildYearInput = document.createElement('input');
  buildYearInput.setAttribute('type', 'number');
  buildYearInput.setAttribute('id', 'built');
  buildYearInput.classList.add('saleInput')
  buildYearLabel.appendChild(buildYearInput)
  return buildYearLabel;
}
export function createStartBid() {
  const startBidLabel = document.createElement('label');
  startBidLabel.innerText = "Utgångspris:";
  const startBidInput = document.createElement('input');
  startBidInput.setAttribute('type', 'number');
  startBidInput.setAttribute('id', 'startBid');
  startBidInput.classList.add('saleInput')
  startBidLabel.appendChild(startBidInput)
  return startBidLabel;
}
export function createPTag() {
  const pTag = document.createElement('p');
  pTag.setAttribute('id', 'pTag');
  pTag.innerText = "Är det dags att sälja din bostad?";
  return pTag;
}



export function appendApartmentForm(saleForm) {
  const label = document.createElement('label')
  label.setAttribute('id', 'apartmentTitel')
  label.innerText = "Bostadsrätt:"
  const apartmentSpecifics = document.createElement('fieldset')
  apartmentSpecifics.classList.add('fieldsetSales')
  const apartmentMarkThisPtag = document.createElement('p')
  apartmentMarkThisPtag.classList.add('salesPtag')
  apartmentMarkThisPtag.innerText = "Kryssa om följande finns"

  saleForm.appendChild(label);
  saleForm.appendChild(createFee());
  saleForm.appendChild(createFloor());
  apartmentSpecifics.appendChild(apartmentMarkThisPtag)
  apartmentSpecifics.appendChild(createStoreHouse());
  apartmentSpecifics.appendChild(createParking());
  apartmentSpecifics.appendChild(createElevator());
  apartmentSpecifics.appendChild(createBalcony());
  apartmentSpecifics.appendChild(createPatio());
  saleForm.appendChild(apartmentSpecifics);
  content.appendChild(saleForm);
}
export function createPatio() {
  const patioLabel = document.createElement('label');
  patioLabel.innerText = "Uteplats:";
  const patioInput = document.createElement('input');
  patioInput.setAttribute('type', 'checkbox');
  patioInput.setAttribute('name', 'patio');
  patioInput.setAttribute('value', 'checked');
  patioInput.setAttribute('id', 'patio');

  patioLabel.appendChild(patioInput)
  return patioLabel;
}
export function createParking() {
  const parkingLabel = document.createElement('label');
  parkingLabel.innerText = "Parkering:";
  const parkingInput = document.createElement('input');
  parkingInput.setAttribute('type', 'checkbox');
  parkingInput.setAttribute('name', 'parking');
  parkingInput.setAttribute('value', 'checked');
  parkingInput.setAttribute('id', 'parking');
  parkingLabel.appendChild(parkingInput)
  return parkingLabel;
}
export function createStoreHouse() {
  const storeHousePTag = document.createElement('p')
  storeHousePTag.setAttribute('id', 'storeHousePtag')
  storeHousePTag.innerText = "Kryssa om följande finns"
  const storeHouseLabel = document.createElement('label');
  storeHouseLabel.innerText = "Förråd:";
  const storeHouseInput = document.createElement('input');
  storeHouseInput.setAttribute('type', 'checkbox');
  storeHouseInput.setAttribute('name', 'storeHouse');
  storeHouseInput.setAttribute('value', 'checked');
  storeHouseInput.setAttribute('id', 'storage');

  storeHouseLabel.appendChild(storeHouseInput)
  return storeHouseLabel;
}
export function createFloor() {
  const floorLabel = document.createElement('label');
  floorLabel.innerText = "Våning:";
  const floorInput = document.createElement('input');
  floorInput.setAttribute('type', 'number');
  floorInput.setAttribute('id', 'floor');
  floorInput.classList.add('saleInput')
  floorLabel.appendChild(floorInput);
  return floorLabel;
}
export function createBalcony() {
  const balconyLabel = document.createElement('label');
  balconyLabel.innerText = "Balkong:";
  const balconyInput = document.createElement('input');
  const balconyLabel1 = document.createElement('label');
  balconyLabel1.innerText = "Ja";
  balconyInput.setAttribute('type', 'checkbox');
  balconyInput.setAttribute('name', 'balcony');
  balconyInput.setAttribute('value', 'checked');
  balconyInput.setAttribute('id', 'balcony');
  balconyLabel.appendChild(balconyInput)
  return balconyLabel;
}
export function createFee() {
  const feeLabel = document.createElement('label');
  feeLabel.innerText = "Avgift:";
  const feeInput = document.createElement('input');
  feeInput.setAttribute('type', 'number');
  feeInput.setAttribute('id', 'fee');
  feeInput.classList.add('saleInput')
  feeLabel.appendChild(feeInput)
  return feeLabel;
}
export function createElevator() {
  const elevatorLabel = document.createElement('label');
  elevatorLabel.innerText = "Hiss:";
  const elevatorInput = document.createElement('input');
  elevatorInput.setAttribute('type', 'checkbox');
  elevatorInput.setAttribute('name', 'elevator');
  elevatorInput.setAttribute('value', 'checked');
  elevatorInput.setAttribute('id', 'elevator');
  elevatorLabel.appendChild(elevatorInput)
  return elevatorLabel;
}



export function appendVillaForm(saleForm) {
  const label = document.createElement('label')
  label.innerText = "Villa:"
  label.setAttribute('id', 'villaTitel')
  const villaFieldset = document.createElement('fieldset')
  villaFieldset.classList.add('fieldsetSales')
  const garagePtag = document.createElement('p')
  garagePtag.classList.add('salesPtag')
  garagePtag.innerText = "Kryssa i rutan om följande finns"
  saleForm.appendChild(label);
  saleForm.appendChild(createLot());
  saleForm.appendChild(createWaterAndSewer());
  saleForm.appendChild(createConnections());
  saleForm.appendChild(createHeating());
  villaFieldset.appendChild(garagePtag)
  villaFieldset.appendChild(createGarage());
  saleForm.appendChild(villaFieldset);
  saleForm.appendChild(createSubmitBtn());
  content.appendChild(saleForm);
}
export function createSubmitBtn() {
  const submitbtn = document.createElement('input');
  submitbtn.setAttribute('type', 'submit');
  submitbtn.setAttribute('value', 'Skicka till mäklare');
  return submitbtn;
}
export function createHeating() {
  const heatingLabel = document.createElement('label');
  heatingLabel.innerText = "Uppvärming:";
  const heatingInput = document.createElement('input');
  heatingInput.setAttribute('id', 'heating');
  heatingInput.classList.add('saleInput')
  heatingLabel.appendChild(heatingInput)
  return heatingLabel;
}
export function createConnections() {
  const conectionLabel = document.createElement('label');
  conectionLabel.innerText = "Anslutningar:";
  const connectionInput = document.createElement('input');
  connectionInput.setAttribute('id', 'connections');
  connectionInput.classList.add('saleInput')
  conectionLabel.appendChild(connectionInput)
  return conectionLabel;
}
export function createWaterAndSewer() {
  const waterAndSewerLabel = document.createElement('label');
  waterAndSewerLabel.innerText = "Vatten/avlopp:";
  const waterAndSewerInput = document.createElement('input');
  waterAndSewerInput.setAttribute('id', 'wAndS');
  waterAndSewerInput.classList.add('saleInput')
  waterAndSewerLabel.appendChild(waterAndSewerInput)
  return waterAndSewerLabel;
}
export function createGarage() {
  const garageLabel = document.createElement('label');
  garageLabel.innerText = "Garage:";
  const garageInput = document.createElement('input');
  garageInput.setAttribute('type', 'checkbox');
  garageInput.setAttribute('name', 'garage');
  garageInput.setAttribute('value', 'checked');
  garageInput.setAttribute('id', 'garage');
  garageLabel.appendChild(garageInput)
  return garageLabel;
}
export function createLot() {
  const lotLabel = document.createElement('label');
  lotLabel.innerText = "Tomtyta:";
  const lotInput = document.createElement('input');
  lotInput.setAttribute('type', 'number');
  lotInput.setAttribute('id', 'lot');
  lotInput.classList.add('saleInput')
  lotLabel.appendChild(lotInput)
  return lotLabel;
}
