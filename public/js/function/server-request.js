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
  console.log(response);
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