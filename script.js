// Twinkle Star School minimal JS — future enhancement
// You can expand this file as needed

// Example: Simple form validation (optional)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    if (!name || !email) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
}
