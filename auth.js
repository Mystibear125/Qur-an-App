// Sign In Form Handler
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate sign in
        console.log('Sign In:', { email, remember });
        alert('Sign in successful! Welcome back.');
        
        // Redirect to home page
        window.location.href = 'index.html';
    });
}

// Sign Up Form Handler
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        // Basic validation
        if (!fullname || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Password validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // Password match validation
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Terms validation
        if (!terms) {
            alert('Please agree to the Terms & Conditions');
            return;
        }
        
        // Simulate sign up
        console.log('Sign Up:', { fullname, email });
        alert('Account created successfully! Welcome to Al-Qur\'an.');
        
        // Redirect to home page
        window.location.href = 'index.html';
    });
}

// Password visibility toggle
function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const wrapper = input.parentElement;
        
        // Add toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.textContent = '👁️';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
        `;
        
        toggleBtn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                toggleBtn.textContent = '👁️‍🗨️';
            } else {
                input.type = 'password';
                toggleBtn.textContent = '👁️';
            }
        });
    });
}