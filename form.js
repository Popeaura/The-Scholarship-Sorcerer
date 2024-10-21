document.getElementById('scholar').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const qualification = document.getElementById('qualification').value;
    const statement = document.getElementById('statement').value;
    const scholarship = document.getElementById('scholarship').value;

    // Simple validation
    if (name === '' || email === '' || qualification === '' || statement === '' || scholarship === '') {
        alert('Please fill in all fields');
    } else {
        alert('Application submitted successfully!');
        // You can send this data to the server here
    }
});
