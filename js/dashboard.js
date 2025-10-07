document.addEventListener('DOMContentLoaded', function() {
    updateVerificationStatus();
    loadDashboardData();
});

function updateVerificationStatus() {
    const isVerified = window.isVerified === true;
    const verificationCard = document.getElementById('verificationCard');
    const verifiedBadge = document.getElementById('verifiedBadge');
    if (isVerified) {
        verificationCard.innerHTML = `
            <div class="card-header">
                <h3>Verification Status</h3>
                <span class="status-badge verified">Verified</span>
            </div>
            <div class="card-content">
                <p>Your identity has been verified. You can now access all community features.</p>
            </div>
        `;
        verifiedBadge.style.display = 'flex';
    } else {
        verificationCard.innerHTML = `
            <div class="card-header">
                <h3>Verification Status</h3>
                <span class="status-badge" style="background: var(--warning-color); color: white;">Pending</span>
            </div>
            <div class="card-content">
                <p>Complete your identity verification to access all features.</p>
                <button class="btn-primary" onclick="showVerificationFromDashboard()">Complete Verification</button>
            </div>
        `;
        verifiedBadge.style.display = 'none';
    }
}

function showVerificationFromDashboard() {
    document.getElementById('app-section').style.display = 'none';
    document.getElementById('verification-section').style.display = 'block';
    showVerificationStep('verification-start');
}

function loadDashboardData() {
    // Simulate loading dashboard data
    console.log('Loading dashboard data...');
}

// Navigation helpers (SPA)
function navigateToSecureFind() {
    hideAllPages();
    document.getElementById('securefind-content').style.display = 'block';
    updateActiveNav('nav-securefind');
}

function navigateToEasyTask() {
    hideAllPages();
    document.getElementById('easytask-content').style.display = 'block';
    updateActiveNav('nav-easytask');
}

function navigateToMessages() {
    alert('Messages feature coming soon!');
}
