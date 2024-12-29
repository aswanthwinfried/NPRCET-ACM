const menu = document.querySelector('.menu');
const navList = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    navList.classList.toggle('show');
});



document.querySelector('.scroll-to-contact').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.contact-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});




function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || !chatbot.style.display) {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
}