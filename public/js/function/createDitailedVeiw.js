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
  const propertyInfoArticle = createArticle();
  const apartmentInfoArticle = createArticle();
  const villaInfoArticle = createArticle();

  return section;
}

function propertyInfo(article, propertyObj) {

}

function apartmentInfo(article, propertyObj) {

}

function villaInfo(article, propertyObj) {

}