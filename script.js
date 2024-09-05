// References to the DOM elements
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to add a new message to the chat
function addMessage(message, self = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (self) {
        messageElement.classList.add('self');
    }
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        // Simulate receiving a response
        setTimeout(() => {
            addMessage(`Echo: ${message}`);
        }, 1000);
        messageInput.value = '';
    }
});

// Allow sending message by pressing Enter key
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
