// ===== NAVIGATION =====
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden-section');
    });

    // Show new section with animation
    const newSection = document.getElementById(sectionId);
    newSection.classList.remove('hidden-section');

    // Trigger reflow to restart animation
    void newSection.offsetWidth;

    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
}


function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = Math.random() > 0.5 ? '#a100ff' : '#ff00c8';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function showFavorite() {
    const btn = document.getElementById('favorite-btn');
    const result = document.getElementById('favorite-result');

    if (btn) btn.style.display = 'none';
    if (result) result.classList.remove('hidden');

    startHearts();
}

function startHearts() {
    setInterval(function () {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💜';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (15 + Math.random() * 30) + 'px';
        heart.style.animationDuration = (4 + Math.random() * 4) + 's';
        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 7000);
    }, 200);
}

setTimeout(() => {
    document.querySelectorAll('.heart').forEach(heart => heart.remove());
}, 10000);

// ===== IMAGE GALLERY =====
function createGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    for (let i = 1; i <= 8; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="images/PMT_${i}.jpg" alt="PMT_${i}" onerror="this.src='https://via.placeholder.com/300?text=PMT_${i}'">
            <div class="gallery-caption">PMT_${i}</div>
        `;
        galleryGrid.appendChild(galleryItem);
    }
}

// ===== VIDEO GALLERY =====
function createVideoGallery() {
    const videoGrid = document.getElementById('video-grid');
    if (!videoGrid) return;

    // Create 3 video containers
    const videos = ['Video 1', 'Video 2', 'Video 3'];

    videos.forEach((videoName, index) => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.innerHTML = `
            <video controls preload="metadata">
                <source src="videos/video${index + 1}.mp4" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
            <div class="video-title-text">${videoName}</div>
        `;
        videoGrid.appendChild(videoContainer);
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
    createGallery();
    createVideoGallery();

    // Set initial active section
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});
