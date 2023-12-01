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

  const container = document.querySelector('main');


  container.appendChild(generalFormCreate);

  for (let i = 0; i < 5; i++) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const lineBreak = document.createElement("br");
    input.type = "text";
    label.innerText = generalFormNames[i];    
    container.appendChild(label);    
    container.appendChild(input);
    container.appendChild(lineBreak);
    
  }

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Send Message';


  container.appendChild(submitBtn);

  let sendMessage = "";

  container.addEventListener('click', function (event) {
    event.preventDefault();
    
  
  });

  
  
}

