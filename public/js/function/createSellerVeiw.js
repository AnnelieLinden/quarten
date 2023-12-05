import createSection from "./minorComponets/createSection.js";
import createButton from "./minorComponets/createButton.js";
import { getAllGeneralMsg, getAllSaleMsg, addProperty } from "./server-request.js";
import createParagraf from "./minorComponets/createParagraf.js";

export default function createSellerVeiw(validUser, form) {
  if (validUser) {
    form.innerHTML = "";
    const section = createSection();
    const buttonGeneralMsg = createButton();
    const buttonSellerMsg = createButton();
    const sellerSection = createSection();
    const generalSection = createSection();
    buttonGeneralMsg.innerText = "<v>";
    buttonSellerMsg.innerText = "<-v->";

    buttonGeneralMsg.addEventListener("click", async function (event) {
      const generalMsg = await getAllGeneralMsg();
      generalSection.innerHTML = "";
      sellerSection.innerHTML = "";
      for (var i = 0; i < generalMsg.length; i++) {
        const paragraf = createParagraf();
        paragraf.innerText = Object.values(generalMsg[i]);
        generalSection.appendChild(paragraf);
        section.appendChild(generalSection);
      }
    });

    buttonSellerMsg.addEventListener("click", async function (event) {
      const sellerMsg = await getAllSaleMsg();
      generalSection.innerHTML = "";
      sellerSection.innerHTML = "";
      for (var i = 0; i < sellerMsg.length; i++) {
        const paragraf = createParagraf();
        paragraf.innerText = Object.values(sellerMsg[i]);
        sellerSection.appendChild(paragraf);
        section.appendChild(sellerSection);
      }
    });

    sellerSection.addEventListener("click", async function (event) {
      const data = event.target;
      await addProperty(data);
      alert("Data skickad");
    });

    section.appendChild(buttonGeneralMsg);
    section.appendChild(buttonSellerMsg);
    form.appendChild(section);
  }
}