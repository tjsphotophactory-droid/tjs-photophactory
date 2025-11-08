const form = document.getElementById("bookingForm");
const statusEl = document.getElementById("status");
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblprqlr";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";
  const data = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      statusEl.textContent = "Thank you for booking with Tj's Photophactory!";
      form.reset();
    } else {
      statusEl.textContent = "Error sending form. Please try again.";
    }
  } catch (err) {
    statusEl.textContent = "Network error. Please try again.";
  }
});

function scrollToBooking(serviceName) {
  document.querySelector("select[name='service']").value = serviceName;
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}