
const shareButton = document.getElementById('shareButton');
    const shareTooltip = document.getElementById('shareTooltip');
    
    shareButton.addEventListener('click', () => {
    const isActive = shareButton.classList.toggle('active');
    shareTooltip.classList.toggle('active');
    shareButton.setAttribute('aria-expanded', isActive);
    
    // Close when clicking outside
    if (isActive) {
    document.addEventListener('click', handleClickOutside);
    } else {
    document.removeEventListener('click', handleClickOutside);
    }
});

function handleClickOutside(e) {
    if (!shareButton.contains(e.target) && !shareTooltip.contains(e.target)) {
    shareButton.classList.remove('active');
    shareTooltip.classList.remove('active');
    shareButton.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', handleClickOutside);
    }
    }