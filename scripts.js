document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            this.parentElement.classList.toggle("active");
        });
    });
});




let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = document.querySelectorAll('.slide').length;

        function showSlides() {
            slideIndex++;
            if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }
            updateSlides();
            setTimeout(showSlides, 3000); // Auto-slide every 3 seconds
        }

        function currentSlide(index) {
            slideIndex = index;
            updateSlides();
        }

        function updateSlides() {
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === slideIndex);
            });
        }

        // Initialize the slider
        dots[0].classList.add('active');
        showSlides();




// Data for each course
const courseData = {
    'front-end': {
        title: 'Front End Development',
        description: 'Master advanced skills with a 6-week online program.',
        fees: '₹30,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    },
    'full-stack': {
        title: 'Full Stack Development',
        description: 'Master advanced skills with a 12-week online program.',
        fees: '₹45,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    },
    'software-testing': {
        title: 'Software Testing',
        description: 'Master advanced skills with a 4-week online program.',
        fees: '₹25,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    },
    'java-developer': {
        title: 'Java Developer',
        description: 'Master advanced skills with a 8-week online program.',
        fees: '₹40,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    },
    'python-developer': {
        title: 'Python Developer',
        description: 'Master advanced skills with a 8-week online program.',
        fees: '₹35,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        description: 'Master advanced skills with a 12-week online program.',
        fees: '₹55,000 + 18% GST',
        day: '2',
        month: 'May',
        schedule: 'Mon, Tue, Thu, Fri, 07:30 PM to 09:30 PM'
    }
};

// Function to show category
function showCategory(category) {
    const tabs = document.querySelectorAll('.tabs button');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => card.classList.remove('show'));

    const selectedCards = document.querySelectorAll(`.course-card.${category}`);
    selectedCards.forEach(card => card.classList.add('show'));

    // Hide hero section when switching categories
    document.getElementById('course-details').classList.remove('active');
}

// Function to show course details
function showCourseDetails(courseId) {
    const course = courseData[courseId];
    if (course) {
        document.getElementById('course-title').textContent = course.title;
        document.getElementById('course-description').textContent = course.description;
        document.getElementById('course-fees').textContent = course.fees;
        document.getElementById('course-day').textContent = course.day;
        document.getElementById('course-month').textContent = course.month;
        document.getElementById('course-schedule').textContent = course.schedule;

        // Show the hero section
        document.getElementById('course-details').classList.add('active');

        // Scroll to the hero section smoothly
        document.getElementById('course-details').scrollIntoView({ behavior: 'smooth' });
    }
}









        
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.is-testimonials-wrapper');
    const cards = document.querySelectorAll('.is-testimonial-card');
    const dotsContainer = document.querySelector('.is-testimonials-dots');
    let currentIndex = 0;
    const totalCards = cards.length;

    // Function to calculate cards per view based on screen size
    function getCardsPerView() {
        return window.innerWidth <= 768 ? 1 : 2; // 1 card on mobile, 2 on larger screens
    }

    let cardsPerView = getCardsPerView();
    let totalSlides = Math.ceil(totalCards / cardsPerView);

    // Dynamically generate dots based on the number of slides
    function generateDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        totalSlides = Math.ceil(totalCards / cardsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('is-testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
    }

    // Initial dot generation
    generateDots();

    function showSlide(index) {
        // Ensure the index stays within bounds
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // Calculate the transform percentage based on cards per view
        const translateX = -(currentIndex * (100 / cardsPerView));
        wrapper.style.transform = `translateX(${translateX}%)`;

        // Update active dot
        const dots = document.querySelectorAll('.is-testimonial-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners for dots
    function setupDotListeners() {
        const dots = document.querySelectorAll('.is-testimonial-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    }

    // Initial setup
    setupDotListeners();

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

    // Handle window resize to adjust cards per view
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            generateDots(); // Regenerate dots based on new cards per view
            setupDotListeners(); // Reattach event listeners
            showSlide(currentIndex); // Recalculate slide position on resize
        }
    });
});