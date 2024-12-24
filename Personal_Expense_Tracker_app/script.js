const expanseform = document.getElementById('expanseform');
const expanselist = document.getElementById('expanselist');

expanseform.addEventListener('submit', function(event) {
  event.preventDefault();

  const expanseType = document.getElementById('expanseType').value;
  const expensecategory = document.getElementById('expensecategory').value;
  const amount = document.getElementById("amount").value;

  if (expanseType && expensecategory && !isNaN(amount) && amount > 0) {
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${expanseType}</td>
      <td>${expensecategory}</td>
      <td>${amount}</td>
    `;
    expanselist.appendChild(newRow);

    expanseform.reset();
  } else {
    alert('Please fill out all fields with valid data.');
  }
});
