class Villa extends Property {

  lot;
  garage;
  waterAndSewer;
  fiberConnection;
  heating;

  constructor(lot, garage, waterAndSewer, fiberConnection, heating) {
    this.lot = lot;
    this.garage = garage;
    this.waterAndSewer = waterAndSewer;
    this.fiberConnection = fiberConnection;
    this.heating = heating;

  }

}