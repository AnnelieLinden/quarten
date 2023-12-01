import createSection from "./minorComponets/createSection.js";
import createArticle from "./minorComponets/createArticle.js";
import createParagraf from "./minorComponets/createParagraf.js";

export default function createDitailedVeiw(propertyInfoData, propertyType) {
  const propertyData = propertyToArr(propertyInfoData, propertyType)
  const section = createSection();
  propertyType = propertyType.toLowerCase().trim();

  const property = propertyInfo(propertyData);
  section.appendChild(property);
  if (propertyType === "villa") {
    const Villa = villaInfo(propertyData);
    section.appendChild(Villa);
  }
  else {
    const apartment = apartmentInfo(propertyData);
    section.appendChild(apartment);
  }
  return section;
}

function propertyToArr(property, propertyType) {
  const dataArr = [];
  dataArr.push(property.address);
  dataArr.push(property.amountRoom);
  dataArr.push(property.buildYear);
  dataArr.push(property.kvmArea);
  dataArr.push(property.startBid);
  dataArr.push(property.info);
  if (propertyType === "villa") {
    dataArr.push(property.fiberConnection);
    dataArr.push(property.garage);
    dataArr.push(property.lot);
    dataArr.push(property.waterAndSewer);
    dataArr.push(property.heating);

  }
  else {
    dataArr.push(property.balcony);
    dataArr.push(property.elevator);
    dataArr.push(property.fee);
    dataArr.push(property.floor);
    dataArr.push(property.parking);
    dataArr.push(property.patio);
    dataArr.push(property.storeHouse);
  }
  return dataArr;
}

function propertyInfo(infoData) {
  const propertyInfoArticle = createArticle();
  for (var i = 0; i < 6; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    propertyInfoArticle.appendChild(p);
  }
  return propertyInfoArticle;
}

function apartmentInfo(infoData) {
  const apartmentInfoArticle = createArticle();
  for (var i = 6; i < infoData.length; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    apartmentInfoArticle.appendChild(p);
  }
  return apartmentInfoArticle;
}

function villaInfo(infoData) {
  const villaInfoArticle = createArticle();
  for (var i = 6; i < infoData.length; i++) {
    const p = createParagraf();
    p.innerText = infoData[i];
    villaInfoArticle.appendChild(p);
  }
  return villaInfoArticle;
}