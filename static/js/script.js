// LANDING 


document.getElementById('loginForm').addEventListener('submit', function(event) {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic email regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email || !emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!password || password.length < 6) {
            alert('Password must be at least 6 characters long.');
            event.preventDefault();
            return;
        }

       
    });

    // CONTACT PAGE

    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form field values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation flags
        let isValid = true;
        let errors = [];

        // Validate name
        if (name === '') {
            isValid = false;
            errors.push("Full name is required.");
        }

       
        const phonePattern = /^\+?\d{9,15}$/; // Accepts formats like +2547xxxxxxx or 07xxxxxxx
        if (phone !== '' && !phonePattern.test(phone)) {
            isValid = false;
            errors.push("Phone number is invalid. Use format like +2547xxxxxxxx.");
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (email === '' || !emailPattern.test(email)) {
            isValid = false;
            errors.push("Please enter a valid email address.");
        }

        // Validate subject
        if (subject === '') {
            isValid = false;
            errors.push("Subject is required.");
        }

        // Validate message
        if (message === '') {
            isValid = false;
            errors.push("Message cannot be empty.");
        }

        // Show errors or submit
        if (!isValid) {
            alert(errors.join("\n"));
        } else {
            alert("Form submitted successfully!");
           
            this.submit();
        }
    });

    // Reset function
    function resetForm() {
        document.getElementById('contactForm').reset();
    }


    