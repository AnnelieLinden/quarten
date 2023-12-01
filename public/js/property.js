//Bostadsklass

export default class Property {

  address;
  community;
  startBid;
  kvmArea;
  buildYear;
  amountRoom;
  info;

  constructor(address, community, startBid, kvmArea, buildYear, amountRoom, info)
  {
    this.address = address;
    this.community = community;
    this.startBid = startBid;
    this.kvmArea = kvmArea;
    this.buildYear = buildYear;
    this.amountRoom = amountRoom;
    this.info = info;
  }
}