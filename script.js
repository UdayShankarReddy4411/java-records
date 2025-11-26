const fileMap = {
    1: "Java-week-1.docx",
    2: "Java-week-2.docx",
    3: "Java-week-3.docx",
    4: "Java week-4.docx",
    5: "Java week-5.docx",
    6: "JAVA-WEEK-6.docx",
    7: "Java-week-7.docx",
    8: "JAVA-WEEK-8.docx",
    9: "JAVA-WEEK-9.docx",
    10: "JAVA-WEEK-10.docx",
    11: "JAVA-WEEK-11.docx",
    12: "JAVA-WEEK-12.docx"
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
    weekTitle.textContent = `Week ${week} Content`;
    
    // Show loading
    loading.classList.add('active');
    frame.style.display = 'none';
    downloadLink.style.display = 'none';
    
    // Remove active class from all boxes
    document.querySelectorAll('.week-box').forEach(box => {
        box.classList.remove('active');
    });
    
    // Add active class to clicked box - find the correct week box
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
