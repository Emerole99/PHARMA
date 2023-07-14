// Retrieve the token and user ID from localStorage
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

// Get references to the userInfo element and the div element
const userInfo = document.querySelector('#userInfo');
const div = document.querySelector('.div');

// Add a click event listener to the userInfo element
userInfo.addEventListener('click', () => {
  // Toggle the 'hidden' class on the div element
  div.classList.toggle('hidden');
});

// Make a request to fetch login info from the server
fetch('http://localhost:5000/user/${userId}', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  if (!response.ok) {
      throw new Error('Failed to fetch login information.');
  }
  return response.json();
})
.then(data => {
  // Update the profile page with the retrieved login info
  const firstnameElement = document.getElementById('firstname');
  const lastnameElement = document.getElementById('lastname');
  const emailElement = document.getElementById('email');
  
  firstnameElement.textContent = data.first_name;
  lastnameElement.textContent = data.last_name;
  emailElement.textContent = data.email;
})

.catch(error => {
  console.error(error);
  alert('An error occurred while fetching login info.');
});





