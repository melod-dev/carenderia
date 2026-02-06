const form = document.getElementById("orderForm");
const orderField = document.getElementById("orderField");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  // Get checked checkboxes within the form
  const checked = form.querySelectorAll("input[type='checkbox']:checked");

  if (checked.length === 0) {
    alert("Please select at least one item.");
    return;
  }

  // Combine checked values
  let orders = [];
  checked.forEach(item => orders.push(item.value));
  orderField.value = orders.join(", ");

  // Submit to Google Form
  form.submit();

  // Confirmation message
  msg.textContent = "✅ Order received! Thank you.";
});

