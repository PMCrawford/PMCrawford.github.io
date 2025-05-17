import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  limit,
  startAfter
} from "firebase/firestore";

// Firebase config from .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messagesRef = collection(db, "guestbook");

// UI elements
const form = document.getElementById("guestbook-form");
const nameInput = document.getElementById("guestbook-name");
const emotionInput = document.getElementById("guestbook-emotion");
const entryInput = document.getElementById("guestbook-entry");
const display = document.getElementById("guestbook-messages");

const prevBtn = document.getElementById("prev-page");
const nextBtn = document.getElementById("next-page");

let currentStart = null;
let currentEnd = null;
let pageStack = [];

async function loadMessages(direction = 0) {
  let q = query(messagesRef, orderBy("timestamp", "desc"), limit(5));
  if (direction === 1 && currentEnd) {
    q = query(messagesRef, orderBy("timestamp", "desc"), startAfter(currentEnd), limit(5));
  } else if (direction === -1 && pageStack.length >= 2) {
    pageStack.pop();
    const prevStart = pageStack[pageStack.length - 1];
    q = query(messagesRef, orderBy("timestamp", "desc"), startAfter(prevStart), limit(5));
  }

  const snapshot = await getDocs(q);
  display.innerHTML = "";

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
      display.appendChild(div);
    });
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const emotion = emotionInput.value;
  const message = entryInput.value.trim();
  if (!message) return;

  await addDoc(messagesRef, {
    name,
    emotion,
    message,
    timestamp: serverTimestamp()
  });

  nameInput.value = "";
  emotionInput.value = "";
  entryInput.value = "";

  pageStack = []; // reset pagination
  loadMessages();
});

prevBtn.addEventListener("click", () => loadMessages(-1));
nextBtn.addEventListener("click", () => loadMessages(1));

loadMessages();
