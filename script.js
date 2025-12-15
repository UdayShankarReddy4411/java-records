const fileMap = {
    1: "Java week-1.pdf",
    2: "Java week-2.pdf",
    3: "Java week-3.pdf",
    4: "Java week-4.pdf",
    5: "Java week-5.pdf",
    6: "Java week-6.pdf",
    7: "Java week-7.pdf",
    8: "Java week-8.pdf",
    9: "Java week-9.pdf",
    10:"Java week-10.pdf",
    11:"Java week-11.pdf",
    12:"Java week-12.pdf"
};

// Theme Toggle Functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-icon').textContent = '☀️';
        document.getElementById('theme-text').textContent = 'Light';
    }
});

// Load Week Functionality
function loadWeek(week) {
    const weekTitle = document.getElementById('week-title');
    const frame = document.getElementById('frame');
    const downloadLink = document.getElementById('downloadLink');
    const loading = document.getElementById('loading');
    
    // Update title
    weekTitle.textContent = `Week ${week} - Lab Assignment`;
    
    // Show loading
    loading.classList.add('active');
    frame.style.display = 'none';
    downloadLink.style.display = 'none';
    
    // Remove active class from all boxes
    document.querySelectorAll('.week-box').forEach(box => {
        box.classList.remove('active');
    });
    
    // Add active class to clicked box
    const weekBoxes = document.querySelectorAll('.week-box');
    if (weekBoxes[week - 1]) {
        weekBoxes[week - 1].classList.add('active');
    }
    
    // Simulate loading and set iframe source
    setTimeout(() => {
        frame.src = `converted/week${week}.html`;
        downloadLink.href = `docs/${fileMap[week]}`;
        
        loading.classList.remove('active');
        frame.style.display = 'block';
        downloadLink.style.display = 'inline-flex';
    }, 500);
}

// Iframe load event
document.getElementById('frame').addEventListener('load', function() {
    const loading = document.getElementById('loading');
    loading.classList.remove('active');
});
