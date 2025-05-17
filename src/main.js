import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

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
const chatRef = collection(db, "aim_chat");

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const box = document.getElementById("chat-box");

const BOT_RESPONSES = [
  "lol",
  "brb",
  "asl?",
  "that's deep",
  "haha yeah",
  "same here",
  "tell me more...",
  "u up?",
  "good one 😂",
  "*away message*",
  "I was just thinking that",
  "no way!"
];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  await addDoc(chatRef, {
    sender: "you",
    message,
    timestamp: serverTimestamp()
  });

  input.value = "";

  // Simulate bot reply
  const delay = 800 + Math.random() * 1200;
  setTimeout(async () => {
    const botMsg = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
    await addDoc(chatRef, {
      sender: "bot",
      message: botMsg,
      timestamp: serverTimestamp()
    });
  }, delay);
});

const q = query(chatRef, orderBy("timestamp"));
onSnapshot(q, (snapshot) => {
  box.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.className = data.sender === "you" ? "chat-you" : "chat-bot";
    div.textContent = `${data.sender}: ${data.message}`;
    box.appendChild(div);
  });
  box.scrollTop = box.scrollHeight;
});
