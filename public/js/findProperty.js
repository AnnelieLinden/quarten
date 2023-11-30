export default function findProperty(buyForm) {

  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText = "Hitta din bostad!"

  buyForm.setAttribute("id", "buyForm")

  const propertyLabel = document.createElement('label')
  propertyLabel.innerText = "Välj Bostadstyp:"
  const propertyInput = document.createElement('input')


  const villaLabel = document.createElement('label')
  const villaLabel1 = document.createElement('label')
  villaLabel.innerText = "Villa:"
  villaLabel1.innerText = "Ja"
  const villaInput = document.createElement('input')
  villaInput.setAttribute('type', 'checkbox')
  villaInput.setAttribute('name', 'villa')
  villaInput.setAttribute('value', 'checked')
  
  const apartmentLabel = document.createElement('label')
  const apartmentLabel1 = document.createElement('label')
  apartmentLabel.innerText = "Bostadsrätt:"
  apartmentLabel1.innerText = "Ja"
  const apartmentInput = document.createElement('input')
  apartmentInput.setAttribute('type', 'checkbox')
  apartmentInput.setAttribute('name', 'apartment')
  apartmentInput.setAttribute('value', 'checked')

//radioknapp
  /*const apartmentInput = document.createElement('input')
  const villaInput = document.createElement('input')

  apartmentInput.setAttribute('type', 'radio')
  apartmentInput.setAttribute('name', 'propertyType')
  apartmentInput.setAttribute('value', 'Bostadsrätt')
  const apartmentInputLabel = document.createElement('label')
  apartmentInputLabel.innerText = "Bostadsrätt:"

  villaInput.setAttribute('type', 'radio')
  villaInput.setAttribute('name', 'propertyType')
  villaInput.setAttribute('value', 'Villa')
  const villaInputLabel = document.createElement('label')
  villaInputLabel.innerText = "Villa:"*/



  const neighborhoodLabel = document.createElement('label') //bostadsområde
  neighborhoodLabel.innerText = "Bostadsområde:"
  const neighborhoodInput = document.createElement('input')


  

  const priceLabel = document.createElement('label')
  priceLabel.innerText = "Utgångspris:"
  const priceInput = document.createElement('input')

  const areaLabel = document.createElement('label')
  areaLabel.innerText = "Bostadsyta:"
  const areaInput = document.createElement('input')

  buyForm.appendChild(pTag)
  buyForm.appendChild(propertyLabel)
  buyForm.appendChild(propertyInput)
  
//radioknapp
 /* buyForm.appendChild(apartmentInputLabel)
  buyForm.appendChild(apartmentInput)
  buyForm.appendChild(villaInputLabel)
  buyForm.appendChild(villaInput)*/
  
 
  buyForm.appendChild(villaLabel)
  buyForm.appendChild(villaInput)
  buyForm.appendChild(apartmentLabel)
  buyForm.appendChild(apartmentInput)
  buyForm.appendChild(neighborhoodLabel)
  buyForm.appendChild(neighborhoodInput)
  buyForm.appendChild(priceLabel)
  buyForm.appendChild(priceInput)
  buyForm.appendChild(areaLabel)
  buyForm.appendChild(areaInput)

  content.appendChild(buyForm)

  findProperty()

}