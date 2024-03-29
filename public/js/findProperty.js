import { getAllProperties } from "./function/server-request.js"
import createDitailedVeiw from "./function/createDitailedVeiw.js"

function listProperties(objectList) {
  objectList.reverse();
  const propertiesSection = document.createElement('propertiesSection')
  propertiesSection.setAttribute('id', 'propertiesSection')

  for (let i = 0; i < objectList.length; i++) {
    const objectSection = document.createElement('objectSection')
    objectSection.setAttribute('id', 'objectSection')

    const pTagAddress = document.createElement('p')
    pTagAddress.setAttribute('id', 'pTagAddress')
    pTagAddress.innerText = objectList[i].address

    const pTagPrice = document.createElement('p')
    pTagPrice.setAttribute('id', 'pTagPrice')
    pTagPrice.innerText = objectList[i].startBid + " SEK"

    const pTagArea = document.createElement('p')
    pTagArea.setAttribute('id', 'pTagArea')
    pTagArea.innerText = objectList[i].kvmArea + " kvm"

    objectSection.addEventListener("click", function (event) {
      const clickProperty = event.currentTarget
      clickProperty.classList.add('showProperty')
      let propertyType = "apartment"
      objectSection.innerHTML = ""
      if (objectList[i].fee == undefined) {
        propertyType = "villa"
      }
      objectSection.appendChild(createDitailedVeiw(objectList[i], propertyType))
    })
    objectSection.appendChild(pTagAddress)
    objectSection.appendChild(pTagPrice)
    objectSection.appendChild(pTagArea)

    propertiesSection.appendChild(objectSection)

    content.appendChild(propertiesSection)

  }
}

export default async function findProperty(buyForm) {

  const propertyList = await getAllProperties();
  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText = "Hitta din bostad!"

  buyForm.setAttribute('id', 'buyForm')

  const { propertyLabel, fieldset10 } = searchPropertyType()

  const { neighborhoodLabel, fieldset20 } = searchCommunity()

  const { priceLabel, fieldset30 } = searchPrice()

  const { areaLabel, fieldset40 } = searchArea()

  appendBuyForm(buyForm, pTag, propertyLabel, fieldset10, neighborhoodLabel, fieldset20, priceLabel, fieldset30, areaLabel, fieldset40)

  const searchbtn = document.createElement('input')

  searchbtn.setAttribute('type', 'submit')
  searchbtn.setAttribute('value', 'Sök')
  searchbtn.addEventListener("click", function (event) {
    const filteredList = [];
    event.preventDefault();

    const typeInputArr = fieldset10.querySelectorAll("input");
    const locationInputArr = fieldset20.querySelectorAll("input");
    const priceInputArr = fieldset30.querySelectorAll("input");
    const areaInputArr = fieldset40.querySelectorAll("input");

    for (var i = 0; i < propertyList.length; i++) {
      content.innerHTML = "";
      var addToFilterdList = false;
      if (typeInputArr[0].checked && propertyList[i].type === "Bostadsrätt") {
        addToFilterdList = true;
      }
      if (typeInputArr[1].checked && propertyList[i].type === "Villa") {
        addToFilterdList = true;
      }
      if (locationInputArr[0].checked && propertyList[i].community === "Karlskrona") {
        addToFilterdList = true;
      }
      if (locationInputArr[1].checked && propertyList[i].community === "Malmö") {
        addToFilterdList = true;
      }
      if (locationInputArr[2].checked && propertyList[i].community === "Ronneby") {
        addToFilterdList = true;
      }
      if (locationInputArr[3].checked && propertyList[i].community === "Stockholm") {
        addToFilterdList = true;
      }
      if (priceInputArr[0].checked && parseInt(propertyList[i].startBid) <= 1000000) {
        addToFilterdList = true;
      }
      if (priceInputArr[1].checked && parseInt(propertyList[i].startBid) <= 2000000) {
        addToFilterdList = true;
      }
      if (priceInputArr[2].checked && parseInt(propertyList[i].startBid) <= 4000000) {
        addToFilterdList = true;
      }
      if (priceInputArr[3].checked && parseInt(propertyList[i].startBid) <= 6000000) {
        addToFilterdList = true;
      }
      if (priceInputArr[4].checked && parseInt(propertyList[i].startBid) <= 8000000) {
        addToFilterdList = true;
      }
      if (priceInputArr[5].checked && parseInt(propertyList[i].startBid) <= 10000000) {
        addToFilterdList = true;
      }
      if (areaInputArr[0].checked && parseInt(propertyList[i].kvmArea) >= 30) {
        addToFilterdList = true;
      }
      if (areaInputArr[1].checked && parseInt(propertyList[i].kvmArea) >= 90) {
        addToFilterdList = true;
      }
      if (areaInputArr[2].checked && parseInt(propertyList[i].kvmArea) >= 150) {
        addToFilterdList = true;
      }
      if (areaInputArr[3].checked && parseInt(propertyList[i].kvmArea) >= 200) {
        addToFilterdList = true;
      }
      if (addToFilterdList) {
        filteredList.push(propertyList[i]);
      }
    }
    content.appendChild(buyForm)
    if (filteredList.length > 0) {
      listProperties(filteredList);
    }

  })
  buyForm.appendChild(searchbtn)

  listProperties(propertyList)

}

function appendBuyForm(buyForm, pTag, propertyLabel, fieldset10, neighborhoodLabel, fieldset20, priceLabel, fieldset30, areaLabel, fieldset40) {
  buyForm.appendChild(pTag)
  buyForm.appendChild(propertyLabel)
  buyForm.appendChild(fieldset10)
  buyForm.appendChild(neighborhoodLabel)
  buyForm.appendChild(fieldset20)
  buyForm.appendChild(priceLabel)
  buyForm.appendChild(fieldset30)
  buyForm.appendChild(areaLabel)
  buyForm.appendChild(fieldset40)

  content.appendChild(buyForm)
}

function searchArea() {
  const areaLabel = document.createElement('label')
  areaLabel.setAttribute('id', 'buyTitle')
  areaLabel.innerText = "Minsta bostadsarea:"

  const minAreaLabel = document.createElement('label')
  const minAreaLabel1 = document.createElement('label')
  const minAreaLabel2 = document.createElement('label')
  const minAreaLabel3 = document.createElement('label')
  minAreaLabel2.setAttribute('id', 'marginCheckbox')
  const minAreaLabel4 = document.createElement('label')
  const minAreaLabel5 = document.createElement('label')
  minAreaLabel4.setAttribute('id', 'marginCheckbox')
  const minAreaLabel6 = document.createElement('label')
  const minAreaLabel7 = document.createElement('label')
  minAreaLabel6.setAttribute('id', 'marginCheckbox')

  minAreaLabel.innerText = 30 + " kvm"
  minAreaLabel1.innerText = "Ja"
  const minAreaInput = document.createElement('input')
  minAreaInput.setAttribute('type', 'checkbox')
  minAreaInput.setAttribute('name', 'community')

  minAreaLabel2.innerText = 90 + " kvm"
  minAreaLabel3.innerText = "Ja"
  const minAreaInput2 = document.createElement('input')
  minAreaInput2.setAttribute('type', 'checkbox')
  minAreaInput2.setAttribute('name', 'community')

  minAreaLabel4.innerText = 150 + " kvm"
  minAreaLabel5.innerText = "Ja"
  const minAreaInput4 = document.createElement('input')
  minAreaInput4.setAttribute('type', 'checkbox')
  minAreaInput4.setAttribute('name', 'community')

  minAreaLabel6.innerText = 200 + " kvm"
  minAreaLabel7.innerText = "Ja"
  const minAreaInput6 = document.createElement('input')
  minAreaInput6.setAttribute('type', 'checkbox')
  minAreaInput6.setAttribute('name', 'community')

  const fieldset40 = document.createElement('fieldset')
  fieldset40.setAttribute('id', 'fieldset')
  fieldset40.appendChild(minAreaLabel)
  fieldset40.appendChild(minAreaInput)
  fieldset40.appendChild(minAreaLabel2)
  fieldset40.appendChild(minAreaInput2)
  fieldset40.appendChild(minAreaLabel4)
  fieldset40.appendChild(minAreaInput4)
  fieldset40.appendChild(minAreaLabel6)
  fieldset40.appendChild(minAreaInput6)
  return { areaLabel, fieldset40 }
}

function searchPrice() {
  const priceLabel = document.createElement('label')
  priceLabel.setAttribute('id', 'buyTitle')
  priceLabel.innerText = "Maxpris:"

  const maxPriceLabel = document.createElement('label')
  const maxPriceLabel1 = document.createElement('label')
  const maxPriceLabel2 = document.createElement('label')
  const maxPriceLabel3 = document.createElement('label')
  maxPriceLabel2.setAttribute('id', 'marginCheckbox')
  const maxPriceLabel4 = document.createElement('label')
  const maxPriceLabel5 = document.createElement('label')
  maxPriceLabel4.setAttribute('id', 'marginCheckbox')
  const maxPriceLabel6 = document.createElement('label')
  const maxPriceLabel7 = document.createElement('label')
  maxPriceLabel6.setAttribute('id', 'marginCheckbox')
  const maxPriceLabel8 = document.createElement('label')
  const maxPriceLabel9 = document.createElement('label')
  maxPriceLabel8.setAttribute('id', 'marginCheckbox')
  const maxPriceLabel10 = document.createElement('label')
  const maxPriceLabel11 = document.createElement('label')
  maxPriceLabel10.setAttribute('id', 'marginCheckbox')

  maxPriceLabel.innerText = 1000000 + " SEK"
  maxPriceLabel1.innerText = "Ja"
  const maxPriceInput = document.createElement('input')
  maxPriceInput.setAttribute('type', 'radio')
  maxPriceInput.setAttribute('name', 'community')

  maxPriceLabel2.innerText = 2000000 + " SEK"
  maxPriceLabel3.innerText = "Ja"
  const maxPriceInput2 = document.createElement('input')
  maxPriceInput2.setAttribute('type', 'radio')
  maxPriceInput2.setAttribute('name', 'community')

  maxPriceLabel4.innerText = 4000000 + " SEK"
  maxPriceLabel5.innerText = "Ja"
  const maxPriceInput4 = document.createElement('input')
  maxPriceInput4.setAttribute('type', 'radio')
  maxPriceInput4.setAttribute('name', 'community')

  maxPriceLabel6.innerText = 6000000 + " SEK"
  maxPriceLabel7.innerText = "Ja"
  const maxPriceInput6 = document.createElement('input')
  maxPriceInput6.setAttribute('type', 'radio')
  maxPriceInput6.setAttribute('name', 'community')

  maxPriceLabel8.innerText = 8000000 + " SEK"
  maxPriceLabel9.innerText = "Ja"
  const maxPriceInput8 = document.createElement('input')
  maxPriceInput8.setAttribute('type', 'radio')
  maxPriceInput8.setAttribute('name', 'community')

  maxPriceLabel10.innerText = 10000000 + " SEK"
  maxPriceLabel11.innerText = "Ja"
  const maxPriceInput10 = document.createElement('input')
  maxPriceInput10.setAttribute('type', 'radio')
  maxPriceInput10.setAttribute('name', 'community')

  const fieldset30 = document.createElement('fieldset')
  fieldset30.setAttribute('id', 'fieldset') 
  fieldset30.appendChild(maxPriceLabel)
  fieldset30.appendChild(maxPriceInput)
  fieldset30.appendChild(maxPriceLabel2)
  fieldset30.appendChild(maxPriceInput2)
  fieldset30.appendChild(maxPriceLabel4)
  fieldset30.appendChild(maxPriceInput4)
  fieldset30.appendChild(maxPriceLabel6)
  fieldset30.appendChild(maxPriceInput6)
  fieldset30.appendChild(maxPriceLabel8)
  fieldset30.appendChild(maxPriceInput8)
  fieldset30.appendChild(maxPriceLabel10)
  fieldset30.appendChild(maxPriceInput10)
  return { priceLabel, fieldset30 }
}

function searchCommunity() {
  const neighborhoodLabel = document.createElement('label')
  neighborhoodLabel.setAttribute('id', 'buyTitle')
  neighborhoodLabel.innerText = "Område:"

  const communityLabel = document.createElement('label')
  const communityLabel1 = document.createElement('label')
  const communityLabel2 = document.createElement('label')
  const communityLabel3 = document.createElement('label')
  communityLabel2.setAttribute('id', 'marginCheckbox')
  const communityLabel4 = document.createElement('label')
  const communityLabel5 = document.createElement('label')
  communityLabel4.setAttribute('id', 'marginCheckbox')
  const communityLabel6 = document.createElement('label')
  const communityLabel7 = document.createElement('label')
  communityLabel6.setAttribute('id', 'marginCheckbox')

  communityLabel.innerText = "Karlskrona:"
  communityLabel1.innerText = "Ja"
  const communityInput = document.createElement('input')
  communityInput.setAttribute('type', 'checkbox')
  communityInput.setAttribute('name', 'community')
  communityLabel2.innerText = "Malmö:"
  communityLabel3.innerText = "Ja"
  const communityInput2 = document.createElement('input')
  communityInput2.setAttribute('type', 'checkbox')
  communityInput2.setAttribute('name', 'community')

  communityLabel4.innerText = "Ronneby:"
  communityLabel5.innerText = "Ja"
  const communityInput4 = document.createElement('input')
  communityInput4.setAttribute('type', 'checkbox')
  communityInput4.setAttribute('name', 'community')

  communityLabel6.innerText = "Stockholm:"
  communityLabel7.innerText = "Ja"
  const communityInput6 = document.createElement('input')
  communityInput6.setAttribute('type', 'checkbox')
  communityInput6.setAttribute('name', 'community')

  const fieldset20 = document.createElement('fieldset')
  fieldset20.setAttribute('id', 'fieldset') 
  fieldset20.appendChild(communityLabel)
  fieldset20.appendChild(communityInput)
  fieldset20.appendChild(communityLabel2)
  fieldset20.appendChild(communityInput2)
  fieldset20.appendChild(communityLabel4)
  fieldset20.appendChild(communityInput4)
  fieldset20.appendChild(communityLabel6)
  fieldset20.appendChild(communityInput6)
  return { neighborhoodLabel, fieldset20 }
}

function searchPropertyType() {
  const propertyLabel = document.createElement('label')
  propertyLabel.setAttribute('id', 'buyTitle')
  propertyLabel.innerText = "Bostadstyp:"

  const apartmentLabel = document.createElement('label')
  const apartmentLabel1 = document.createElement('label')
  apartmentLabel.innerText = "Bostadsrätt:"
  apartmentLabel1.innerText = "Ja"
  const apartmentInput = document.createElement('input')
  apartmentInput.setAttribute('type', 'checkbox')
  apartmentInput.setAttribute('name', 'apartment')

  const villaLabel = document.createElement('label')
  const villaLabel1 = document.createElement('label')
  villaLabel.setAttribute('id', 'marginCheckbox')
  villaLabel.innerText = "Villa:"
  villaLabel1.innerText = "Ja"
  const villaInput = document.createElement('input')
  villaInput.setAttribute('type', 'checkbox')
  villaInput.setAttribute('name', 'villa')

  const fieldset10 = document.createElement('fieldset')
  fieldset10.setAttribute('id', 'fieldset')
  fieldset10.appendChild(apartmentLabel)
  fieldset10.appendChild(apartmentInput)
  fieldset10.appendChild(villaLabel)
  fieldset10.appendChild(villaInput)
  return { propertyLabel, fieldset10 }
}
