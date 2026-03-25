// ========================================
// Mobile Menu Toggle
// ========================================

function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = menu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
}

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#" or doesn't have a matching element
            if (href === '#' || href.length <= 1) return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// HLS Video Setup
// ========================================

function initHLSVideos() {
    const videoConfigs = [
        {
            id: 'processVideo',
            src: 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'
        },
        {
            id: 'statsVideo',
            src: 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'
        },
        {
            id: 'ctaVideo',
            src: 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'
        }
    ];

    videoConfigs.forEach(config => {
        const video = document.getElementById(config.id);

        if (video && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(config.src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play().catch(e => {
                    console.log('Auto-play prevented:', e);
                });
            });
        } else if (video && video.canPlayType('application/vnd.apple.mpegurl')) {
            // For Safari which has native HLS support
            video.src = config.src;
            video.addEventListener('loadedmetadata', function() {
                video.play().catch(e => {
                    console.log('Auto-play prevented:', e);
                });
            });
        }
    });
}

// ========================================
// Blur Text Animation (replacing React animation)
// ========================================

function initBlurTextAnimation() {
    const blurText = document.querySelector('.blur-text');

    if (!blurText) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'blurIn 0.8s ease-out 0.3s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    if (blurText) {
        observer.observe(blurText);
    }
}

// ========================================
// Fade-in Animation on Scroll
// ========================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-content, .feature-card, .testimonial-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Navbar Background on Scroll
// ========================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add background when scrolled
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.5)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Video Autoplay on Visibility
// ========================================

function initVideoAutoplay() {
    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                video.play().catch(e => {
                    console.log('Auto-play prevented:', e);
                });
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.25
    });

    videos.forEach(video => {
        observer.observe(video);
    });
}

// ========================================
// Handle Button Clicks
// ========================================

function initButtonHandlers() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Check if button is inside a nav link
            const isNavButton = button.closest('.nav-menu');

            if (button.textContent.includes('Get Started') ||
                button.textContent.includes('Book a Call') ||
                button.textContent.includes('View Pricing')) {
                console.log('CTA button clicked:', button.textContent.trim());
                // Add your CTA logic here (e.g., open modal, redirect to form, etc.)
            }
        });
    });
}

// ========================================
// Lazy Loading for Videos
// ========================================

function initLazyLoading() {
    const videos = document.querySelectorAll('video[data-src]');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const src = video.getAttribute('data-src');

                if (src) {
                    video.src = src;
                    video.load();
                    video.removeAttribute('data-src');
                }

                videoObserver.unobserve(video);
            }
        });
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// ========================================
// Parallax Effect for Hero Video
// ========================================

function initParallax() {
    const heroVideo = document.getElementById('heroVideo');

    if (!heroVideo) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < 1000) {
            heroVideo.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ========================================
// Stats Counter Animation
// ========================================

function initStatsCounter() {
    const statValues = document.querySelectorAll('.stat-value');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const text = statValue.textContent;

                // Extract number from text
                const match = text.match(/(\d+)/);
                if (match) {
                    const targetNumber = parseInt(match[0]);
                    const suffix = text.replace(match[0], '');

                    let current = 0;
                    const increment = targetNumber / 50;
                    const duration = 1500;
                    const stepTime = duration / 50;

                    const counter = setInterval(() => {
                        current += increment;

                        if (current >= targetNumber) {
                            statValue.textContent = text;
                            clearInterval(counter);
                        } else {
                            statValue.textContent = Math.floor(current) + suffix;
                        }
                    }, stepTime);
                }

                observer.unobserve(statValue);
            }
        });
    }, {
        threshold: 0.5
    });

    statValues.forEach(stat => {
        observer.observe(stat);
    });
}

// ========================================
// Performance Optimization
// ========================================

function initPerformanceOptimizations() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');

        // Disable all animations
        const style = document.createElement('style');
        style.textContent = `
            .reduce-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// Initialize All Functions on DOM Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Neural Interface website loaded');

    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initHLSVideos();
    initBlurTextAnimation();
    initScrollAnimations();
    initNavbarScroll();
    initVideoAutoplay();
    initButtonHandlers();
    initLazyLoading();
    initParallax();
    initStatsCounter();
    initPerformanceOptimizations();

    console.log('All features initialized');
});

// ========================================
// Handle Page Visibility Changes
// ========================================

document.addEventListener('visibilitychange', () => {
    const videos = document.querySelectorAll('video');

    if (document.hidden) {
        // Pause all videos when page is hidden
        videos.forEach(video => video.pause());
    } else {
        // Resume videos that are in viewport
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInViewport) {
                video.play().catch(e => {
                    console.log('Auto-play prevented:', e);
                });
            }
        });
    }
});

// ========================================
// Error Handling for Videos
// ========================================

window.addEventListener('error', (e) => {
    if (e.target.tagName === 'VIDEO') {
        console.error('Video loading error:', e);
        // You could show a fallback image or message here
    }
}, true);
