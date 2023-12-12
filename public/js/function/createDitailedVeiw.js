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
  dataArr.push("Antal rum: " + property.amountRoom );
  dataArr.push("Byggår: " + property.buildYear);
  dataArr.push("Boyta: " + property.kvmArea + " kvm");
  dataArr.push("Utgångspris: " + property.startBid + " SEK");
  dataArr.push("Övrig info: " + property.info);
  if (propertyType === "villa") {
    dataArr.push("Anslutning: " + property.fiberConnection);
    dataArr.push("Tomtstorlek: " + property.lot + " kvm");
    dataArr.push("V/A: " + property.waterAndSewer);
    dataArr.push("Uppvärming: " + property.heating);
    if (property.garage == "checked") {
      dataArr.push("Garage finns");
    }
  }
  else {
    dataArr.push("Månadsavgift: " + property.fee + " SEK");
    dataArr.push("Våning: " + property.floor);
    if (property.balcony == "checked") {
      dataArr.push("Balkong finns");
    } if (property.elevator == "checked") {
      dataArr.push("Hiss finns");
    } if (property.parking == "checked") {
       dataArr.push("Parkering finns");
    } if (property.patio == "checked") {
      dataArr.push("Uteplats finns");
    } if (property.storeHouse == "checked") {
      dataArr.push("Förråd finns");
    }
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