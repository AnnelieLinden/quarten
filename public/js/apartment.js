import Property from "./property.js";
export default class Apartment extends Property {

  fee;
  balcony;
  floor;
  elevator;
  storeHouse;
  parking;
  patio; //innegård eller uteplats


  constructor(fee, balcony, floor, elevator, storeHouse, parking, patio, address, startBid, kvmArea, buildYear, amountRoom, info) {

   super(address, community, startBid, kvmArea, buildYear, amountRoom, info);

    this.fee = fee;
    this.balcony = balcony;
    this.floor = floor;
    this.elevator = elevator;
    this.storeHouse = storeHouse;
    this.parking = parking;
    this.patio = patio;

  }

}