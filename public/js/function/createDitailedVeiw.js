import createSection from "./minorComponets/createSection.js";
import createArticle from "./minorComponets/createArticle.js";
import createParagraf from "./minorComponets/createParagraf.js";

const data = {
  address: texvägen,
  startBid: 500,
  kvmArea: 400,
  buildYear: 1900,
  amountRoom: 8,
  info: "lorem",
  lot: "tex",
  garage: "yes",
  waterAndSewer: "yes",
  fiberConnection: "yes",
  heating: "yes"
}

const data2 = {
  address: texvägen,
  startBid: 500,
  kvmArea: 40,
  buildYear: 1999,
  amountRoom: 3,
  info: "lorem",
  fee: 20,
  balcony: "no",
  floor: 1,
  elevator: "yes",
  storeHouse: "yes",
  parking: "no",
  patio: "yes"
}

export default function createDitailedVeiw() {
  const section = createSection();
  const Villa = villaInfo();
  const apartment = apartmentInfo();
  const property = propertyInfo();
  section.appendChild(property);
  section.appendChild(Villa);
  return section;
}

function dataGet() {
  const dataArr = [];
  dataArr.push(data.address);
  dataArr.push(data.amountRoom);
  dataArr.push(data.buildYear);
  dataArr.push(data.fiberConnection);
  dataArr.push(data.garage);
  dataArr.push(data.info);
  dataArr.push(data.kvmArea);
  dataArr.push(data.lot);
  dataArr.push(data.startBid);
  dataArr.push(data.waterAndSewer);
  return dataArr;
}

function propertyInfo() {
  const infoData = dataGet();
  const propertyInfoArticle = createArticle();
  for (var i = 0; i < 6; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    propertyInfoArticle.appendChild(p);
  }
  return propertyInfoArticle;
}

function apartmentInfo() {
  const infoData = dataGet();
  const apartmentInfoArticle = createArticle();
  for (var i = 6; i < infoData.length; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    apartmentInfoArticle.appendChild(p);
  }
  return apartmentInfoArticle;
}

function villaInfo() {
  const infoData = dataGet();
  const villaInfoArticle = createArticle();
  for (var i = 6; i < infoData.length; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    villaInfoArticle.appendChild(p);
  }
  return villaInfoArticle;
}