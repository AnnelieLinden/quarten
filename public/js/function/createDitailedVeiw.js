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
  dataArr.push(property.amountRoom + " st rum");
  dataArr.push("Byggår: " + property.buildYear);
  dataArr.push(property.kvmArea + " kvm");
  dataArr.push(property.startBid + " SEK");
  dataArr.push("Övrig info: " + property.info);
  if (propertyType === "villa") {
    dataArr.push("Uppkoppling: " + property.fiberConnection);
    dataArr.push("Garage: " + property.garage);
    dataArr.push("Tomtstorlek: " + property.lot);
    dataArr.push("V/A: " + property.waterAndSewer);
    dataArr.push("Uppvärming: " + property.heating);

  }
  else {
    dataArr.push("Balkong: " + property.balcony);
    dataArr.push("Hiss: " + property.elevator);
    dataArr.push(property.fee + " SEK");
    dataArr.push("Våning: " + property.floor);
    dataArr.push("Parkering: " + property.parking);
    dataArr.push("Uteplats: " + property.patio);
    dataArr.push("Förråd: " + property.storeHouse);
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