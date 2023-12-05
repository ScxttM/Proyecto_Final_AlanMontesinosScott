const template = (title = "hola") => String.raw`
  <div>
    <h1>${title}</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  `
document.querySelector('#app').innerHTML = template("bsigfunbadson")
