export default function findProperty(buyForm) {

  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'pTag')
  pTag.innerText = "Hitta din bostad!"

  buyForm.setAttribute("id", "buyForm")

  const propertyLabel = document.createElement('label')
  propertyLabel.innerText = "Bostadstyp:"
 // const propertyInput = document.createElement('input')


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


  const fieldset10 = document.createElement('fieldset')
  fieldset10.setAttribute('id', 'fieldset') //för att få bort ramen runt fältet
  fieldset10.appendChild(villaLabel)
  fieldset10.appendChild(villaInput)
  fieldset10.appendChild(apartmentLabel)
  fieldset10.appendChild(apartmentInput)
  
  
 //content.appendChild(buyForm)


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
  neighborhoodLabel.innerText = "Område:"
  //const neighborhoodInput = document.createElement('input')

  const communityLabel = document.createElement('label')
  const communityLabel1 = document.createElement('label')
  const communityLabel2 = document.createElement('label')
  const communityLabel3 = document.createElement('label')
  const communityLabel4 = document.createElement('label')
  const communityLabel5 = document.createElement('label')
  const communityLabel6 = document.createElement('label')
  const communityLabel7 = document.createElement('label')
  
  communityLabel.innerText = "Karlskrona:"
  communityLabel1.innerText = "Ja"
  const communityInput = document.createElement('input')
  communityInput.setAttribute('type', 'checkbox')
  communityInput.setAttribute('name', 'community')
  communityInput.setAttribute('value', 'checked')

  communityLabel2.innerText = "Malmö:"
  communityLabel3.innerText = "Ja"
  const communityInput2 = document.createElement('input')
  communityInput2.setAttribute('type', 'checkbox')
  communityInput2.setAttribute('name', 'community')
  communityInput2.setAttribute('value', 'checked')

  communityLabel4.innerText = "Ronneby:"
  communityLabel5.innerText = "Ja"
  const communityInput4 = document.createElement('input')
  communityInput4.setAttribute('type', 'checkbox')
  communityInput4.setAttribute('name', 'community')
  communityInput4.setAttribute('value', 'checked')

  communityLabel6.innerText = "Stockholm:"
  communityLabel7.innerText = "Ja"
  const communityInput6 = document.createElement('input')
  communityInput6.setAttribute('type', 'checkbox')
  communityInput6.setAttribute('name', 'community')
  communityInput6.setAttribute('value', 'checked')

  const fieldset20 = document.createElement('fieldset')
  fieldset20.setAttribute('id', 'fieldset') //för att få bort ramen runt fältet 
  fieldset20.appendChild(communityLabel)
  fieldset20.appendChild(communityInput)
  fieldset20.appendChild(communityLabel2)
  fieldset20.appendChild(communityInput2)
  fieldset20.appendChild(communityLabel4)
  fieldset20.appendChild(communityInput4)
  fieldset20.appendChild(communityLabel6)
  fieldset20.appendChild(communityInput6)

 
  const priceLabel = document.createElement('label')
  priceLabel.innerText = "Max pris:"
  //const priceInput = document.createElement('input')

  const maxPriceLabel = document.createElement('label')
  const maxPriceLabel1 = document.createElement('label')
  const maxPriceLabel2 = document.createElement('label')
  const maxPriceLabel3 = document.createElement('label')
  const maxPriceLabel4 = document.createElement('label')
  const maxPriceLabel5 = document.createElement('label')
  const maxPriceLabel6 = document.createElement('label')
  const maxPriceLabel7 = document.createElement('label')

  maxPriceLabel.innerText = 1500000 +" SEK"
  maxPriceLabel1.innerText = "Ja"
  const maxPriceInput = document.createElement('input')
  maxPriceInput.setAttribute('type', 'checkbox')
  maxPriceInput.setAttribute('name', 'community')
  maxPriceInput.setAttribute('value', 'checked')

  maxPriceLabel2.innerText = 2500000 + " SEK"
  maxPriceLabel3.innerText = "Ja"
  const maxPriceInput2 = document.createElement('input')
  maxPriceInput2.setAttribute('type', 'checkbox')
  maxPriceInput2.setAttribute('name', 'community')
  maxPriceInput2.setAttribute('value', 'checked')

  maxPriceLabel4.innerText = 4000000 + " SEK"
  maxPriceLabel5.innerText = "Ja"
  const maxPriceInput4 = document.createElement('input')
  maxPriceInput4.setAttribute('type', 'checkbox')
  maxPriceInput4.setAttribute('name', 'community')
  maxPriceInput4.setAttribute('value', 'checked')

  maxPriceLabel6.innerText = 5500000 + " SEK"
  maxPriceLabel7.innerText = "Ja"
  const maxPriceInput6 = document.createElement('input')
  maxPriceInput6.setAttribute('type', 'checkbox')
  maxPriceInput6.setAttribute('name', 'community')
  maxPriceInput6.setAttribute('value', 'checked')


  const fieldset30 = document.createElement('fieldset')
  fieldset30.setAttribute('id', 'fieldset') //för att få bort ramen runt fältet 
  fieldset30.appendChild(maxPriceLabel)
  fieldset30.appendChild(maxPriceInput)
  fieldset30.appendChild(maxPriceLabel2)
  fieldset30.appendChild(maxPriceInput2)
  fieldset30.appendChild(maxPriceLabel4)
  fieldset30.appendChild(maxPriceInput4)
  fieldset30.appendChild(maxPriceLabel6)
  fieldset30.appendChild(maxPriceInput6)


  const areaLabel = document.createElement('label')
  areaLabel.innerText = "Minsta bostadsarea:"
  //const areaInput = document.createElement('input')

  const minAreaLabel = document.createElement('label')
  const minAreaLabel1 = document.createElement('label')
  const minAreaLabel2 = document.createElement('label')
  const minAreaLabel3 = document.createElement('label')
  const minAreaLabel4 = document.createElement('label')
  const minAreaLabel5 = document.createElement('label')
  const minAreaLabel6 = document.createElement('label')
  const minAreaLabel7 = document.createElement('label')

  minAreaLabel.innerText = 30 + " kvm"
  minAreaLabel1.innerText = "Ja"
  const minAreaInput = document.createElement('input')
  minAreaInput.setAttribute('type', 'checkbox')
  minAreaInput.setAttribute('name', 'community')
  minAreaInput.setAttribute('value', 'checked')

  minAreaLabel2.innerText = 90 + " kvm"
  minAreaLabel3.innerText = "Ja"
  const minAreaInput2 = document.createElement('input')
  minAreaInput2.setAttribute('type', 'checkbox')
  minAreaInput2.setAttribute('name', 'community')
  minAreaInput2.setAttribute('value', 'checked')

  minAreaLabel4.innerText = 150 + " kvm"
  minAreaLabel5.innerText = "Ja"
  const minAreaInput4 = document.createElement('input')
  minAreaInput4.setAttribute('type', 'checkbox')
  minAreaInput4.setAttribute('name', 'community')
  minAreaInput4.setAttribute('value', 'checked')

  minAreaLabel6.innerText = 200 + " kvm"
  minAreaLabel7.innerText = "Ja"
  const minAreaInput6 = document.createElement('input')
  minAreaInput6.setAttribute('type', 'checkbox')
  minAreaInput6.setAttribute('name', 'community')
  minAreaInput6.setAttribute('value', 'checked')

  const fieldset40 = document.createElement('fieldset')
  fieldset40.setAttribute('id', 'fieldset') //för att få bort ramen runt fältet 
  fieldset40.appendChild(minAreaLabel)
  fieldset40.appendChild(minAreaInput)
  fieldset40.appendChild(minAreaLabel2)
  fieldset40.appendChild(minAreaInput2)
  fieldset40.appendChild(minAreaLabel4)
  fieldset40.appendChild(minAreaInput4)
  fieldset40.appendChild(minAreaLabel6)
  fieldset40.appendChild(minAreaInput6)


  buyForm.appendChild(pTag)
  buyForm.appendChild(propertyLabel)
  //buyForm.appendChild(propertyInput)
  
//radioknapp
 /* buyForm.appendChild(apartmentInputLabel)
  buyForm.appendChild(apartmentInput)
  buyForm.appendChild(villaInputLabel)
  buyForm.appendChild(villaInput)*/
  
  buyForm.appendChild(fieldset10) //för att gruppera bostadstyp
   /*buyForm.appendChild(villaLabel)
  buyForm.appendChild(villaInput)
  buyForm.appendChild(apartmentLabel)
  buyForm.appendChild(apartmentInput)*/

  buyForm.appendChild(neighborhoodLabel)
  //buyForm.appendChild(neighborhoodInput)
  buyForm.appendChild(fieldset20) //för att gruppera områden
  /*buyForm.appendChild(communityLabel)
  buyForm.appendChild(communityInput)
  buyForm.appendChild(communityLabel2)
  buyForm.appendChild(communityInput2)
  buyForm.appendChild(communityLabel4)
  buyForm.appendChild(communityInput4)
  buyForm.appendChild(communityLabel6)
  buyForm.appendChild(communityInput6)*/
  
  buyForm.appendChild(priceLabel)
  //buyForm.appendChild(priceInput)
  buyForm.appendChild(fieldset30) //för att gruppera maxpris
 /* buyForm.appendChild(maxPriceLabel)
  buyForm.appendChild(maxPriceInput)
  buyForm.appendChild(maxPriceLabel2)
  buyForm.appendChild(maxPriceInput2)
  buyForm.appendChild(maxPriceLabel4)
  buyForm.appendChild(maxPriceInput4)
  buyForm.appendChild(maxPriceLabel6)
  buyForm.appendChild(maxPriceInput6)*/

  buyForm.appendChild(areaLabel)
  buyForm.appendChild(fieldset40) //för att gruppera bostadsarea
  /*buyForm.appendChild(minAreaLabel)
  buyForm.appendChild(minAreaInput)
  buyForm.appendChild(minAreaLabel2)
  buyForm.appendChild(minAreaInput2)
  buyForm.appendChild(minAreaLabel4)
  buyForm.appendChild(minAreaInput4)
  buyForm.appendChild(minAreaLabel6)
  buyForm.appendChild(minAreaInput6)*/

  
 // buyForm.appendChild(areaInput)

  const searchbtn = document.createElement('input')
  searchbtn.setAttribute('type', 'submit', 'value', 'Search')
  
  buyForm.appendChild(searchbtn)
    
  content.appendChild(buyForm)

  findProperty()

}