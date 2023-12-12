import createSection from "./minorComponets/createSection.js";
import createButton from "./minorComponets/createButton.js";
import { getAllProperties, getAllGeneralMsg, getAllSaleMsg, addProperty } from "./server-request.js";
import createParagraf from "./minorComponets/createParagraf.js";

export default function createSellerVeiw(validUser, form) {
  if (validUser) {
    form.innerHTML = "";
    const section = createSection();
    const buttonGeneralMsg = createButton();
    const buttonSellerMsg = createButton();
    const sellerSection = createSection();
    const generalSection = createSection();
    buttonGeneralMsg.innerText = "Allmänna frågor: ";
    buttonSellerMsg.innerText = "Säljformulär: ";
    var dataStorage = "";

    buttonGeneralMsg.addEventListener("click", async function (event) {
      event.preventDefault();
      const generalMsg = await getAllGeneralMsg();
      generalSection.innerHTML = "";
      sellerSection.innerHTML = "";
      for (var i = 0; i < generalMsg.length; i++) {
        const paragraf = createParagraf();
        const generalPSection = createSection();
        generalPSection.id = "generalPSecton" + i;
        paragraf.innerText = Object.values(generalMsg[i]);
        generalPSection.appendChild(paragraf);
        generalSection.appendChild(generalPSection);
        section.appendChild(generalSection);
      }
    });

    buttonSellerMsg.addEventListener("click", async function (event) {
      event.preventDefault();
      const sellerMsg = await getAllSaleMsg();
      generalSection.innerHTML = "";
      sellerSection.innerHTML = "";
      dataStorage = sellerMsg;
      for (var i = 0; i < sellerMsg.length; i++) {
        const paragraf = createParagraf();
        const sellPSection = createSection();
        sellPSection.id = "sellPSection" + i;
        paragraf.innerText = Object.values(sellerMsg[i]);
        sellPSection.appendChild(paragraf);
        sellerSection.appendChild(sellPSection);
        section.appendChild(sellerSection);
      }
    });

    sellerSection.addEventListener("click", async function (event) {
      event.preventDefault();
      const dataLength = await getAllProperties();
      const sellFormData = event.target.innerText;
      for (var i = 0; i < dataStorage.length; i++) {
        const sellFormDataSplit = sellFormData.split(",")
        const id = sellFormDataSplit[sellFormDataSplit.length - 1]
        if (dataStorage[i].id == id) {
          dataStorage[i].id = dataLength.length + 1;
          await addProperty(dataStorage[i]);
          alert("Data skickad");
        }

      }

    });

    form.appendChild(buttonGeneralMsg);
    form.appendChild(buttonSellerMsg);
    form.appendChild(section);
  }
}