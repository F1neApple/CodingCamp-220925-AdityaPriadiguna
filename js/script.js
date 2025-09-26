welcomeMessage();

/// Welcome Message
function welcomeMessage() {
  /// Prompt user for their name
  let username = prompt("Enter your name:");
  /// If a name is entered, display it in the header; otherwise, show a default message
  if (username) {
    /// Display the username in the header
    document.getElementById("username").innerHTML = username;
  } else {
    /// If no name is entered, show a default welcome message
    alert("Selamat Datang di Valoopa!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const specialCharRegex = /^[a-zA-Z0-9\s]+$/;

  if (!name || !email || !message) {
    errorMsg.textContent = "⚠️ Semua kolom wajib diisi.";
    errorMsg.classList.remove("hidden");
    return;
  }

  if (!specialCharRegex.test(name)) {
    errorMsg.textContent = "⚠️ Nama tidak boleh mengandung karakter spesial.";
    errorMsg.classList.remove("hidden");
    return;
  }

  if (!specialCharRegex.test(message)) {
    errorMsg.textContent = "⚠️ Pesan tidak boleh mengandung karakter spesial.";
    errorMsg.classList.remove("hidden");
    return;
  }

  errorMsg.classList.add("hidden");
  alert("✅ Pesan berhasil dikirim!");
  this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
