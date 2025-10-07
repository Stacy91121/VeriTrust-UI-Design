function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.remove('active');
}

function showSignup() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.remove('active');
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    // Simulate login process
    window.currentUser = { email };
    // Go to verification step in SPA
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('verification-section').style.display = 'block';
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsAccepted = document.getElementById('terms').checked;
    if (!email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    if (!termsAccepted) {
        alert('Please accept the terms and privacy policy');
        return;
    }
    // Simulate signup process
    window.currentUser = { email };
    // Go to verification step in SPA
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('verification-section').style.display = 'block';
}

// Password strength indicator
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('signup-password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const strength = calculatePasswordStrength(this.value);
            updatePasswordStrength(strength);
        });
    }
});

function calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

function updatePasswordStrength(score) {
    const strengthElement = document.querySelector('.password-strength');
    if (!strengthElement) return;
    const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#D32F2F', '#F59E0B', '#F59E0B', '#2CB1BC', '#2E7D32'];
    strengthElement.textContent = levels[score] || '';
    strengthElement.style.color = colors[score] || '';
}
