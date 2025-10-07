function startVerification() {
    showVerificationStep('verification-pending');
    
    // Simulate Plaid connection process
    setTimeout(() => {
        // Randomly succeed or fail for demo purposes
        const success = Math.random() > 0.3; // 70% success rate
        
        if (success) {
            window.isVerified = true;
            showVerificationStep('verification-success');
        } else {
            showVerificationStep('verification-failed');
        }
    }, 3000);
}

function retryVerification() {
    showVerificationStep('verification-start');
}

function skipVerification() {
    window.isVerified = false;
    goToDashboard();
}

function goToDashboard() {
    document.getElementById('verification-section').style.display = 'none';
    document.getElementById('app-section').style.display = 'flex';
    showDashboard();
}

function contactSupport() {
    alert('Support contact feature would be implemented here');
}

function showVerificationStep(stepId) {
    document.querySelectorAll('.verification-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
    
    // Update progress stepper
    const steps = document.querySelectorAll('.step');
    if (stepId === 'verification-pending') {
        steps[1].classList.add('active');
    } else if (stepId === 'verification-success') {
        steps[1].classList.remove('active');
        steps[1].classList.add('completed');
        steps[2].classList.add('active');
    } else {
        steps[1].classList.remove('completed');
        steps[2].classList.remove('active');
    }
}

// On SPA load, always start at verification-start
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('verification-start')) {
        showVerificationStep('verification-start');
    }
});
