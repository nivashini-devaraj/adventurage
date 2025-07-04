 // Get all tab buttons and content sections
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and content sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to the clicked button and the corresponding content
        button.classList.add('active');
        const activeTab = button.getAttribute('data-tab');
        document.getElementById(activeTab).classList.add('active');
    });
});

//Quantity increase & decrease button
  const qtyInput = document.getElementById('quantity');
  const btnIncrease = document.getElementById('increase');
  const btnDecrease = document.getElementById('decrease');

  btnIncrease.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });

  btnDecrease.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });