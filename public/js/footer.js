import aboutUs from "./about-us"


const footerElement = document.querySelector('#footer')

function footer() {
  const text1 = document.createElement('p')
  text1.innerText = "Copyright © Quarten AB"
  footerElement.appendChild(text1)
  aboutUs()
}
footer()