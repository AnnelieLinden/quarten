import Property from "./property.js";
export default class Villa extends Property {

  lot; //tomt
  garage;
  waterAndSewer;
  fiberConnection;
  heating;

  constructor(lot, garage, waterAndSewer, fiberConnection, heating, address, community, startBid, kvmArea, buildYear, amountRoom, info) {

   super(address, community, startBid, kvmArea, buildYear, amountRoom, info); //ska det vara såhär eller bara egenskaper från property

    this.lot = lot;
    this.garage = garage;
    this.waterAndSewer = waterAndSewer;
    this.fiberConnection = fiberConnection;
    this.heating = heating;

  }

}