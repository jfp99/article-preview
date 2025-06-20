
const shareButton = document.getElementById('shareButton');
    const shareOverlay = document.getElementById('shareOverlay');
    
    shareButton.addEventListener('click', () => {
    const isActive = shareButton.classList.toggle('active');
    shareOverlay.classList.toggle('active');
    shareButton.setAttribute('aria-expanded', isActive);
    
    // Close when clicking outside
    if (isActive) {
    document.addEventListener('click', handleClickOutside);
    } else {
    document.removeEventListener('click', handleClickOutside);
    }
});

function handleClickOutside(e) {
    if (!shareButton.contains(e.target) && !shareOverlay.contains(e.target)) {
    shareButton.classList.remove('active');
    shareOverlay.classList.remove('active');
    shareButton.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', handleClickOutside);
    }
    }