const chatbot = document.querySelector('.chatbot-container');
const chatbotIcon = document.querySelector('.chatbot-icon-container');

chatbotIcon.addEventListener('click', () => {
  chatbot.classList.toggle('show-hide-chatbot');
});
