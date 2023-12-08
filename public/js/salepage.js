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

function saveSaleInfo(event) {
  event.preventDefault()
  const savedSales = allValues(event.target.elements)
  addSaleForm(savedSales);

}

function allValues(elements) {
  const villa = elements.villa.checked
  const apartment = elements.apartment.checked
  const fee = elements.fee.value
  const balcony = elements.balcony.value
  const floor = elements.floor.value
  const elevator = elements.elevator.value
  const storage = elements.storage.value
  const parking = elements.parking.value
  const patio = elements.patio.Valie
  const address = elements.address.value
  const bid = elements.startBid.value
  const community = elements.community.value
  const kvm = elements.kvm.value
  const rooms = elements.rooms.value
  const built = elements.built.value
  const info = elements.info.value
  const lot = elements.lot.value
  const garage = elements.garage.value
  const wAndS = elements.wAndS.value
  const connections = elements.connections.value
  const heating = elements.heating.Value

  if (apartment == true) {
    return new Apartment(fee, balcony, floor, elevator, storage, parking, patio, address, community, bid, kvm, built, rooms, info)
  } else if (villa == true) {
    return new Villa(lot, garage, wAndS, connections, heating, address, community, bid, kvm, built, rooms, info)
  }
}

