export default class Property {
  type;
  address;
  community;
  startBid;
  kvmArea;
  buildYear;
  amountRoom;
  info;

  constructor(type, address, community, startBid, kvmArea, buildYear, amountRoom, info)
  {
    this.type = type;
    this.address = address;
    this.community = community;
    this.startBid = startBid;
    this.kvmArea = kvmArea;
    this.buildYear = buildYear;
    this.amountRoom = amountRoom;
    this.info = info;
  }
}