const form = document.getElementById("orderForm");
const orderField = document.getElementById("orderField");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  // Get all checked menu items
  const checked = form.querySelectorAll("input[type='checkbox']:checked");

  if (checked.length === 0) {
    alert("Please select at least one item.");
    return;
  }

  // Combine checked values into the hidden field
  const orders = Array.from(checked).map(item => item.value);
  orderField.value = orders.join(", ");

  // Submit form normally to Google Forms
  form.submit();

  // Show confirmation message
  msg.textContent = "✅ Order received! Thank you.";

  // Reset the form after submission
  form.reset();
});
