

const footerElement = document.querySelector('#footer')

export default function footer() {
  const text1 = document.createElement('p')
  text1.innerText = "Copyright © Quarten AB"
  footerElement.appendChild(text1)

}
