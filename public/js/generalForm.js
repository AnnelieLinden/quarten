import { addGenaralForm } from "./function/server-request.js";

export default function generalForm() {
  const generalFormObj = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    mailAddress: '',
    messageInfo: ''
  };

  const generalFormNames = ['Förnamn: ', 'Efternamn: ', 'Telefonnummer: ', 'E-mail:']
  const generalFormCreate = document.createElement('form');
  generalFormCreate.setAttribute('id', 'generalQuestionsForm')
  const content = document.querySelector('#content');

  for (let i = 0; i < 4; i++) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const lineBreak = document.createElement("br");
    input.type = "text";
    label.innerText = generalFormNames[i];
    generalFormCreate.appendChild(label);
    generalFormCreate.appendChild(input);
    generalFormCreate.appendChild(lineBreak);
  }
  const messageLabel = document.createElement('label')
  messageLabel.setAttribute('id', 'messageLabel')
  messageLabel.innerText = "Meddelande:"
  const messageInput = document.createElement('textarea')
  messageInput.setAttribute('id', 'message')

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'generalFormBtn')
  submitBtn.innerText = 'Send Message';
  generalFormCreate.appendChild(messageLabel)
  generalFormCreate.appendChild(messageInput)
  generalFormCreate.appendChild(submitBtn);

  submitBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const allInput = document.querySelectorAll('input');
    const formTextArea = document.getElementById("message");
    generalFormObj.firstName = allInput[0].value
    generalFormObj.lastName = allInput[1].value
    generalFormObj.phoneNumber = allInput[2].value
    generalFormObj.mailAddress = allInput[3].value
    generalFormObj.messageInfo = formTextArea.value;
    await addGenaralForm(generalFormObj);
  });
  content.appendChild(generalFormCreate);
}


