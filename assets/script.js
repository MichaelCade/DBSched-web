// DBSched Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeSmoothScrolling();
    addFadeInAnimation();
    handleHeaderScroll();
    handleSubscribeForm();
});

/* -------------------- TABS -------------------- */
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

/* -------------------- SMOOTH SCROLL -------------------- */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

/* -------------------- HEADER SCROLL EFFECT -------------------- */
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(17, 24, 39, 0.95)'; // Darker for DBSched
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--bg-color)';
            header.style.backdropFilter = 'none';
        }
    });
}

/* -------------------- FADE-IN ANIMATION -------------------- */
function addFadeInAnimation() {
    const cards = document.querySelectorAll('.feature-card, .doc-card, .download-item, .dashboard-preview');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/* -------------------- SUBSCRIBE FORM -------------------- */
function handleSubscribeForm() {
    const form = document.querySelector('.subscribe-form');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }
        // Placeholder alert - replace with API integration
        alert(`Thanks! We'll notify you at ${email} when DBSched launches.`);
        emailInput.value = '';
    });
}
