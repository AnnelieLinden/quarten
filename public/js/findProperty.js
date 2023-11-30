export default function findProperty() {
  form.setAttribute("id", "buyForm")

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

  form.appendChild(propertyLabel)
  form.appendChild(propertyInput)
  form.appendChild(neighborhoodLabel)
  form.appendChild(neighborhoodInput)
  form.appendChild(priceLabel)
  form.appendChild(priceInput)
  form.appendChild(areaLabel)
  form.appendChild(areaInput)

  content.appendChild(form)

  findProperty()

}