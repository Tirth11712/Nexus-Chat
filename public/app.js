const ws = new WebSocket(`ws://${window.location.host}`);
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const usernameInput = document.getElementById('username');
const sendBtn = document.getElementById('sendBtn');
const timestampEl = document.getElementById('timestamp');

function updateTimestamp() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timestampEl.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTimestamp();
setInterval(updateTimestamp, 1000);

ws.onopen = () => {
  console.log('Connected to WebSocket');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  displayMessage(data.username, data.message, data.timestamp);
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

ws.onclose = () => {
  console.log('Disconnected from WebSocket');
};

function displayMessage(username, message, timestamp) {
  const messageEl = document.createElement('div');
  messageEl.className = 'message';

  const time = new Date(timestamp);
  const timeStr = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

  messageEl.innerHTML = `
    <div class="message-header">
      <span class="username">${username}</span>
      <span class="message-time">${timeStr}</span>
    </div>
    <div class="message-text">${escapeHtml(message)}</div>
  `;

  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function sendMessage() {
  const username = usernameInput.value.trim() || 'ANON';
  const message = messageInput.value.trim();

  if (message && ws.readyState === WebSocket.OPEN) {
    const data = {
      username: username,
      message: message,
      timestamp: Date.now()
    };

    ws.send(JSON.stringify(data));
    messageInput.value = '';
  }
}

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

usernameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    messageInput.focus();
  }
});
