const logoutBtn = document.querySelector('.logout')

logoutBtn.addEventListener('click', () => {
    //This will Clear the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId')

    // take me back to the landing page
    window.location.href = 'index.html';
});