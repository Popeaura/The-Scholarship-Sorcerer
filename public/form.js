document.getElementById('scholarship-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

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
        // Submit the form data using fetch
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name,
                email,
                qualification,
                statement,
                scholarship
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log('Form submitted successfully:', data);  // Log the success message in browser console
            alert('Form submitted successfully!');  // Alert the user
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.'); // Notify the user
        });
    }
});
