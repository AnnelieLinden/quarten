const generalForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  mailAddress: '',
  messageInfo: ''
};

const generalFormNames = ['Firstname: ', 'Lastname: ', 'Phonenumber: ', 'Mailaddress:', 'Message: ']

const generalFormCreate = document.createElement('form');

const container = document.querySelector('main');


container.appendChild(generalFormCreate); 

for (let i = 0; i < 5; i++)
{
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = "text";
  label.innerText = generalFormNames[i];
  container.appendChild(label);
  container.appendChild(input);  
}

const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Send Message'; 


container.appendChild(submitBtn); 

let sendMessage = "";

container.addEventListener('submit', function (event) {
  event.preventDefault();
  
}); 

