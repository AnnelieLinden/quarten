import Property from "./property.js";
export default class Villa extends Property {

  lot; 
  garage;
  waterAndSewer;
  fiberConnection;
  heating;

  constructor(lot, garage, waterAndSewer, fiberConnection, heating, type, address, community, startBid, kvmArea, buildYear, amountRoom, info) {

   super(type, address, community, startBid, kvmArea, buildYear, amountRoom, info);

    this.lot = lot;
    this.garage = garage;
    this.waterAndSewer = waterAndSewer;
    this.fiberConnection = fiberConnection;
    this.heating = heating;

  }
}