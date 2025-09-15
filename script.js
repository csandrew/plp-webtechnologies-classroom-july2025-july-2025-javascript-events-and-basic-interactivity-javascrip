// ================================
// Theme Toggle Feature
// ================================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ================================
// Navigation Links (Smooth Scroll)
// ================================
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// ================================
// Character Counter Feature
// ================================
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 200;

messageInput.addEventListener("input", () => {
  const length = messageInput.value.length;
  charCount.textContent = `${length} / ${maxChars}`;
  if (length > maxChars) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});

// ================================
// Custom Form Validation
// ================================
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission
  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Validate name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate email with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate message
  const message = messageInput.value.trim();
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    charCount.textContent = "0 / 200"; // reset counter
  }
});
