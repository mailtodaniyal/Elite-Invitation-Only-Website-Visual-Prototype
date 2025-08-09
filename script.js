        document.addEventListener('DOMContentLoaded', function() {
            // Set RGB values for primary and background colors
            const root = document.documentElement;
            root.style.setProperty('--primary-rgb', '203, 161, 53');
            root.style.setProperty('--bg-rgb', '10, 10, 10');
            
            // Theme Toggle
            const themeToggle = document.querySelector('.theme-toggle');
            let isDark = true;
            
            themeToggle.addEventListener('click', () => {
                isDark = !isDark;
                
                if (isDark) {
                    // Switch to Dark Theme
                    root.style.setProperty('--bg', 'var(--dark-bg)');
                    root.style.setProperty('--primary', 'var(--dark-primary)');
                    root.style.setProperty('--secondary', 'var(--dark-secondary)');
                    root.style.setProperty('--text', 'var(--dark-text)');
                    root.style.setProperty('--muted', 'var(--dark-muted)');
                    root.style.setProperty('--accent', 'var(--dark-accent)');
                    root.style.setProperty('--border', 'var(--dark-border)');
                    root.style.setProperty('--primary-rgb', '203, 161, 53');
                    root.style.setProperty('--bg-rgb', '10, 10, 10');
                } else {
                    // Switch to Light Theme
                    root.style.setProperty('--bg', 'var(--light-bg)');
                    root.style.setProperty('--primary', 'var(--light-primary)');
                    root.style.setProperty('--secondary', 'var(--light-secondary)');
                    root.style.setProperty('--text', 'var(--light-text)');
                    root.style.setProperty('--muted', 'var(--light-muted)');
                    root.style.setProperty('--accent', 'var(--light-accent)');
                    root.style.setProperty('--border', 'var(--light-border)');
                    root.style.setProperty('--primary-rgb', '139, 110, 61');
                    root.style.setProperty('--bg-rgb', '249, 245, 235');
                }
            });

            // FAQ Accordion
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const item = question.parentElement;
                    item.classList.toggle('active');
                    
                    // Close other open items
                    faqQuestions.forEach(q => {
                        if (q !== question && q.parentElement.classList.contains('active')) {
                            q.parentElement.classList.remove('active');
                        }
                    });
                });
            });

            // Scroll Spy
            const sections = document.querySelectorAll('section');
            const scrollDots = document.querySelectorAll('.scroll-dot');

            function updateScrollSpy() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                scrollDots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('data-section') === current) {
                        dot.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', updateScrollSpy);
            updateScrollSpy(); // Initialize

            // Scroll to section when dot is clicked
            scrollDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const sectionId = dot.getAttribute('data-section');
                    const section = document.getElementById(sectionId);
                    if (section) {
                        window.scrollTo({
                            top: section.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Smooth Scroll for Navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Glitch Effect on Hover
            const glitchElements = document.querySelectorAll('.glitch');
            glitchElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    element.style.animation = 'glitch 0.5s infinite';
                });
                element.addEventListener('mouseleave', () => {
                    element.style.animation = '';
                });
            });

            // Ritual Initiation (console message)
            console.log('%c HALT. \n\n This path is restricted to those with proper initiation. \n Proceeding without authorization carries consequences.', 'color: var(--primary); font-family: monospace; font-size: 16px; font-weight: bold;');
        });
