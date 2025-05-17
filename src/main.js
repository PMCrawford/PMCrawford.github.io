import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  startAfter,
  onSnapshot,
  limit
} from "firebase/firestore";

// Firebase config from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  // === AIM Login ===
  const aimStartBtn = document.getElementById("aim-start");
  const aimUsernameInput = document.getElementById("aim-username");
  const aimLogin = document.getElementById("aim-login");
  const aimChatArea = document.getElementById("aim-chat-area");

  let aimUser = "";

  aimStartBtn?.addEventListener("click", () => {
    const name = aimUsernameInput.value.trim();
    if (!name) return;
    aimUser = name;
    aimLogin.style.display = "none";
    aimChatArea.style.display = "block";
  });

  // === AIM Chat ===
  const chatRef = collection(db, "aim_chat");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  const BOT_RESPONSES = [
    "lol", "brb", "asl?", "that's deep", "haha yeah", "same here",
    "tell me more...", "u up?", "good one 😂", "*away message*",
    "no way!", "I was just thinking that"
  ];

  chatForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message || !aimUser) return;

    await addDoc(chatRef, {
      sender: aimUser,
      message,
      timestamp: serverTimestamp()
    });

    chatInput.value = "";

    setTimeout(async () => {
      const botMsg = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
      await addDoc(chatRef, {
        sender: "SmarterChild",
        message: botMsg,
        timestamp: serverTimestamp()
      });
    }, 800 + Math.random() * 1000);
  });

  onSnapshot(query(chatRef, orderBy("timestamp")), (snapshot) => {
    if (!chatBox) return;
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const div = document.createElement("div");
      div.className = data.sender === aimUser ? "chat-you" : "chat-bot";
      div.textContent = `${data.sender}: ${data.message}`;
      chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  // === Guestbook ===
  const guestbookRef = collection(db, "guestbook");
  const guestForm = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("guestbook-name");
  const emotionInput = document.getElementById("guestbook-emotion");
  const messageInput = document.getElementById("guestbook-entry");
  const messageDisplay = document.getElementById("guestbook-messages");
  const prevBtn = document.getElementById("prev-page");
  const nextBtn = document.getElementById("next-page");

  let currentStart = null;
  let currentEnd = null;
  let pageStack = [];

  async function loadMessages(direction = 0) {
    let q = query(guestbookRef, orderBy("timestamp", "desc"), limit(5));
    if (direction === 1 && currentEnd) {
      q = query(guestbookRef, orderBy("timestamp", "desc"), startAfter(currentEnd), limit(5));
    } else if (direction === -1 && pageStack.length >= 2) {
      pageStack.pop();
      const prevStart = pageStack[pageStack.length - 1];
      q = query(guestbookRef, orderBy("timestamp", "desc"), startAfter(prevStart), limit(5));
    }

    const snapshot = await getDocs(q);
    if (!messageDisplay) return;
    messageDisplay.innerHTML = "";

    if (!snapshot.empty) {
      currentStart = snapshot.docs[0];
      currentEnd = snapshot.docs[snapshot.docs.length - 1];
      pageStack.push(currentStart);

      snapshot.forEach(doc => {
        const data = doc.data();
        const time = data.timestamp?.toDate().toLocaleString() || "(no time)";
        const div = document.createElement("div");
        div.innerHTML = `
          <p><strong>${data.name || "Anonymous"}</strong> (${data.emotion || "feeling...?"}) at ${time}:</p>
          <p>${data.message}</p>
          <hr>
        `;
        messageDisplay.appendChild(div);
      });
    }
  }

  guestForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const emotion = emotionInput.value;
    const message = messageInput.value.trim();
    if (!message) return;

    await addDoc(guestbookRef, {
      name,
      emotion,
      message,
      timestamp: serverTimestamp()
    });

    nameInput.value = "";
    emotionInput.value = "";
    messageInput.value = "";
    pageStack = [];

    loadMessages();
  });

  prevBtn?.addEventListener("click", () => loadMessages(-1));
  nextBtn?.addEventListener("click", () => loadMessages(1));

  loadMessages();
});
