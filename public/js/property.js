//Bostadsklass

export default class Property {

  address;
  startBid;
  kvmArea;
  buildYear;
  amountRoom;
  info;

  constructor(address, startBid, kvmArea, buildYear, amountRoom, info)
  {
    this.address = address;
    this.startBid = startBid;
    this.kvmArea = kvmArea;
    this.buildYear = buildYear;
    this.amountRoom = amountRoom;
    this.info = info;
  }
}