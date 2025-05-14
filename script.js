document.addEventListener('DOMContentLoaded', function() {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            burger.classList.toggle('toggle');
        });
    };
    
    navSlide();
    
    const initProjectSlider = () => {
        const slider = document.querySelector('.project-slider');
        if (!slider) return;
        
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const cards = document.querySelectorAll('.project-card');
        
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth + 20;
        let currentIndex = 0;
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                slider.scrollLeft = currentIndex * cardWidth;
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                slider.scrollLeft = currentIndex * cardWidth;
            }
        });
    };
    
    initProjectSlider();
    
    const initTestimonialSlider = () => {
        const slider = document.querySelector('.testimonial-slider');
        if (!slider) return;
        
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        const cards = document.querySelectorAll('.testimonial-card');
        
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth + 20;
        let currentIndex = 0;
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                slider.scrollLeft = currentIndex * cardWidth;
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                slider.scrollLeft = currentIndex * cardWidth;
            }
        });
    };
    
    initTestimonialSlider();
    
    const initContactForm = () => {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');
        
        const successMessage = document.getElementById('successMessage');
        
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        
        const showError = (input, errorElement, message) => {
            input.classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        };
        
        const clearError = (input, errorElement) => {
            input.classList.remove('error');
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        };
        
        nameInput.addEventListener('blur', () => {
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError, 'Please enter your name');
            } else {
                clearError(nameInput, nameError);
            }
        });
        
        emailInput.addEventListener('blur', () => {
            if (emailInput.value.trim() === '') {
                showError(emailInput, emailError, 'Please enter your email');
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, emailError, 'Please enter a valid email address');
            } else {
                clearError(emailInput, emailError);
            }
        });
        
        subjectInput.addEventListener('blur', () => {
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, subjectError, 'Please enter a subject');
            } else {
                clearError(subjectInput, subjectError);
            }
        });
        
        messageInput.addEventListener('blur', () => {
            if (messageInput.value.trim() === '') {
                showError(messageInput, messageError, 'Please enter your message');
            } else {
                clearError(messageInput, messageError);
            }
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(subjectInput, subjectError);
            clearError(messageInput, messageError);
            
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError, 'Please enter your name');
                isValid = false;
            }
            
            if (emailInput.value.trim() === '') {
                showError(emailInput, emailError, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, emailError, 'Please enter a valid email address');
                isValid = false;
            }
            
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, subjectError, 'Please enter a subject');
                isValid = false;
            }
            
            if (messageInput.value.trim() === '') {
                showError(messageInput, messageError, 'Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                contactForm.style.display = 'none';
                
                successMessage.style.display = 'block';
                
                contactForm.reset();
                
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    contactForm.style.display = 'block';
                }, 5000);
            }
        });
    };
    
    initContactForm();
    
    const initScrollAnimations = () => {
        const sections = document.querySelectorAll('section');
        
        const fadeInOnScroll = () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.8) {
                    section.classList.add('fade-in');
                }
            });
        };
        fadeInOnScroll();
        
        window.addEventListener('scroll', fadeInOnScroll);
    };

    const updateCopyrightYear = () => {
        const yearElement = document.querySelector('.footer-bottom p');
        if (yearElement) {
            const currentYear = new Date().getFullYear();
            yearElement.textContent = `© ${currentYear} My Portfolio. All rights reserved.`;
        }
    };
    
    updateCopyrightYear();
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    initSmoothScroll();
});