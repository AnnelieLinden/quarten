import Villa from "./villa.js"
import Apartment from "./apartment.js"
import { addSaleForm } from "./function/server-request.js";
import { createPTag, appendSaleForm, createStartBid, createBuildYear, createAddress, createSpace, createAmountRoom, createInfo, createBuildType, createCommunity, createElevator, createFee, createBalcony, createFloor, createStoreHouse, createParking, createPatio, appendApartmentForm, createLot, createGarage, createWaterAndSewer, createConnections, createHeating, createSubmitBtn, appendVillaForm } from "./saleFunctions.js";


export default function renderSaleForm(saleForm) {
  saleForm.addEventListener('submit', saveSaleInfo)
  saleForm.setAttribute("id", "saleForm")
  createPTag();
  createStartBid();
  createBuildYear();
  createAddress();
  createSpace();
  createAmountRoom();
  createInfo();
  createBuildType();
  createCommunity();

  appendSaleForm(saleForm);
  appendApartmentForm(saleForm)
  appendVillaForm(saleForm)

}
/*
function apartmentSaleForm(saleForm) {
createElevator();
 createFee();
 const balconyLabel = createBalcony();
 const floorLabel = createFloor();
 const storeHouseLabel = createStoreHouse();
 const parkingLabel = createParking();
 const patioLabel = createPatio();

 appendApartmentForm(saleForm);
}

function villaSaleForm(saleForm) {
 
 const lotLabel = createLot();
 const garageLabel = createGarage();
 const waterAndSewerLabel = createWaterAndSewer();
 const conectionLabel = createConnections();
 const heatingLabel = createHeating();
 const submitbtn = createSubmitBtn();



 appendVillaForm(saleForm, label, lotLabel, waterAndSewerLabel, conectionLabel, heatingLabel, fieldset2, garageLabel, submitbtn);
}*/

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

