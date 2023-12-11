export async function getAllProperties() {
  const res = await fetch('/data');
  const data = await res.json();
  return data;
}

export async function getAllGeneralMsg() {
  const res = await fetch('/generalForms');
  const data = await res.json();
  return data;
}

export async function getAllSaleMsg() {
  const res = await fetch('/saleForms');
  const data = await res.json();
  return data;
}

export async function addSaleForm(saleForm) {
  var response = await fetch('saleForms', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(saleForm)
  })
  if (response.ok) {
    const responseJson = await response.json();
    document.getElementById('saleForm').reset();
    alert("Formuläret är skickat och läggs upp på sidan när det granskats av en mäklare.")
    return responseJson
  }
}

export async function addGenaralForm(generalForm) {
  var response = await fetch('generalForms', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(generalForm)
  })
  if (response.ok) {
    const responseJson = await response.json();
    document.getElementById('generalQuestionsForm').reset();
    alert("Tack för att du kontaktat oss. Du blir snart kontaktad av någon av våra mäklare.")
   return responseJson 
  }
}

export async function addProperty(propertyObj) {
  var response = await fetch('/data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(propertyObj)
  })
  response = await response.json();
  console.log(response);
}

export async function login(userLogin) {
  var response = await fetch('/users/');
  var validUser = false;
  response = await response.json();
  response.forEach(user => {
    if (user.userName === userLogin.userName) {
      if (user.pass === userLogin.pass) {
        validUser = true;
      }
    }
  });
  return validUser;
}

export async function getOneProperty(propertyId) {
  const res = await fetch('/data/' + propertyId);
  const data = await res.json();
  return data;
}

export async function updateUser(user) {
  let response = await fetch('/data/' + user.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });

  response = await response.json()
  console.log(response);
}