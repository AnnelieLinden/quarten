export default function generalForm() {
  const generalFormObj = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    mailAddress: '',
    messageInfo: ''
  };

  const generalFormNames = ['Förnamn: ', 'Efternamn: ', 'Telefonnummer: ', 'E-mail:', 'Meddelande: ']
  const generalFormCreate = document.createElement('form');
  generalFormCreate.setAttribute('id', 'generalQuestionsForm')
  const content = document.querySelector('#content');

  for (let i = 0; i < 5; i++) {
    const label = document.createElement('label');
    if (i == 4) {
      label.id="messageLabel"
    }
    const input = document.createElement('input');
    const lineBreak = document.createElement("br");
    input.type = "text";
    if (i==4) {
      input.id="message"
    }
    label.innerText = generalFormNames[i];    
    generalFormCreate.appendChild(label);    
    generalFormCreate.appendChild(input);
    generalFormCreate.appendChild(lineBreak);
   
  }
  
  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'generalFormBtn')
  submitBtn.innerText = 'Send Message';
  generalFormCreate.appendChild(submitBtn);

  let sendMessage = "";

  content.addEventListener('click', function (event) {
    event.preventDefault();
    const allInput = document.querySelectorAll('input');
    

    
    generalFormObj.firstName = allInput[0].value
    generalFormObj.lastName = allInput[1].value
    generalFormObj.phoneNumber = allInput[2].value
    generalFormObj.mailAddress = allInput[3].value
    generalFormObj.messageInfo = allInput[4].value
    
  
  });
  content.appendChild(generalFormCreate);
}


