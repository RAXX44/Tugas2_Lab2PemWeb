const root = document.querySelector(".root");

window.onload = () => {
  alert("Selamat datang! Silakan isi form di bawah ini.");
};

//header
root.innerHTML += `
  <div class="hWrapper">
    <h1 class="header">Tugas 2 Praktikum Pemrograman Web</h1>
  </div>
`;


//main content
root.innerHTML += `
  <div class="main-content">
    <form id="userForm">
      <div>
        <label for="usernameInput">Username</label>
        <input type="text" id="usernameInput" placeholder="Abrar Naufal Fadhillah Cut" required>
      </div>
      <div>
        <label for="nimInput">NIM</label>
        <input type="text" id="nimInput" placeholder="231401130" required>
      </div>
      <div>
        <label for="komInput">KOM</label>
        <input type="text" id="komInput" placeholder="A" required>
      </div>
      <div>
        <label for="photoInput">Upload Photo</label>
        <input type="file" id="photoInput" accept="image/png, image/jpeg" required>
      </div>
      <input type="submit" value="Submit">
    </form>
    <div class="display-container" style="display: none;"></div>
  </div>
`;
//main-content

// Handle form submission
const form = document.getElementById("userForm");
const displayContainer = document.querySelector(".display-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = document.getElementById("usernameInput").value;
  const nim = document.getElementById("nimInput").value;
  const kom = document.getElementById("komInput").value;
  const photo = document.getElementById("photoInput").files[0];

  const photoURL = URL.createObjectURL(photo);

  displayContainer.innerHTML = `
    <div class="card">
      <img src="${photoURL}" alt="User Photo">
      <p>Username: ${username}</p>
      <p>NIM: ${nim}</p>
      <p>KOM: ${kom}</p>
    </div>
  `;

  displayContainer.style.display = "block";
  form.style.width = "370px";

  alert("Form berhasil disubmit!");
});
