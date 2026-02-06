const form = document.getElementById("orderForm");
const orderField = document.getElementById("orderField");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const checked = document.querySelectorAll("input[type='checkbox']:checked");

  if (checked.length === 0) {
    alert("Please select at least one item.");
    return;
  }

  let orders = [];
  checked.forEach(item => orders.push(item.value));
  orderField.value = orders.join(", ");

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSf0AJ6psAwQbB9L_irGQBHH5U6Esx5v8Tzx7L-SQqvCf3JUAQ/formResponse", {  // <-- REPLACE WITH YOUR formResponse URL
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  });

  msg.textContent = "✅ Order received! Thank you.";
  form.reset();
});
