export default function findProperty(buyForm) {


  buyForm.setAttribute("id", "buyForm")

  const propertyLabel = document.createElement('label')
  propertyLabel.innerText = "Bostadstyp:"
  const propertyInput = document.createElement('input')

  const neighborhoodLabel = document.createElement('label') //bostadsområde
  neighborhoodLabel.innerText = "Bostadsområde:"
  const neighborhoodInput = document.createElement('input')

  const priceLabel = document.createElement('label')
  priceLabel.innerText = "Utgångspris:"
  const priceInput = document.createElement('input')

  const areaLabel = document.createElement('label')
  areaLabel.innerText = "Bostadsyta:"
  const areaInput = document.createElement('input')

  buyForm.appendChild(propertyLabel)
  buyForm.appendChild(propertyInput)
  buyForm.appendChild(neighborhoodLabel)
  buyForm.appendChild(neighborhoodInput)
  buyForm.appendChild(priceLabel)
  buyForm.appendChild(priceInput)
  buyForm.appendChild(areaLabel)
  buyForm.appendChild(areaInput)

  content.appendChild(buyForm)

  findProperty()

}