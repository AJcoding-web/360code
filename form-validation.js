// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Reset error states
        contactForm.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        // Validate name
        if (name.value.trim() === '') {
            name.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        // Validate subject
        if (subject.value === '') {
            subject.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            message.closest('.form-group').classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            // In a real app, you would send this data to your server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Visit Form Validation
const visitForm = document.getElementById('visit-form');
if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset error states
        visitForm.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        
        // Validate all required fields
        visitForm.querySelectorAll('[required]').forEach(input => {
            if (input.value.trim() === '') {
                input.closest('.form-group').classList.add('error');
                isValid = false;
            }
        });
        
        if (isValid) {
            // In a real app, you would send this data to your server
            alert('Your visit has been scheduled! We will confirm the details shortly.');
            visitForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}