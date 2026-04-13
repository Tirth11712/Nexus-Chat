# NEXUS//CHAT - WebSocket Real-Time Chat Application

A real-time chat application with a retro-futuristic cyberpunk aesthetic. Built with Node.js and WebSocket technology for instant message broadcasting across connected clients.

## Overview

NEXUS//CHAT is a lightweight, browser-based chat application that leverages WebSocket technology for real-time bidirectional communication. Users can instantly send and receive messages with a sleek retro-futuristic UI featuring neon effects, glitch animations, and terminal-inspired design.

---

## Features

✨ **Real-Time Communication**
- Instant WebSocket message delivery
- Live message broadcasting to all connected users
- Connection status indicator

🎨 **Retro-Futuristic UI**
- Cyberpunk-inspired design with neon effects
- Terminal-inspired interface with scanline effects
- Glitch animations on logo and buttons
- Custom fonts (Orbitron, Share Tech Mono)

🎯 **User Features**
- Custom callsign/username support (max 12 characters)
- Live timestamp display (updates every second)
- Message history display with username and time
- Keyboard shortcuts (Enter to send message)

📱 **Responsive Design**
- Works on desktop and mobile browsers
- Mobile-optimized input handling

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Step 1: Install Dependencies
```bash
npm install
```

This installs required packages:
- `express` - Web server framework
- `ws` - WebSocket library

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
```

### Step 3: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

---

## Usage Guide

### Sending Messages

1. **Enter a Callsign** (optional)
   - Type your username in the "ENTER_CALLSIGN" field
   - If left blank, defaults to "ANON"
   - Press Enter to move to message input

2. **Type Your Message**
   - Enter your message in the "TRANSMIT_MESSAGE..." field
   - Press Enter or click the SEND button

3. **View Messages**
   - Messages appear instantly with:
     - Your callsign
     - Message content
     - Timestamp (HH:MM format)

### Keyboard Shortcuts
- **Enter (in message field)** → Send message
- **Enter (in callsign field)** → Move to message input

---

## Project Structure

```
web-socket/
├── package.json          # Project dependencies and scripts
├── server.js             # Backend WebSocket server (Express + ws)
├── README.md             # Project documentation
└── public/               # Frontend files served to browser
    ├── index.html        # Main HTML interface
    ├── app.js            # Client-side WebSocket logic
    └── style.css         # Styling and animations
```

---

## How It Works

### Server-Side Architecture (server.js)

1. **Express Server** - Serves static HTML/CSS/JS files on port 3000
2. **WebSocket Server** - Maintains connections with all clients
3. **Message Broadcasting** - Receives message from one client, broadcasts to all connected clients

```
Client A → Server → All Clients (A, B, C)
```

### Client-Side Architecture (public/app.js)

1. **WebSocket Connection** - Establishes connection to server
2. **Send Logic** - When user sends message, packages it as JSON with username and timestamp
3. **Receive Logic** - Listens for incoming messages and displays them
4. **UI Updates** - Dynamically creates message elements in the DOM

### Message Format

Messages are transmitted as JSON:
```json
{
  "username": "CALLSIGN",
  "message": "Hello NEXUS",
  "timestamp": 1681234567890
}
```

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js + Express.js |
| **WebSocket** | ws (WebSocket library) |
| **Frontend** | Vanilla JavaScript (ES6+) |
| **Styling** | CSS3 (animations, effects) |
| **Fonts** | Orbitron, Share Tech Mono (Google Fonts) |

---

## Key Functions in app.js

| Function | Purpose |
|----------|---------|
| `updateTimestamp()` | Updates live clock every second |
| `sendMessage()` | Packages and sends message via WebSocket |
| `displayMessage()` | Renders received messages to page |
| `escapeHtml()` | Prevents XSS attacks by sanitizing text |

---

## WebSocket Events

| Event | Triggered When |
|-------|----------------|
| `ws.onopen` | Successfully connected to server |
| `ws.onmessage` | Message received from another client |
| `ws.onerror` | Connection error occurs |
| `ws.onclose` | Connection closes or disconnect |

---

## Troubleshooting

### Issue: Connection fails or "Cannot GET /"
**Solution:** Make sure server is running with `npm start` and you're on `http://localhost:3000`

### Issue: Messages not sending
**Solution:** 
- Check browser console for errors (F12 → Console)
- Verify WebSocket connection status
- Check if `ws.readyState === WebSocket.OPEN`

### Issue: Port 3000 already in use
**Solution:** Change the PORT in `server.js` to an available port (e.g., 3001, 3002)

### Issue: Module not found errors
**Solution:** Run `npm install` to ensure all dependencies are installed

---

## Future Improvements

- 🔐 Add user authentication
- 💾 Persist chat history to database
- 👥 Add private messaging
- 🚀 Add room/channel support
- 📱 Add emoji support
- 🎤 Add voice/video chat
- ⚡ Add typing indicators
- 🌐 Add multi-language support

---

## Running the Project

```bash
# Clone or download the project
cd web-socket

# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

---

## Notes

- This is a simple chat application. For production use, add authentication, validation, and security measures.
- Messages are not persisted - they are only held in memory during the session.
- All connected clients receive all messages (broadcast model).

---

## License

This project is open source and available for educational purposes.
