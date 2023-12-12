function selectImage(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function crearUsuario() {
  var username = document.getElementById("new-username").value;
  var email = document.getElementById("new-email").value;
  var password = document.getElementById("new-password").value;

  const user = {
    username: username,
    email: email,
    password: password,
  };

  document.getElementById("new-username").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("new-password").value = "";

  localStorage.setItem(username, JSON.stringify(user));
  alert("Usuario creado correctamente");
}

function iniciarSesion() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let user = localStorage.getItem(username);
  if (user) {
    user = JSON.parse(user);
    if (user.username == username && user.password == password) {
      alert("Bienvenido " + user.username);
      window.location.href = "index.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}
