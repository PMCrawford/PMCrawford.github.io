import { phrases, goodbyePhrases } from "./botPhrases.js";
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
  const sendSound = new Audio("/sounds/aim-send.wav");
  const receiveSound = new Audio("/sounds/aim-receive.wav");
  const signonSound = new Audio("/sounds/signon.mp3");

  const aimStartBtn = document.getElementById("aim-start");
  const aimUsernameInput = document.getElementById("aim-username");
  const aimLogin = document.getElementById("aim-login");
  const aimChatArea = document.getElementById("aim-chat-area");

  const chatRef = collection(db, "aim_chat");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  let aimUser = "";
  let sessionId = "";
  let sentMessageIds = new Set();
  let unsubscribe = null;

  aimStartBtn?.addEventListener("click", async () => {
    const name = aimUsernameInput.value.trim();
    if (!name) return;

    aimUser = name;
    sessionId = crypto.randomUUID();
    aimLogin.style.display = "none";
    aimChatArea.style.display = "block";

    signonSound.play();

    const q = query(chatRef, orderBy("timestamp"));
    unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const data = change.doc.data();
          if (data.sessionId !== sessionId) return;

          const div = document.createElement("div");
          div.className = data.sender === aimUser ? "chat-you" : "chat-bot";
          div.textContent = `${data.sender}: ${data.message}`;

          chatBox.appendChild(div);
          chatBox.scrollTop = chatBox.scrollHeight;

          if (data.sender !== aimUser && !sentMessageIds.has(change.doc.id)) {
            receiveSound.play();
          }
        }
      });
    });

    setTimeout(async () => {
      const welcomeDoc = await addDoc(chatRef, {
        sender: "SmarterChild",
        message: `Hey ${aimUser}! I'm SmarterChild. What do you want to talk about?`,
        timestamp: serverTimestamp(),
        sessionId
      });
      sentMessageIds.add(welcomeDoc.id);
    }, 1500);
  });

  chatForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message || !aimUser) return;

    sendSound.play();

    const docRef = await addDoc(chatRef, {
      sender: aimUser,
      message,
      timestamp: serverTimestamp(),
      sessionId
    });
    sentMessageIds.add(docRef.id);
    chatInput.value = "";

    setTimeout(async () => {
      const botMsg = getSmartBotResponse(message);
      const botDoc = await addDoc(chatRef, {
        sender: "SmarterChild",
        message: botMsg,
        timestamp: serverTimestamp(),
        sessionId
      });
      sentMessageIds.add(botDoc.id);
    }, 800 + Math.random() * 1000);
  });

  window.addEventListener("beforeunload", () => {
    if (unsubscribe) unsubscribe();
  });

  // Guestbook
  const ENTRIES_PER_PAGE = 3;
  const guestbookRef = collection(db, "guestbook");
  const guestForm = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("guestbook-name");
  const emotionInput = document.getElementById("guestbook-emotion");
  const messageInput = document.getElementById("guestbook-entry");
  const messageDisplay = document.getElementById("guestbook-messages");
  const paginationDiv = document.getElementById("pagination");
  const prevBtn = document.getElementById("prev-page");
  const nextBtn = document.getElementById("next-page");

  let currentPage = 0;
  let totalPages = 1;
  let allPageRefs = [];

  const hasPagination = paginationDiv && prevBtn && nextBtn;

  if (paginationDiv) {
    paginationDiv.style.display = "none";
    paginationDiv.style.justifyContent = "space-between";
  }

  if (prevBtn) prevBtn.style.display = "none"; // hide Prev initially

  async function checkTotalEntries() {
    if (!hasPagination) return;

    const countQuery = query(guestbookRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(countQuery);
    const totalEntries = snapshot.size;

    totalPages = Math.max(1, Math.ceil(totalEntries / ENTRIES_PER_PAGE));
    paginationDiv.style.display = totalEntries > ENTRIES_PER_PAGE ? "flex" : "none";

    allPageRefs = [];
    let lastDocRef = null;

    for (let i = 0; i < totalPages; i++) {
      let pageQuery;
      if (i === 0) {
        pageQuery = query(guestbookRef, orderBy("timestamp", "desc"), limit(ENTRIES_PER_PAGE));
      } else {
        pageQuery = query(guestbookRef, orderBy("timestamp", "desc"), startAfter(lastDocRef), limit(ENTRIES_PER_PAGE));
      }

      const pageSnapshot = await getDocs(pageQuery);
      if (!pageSnapshot.empty) {
        allPageRefs.push(pageSnapshot.docs[0]);
        lastDocRef = pageSnapshot.docs[pageSnapshot.docs.length - 1];
      }
    }
  }

  async function loadPage(pageNum) {
    if (!hasPagination || pageNum < 0 || pageNum >= totalPages) return;

    currentPage = pageNum;

    let pageQuery;
    if (pageNum === 0) {
      pageQuery = query(guestbookRef, orderBy("timestamp", "desc"), limit(ENTRIES_PER_PAGE));
    } else {
      const startDoc = allPageRefs[pageNum];
      if (!startDoc) return;
      pageQuery = query(guestbookRef, orderBy("timestamp", "desc"), startAfter(startDoc), limit(ENTRIES_PER_PAGE));
    }

    const snapshot = await getDocs(pageQuery);
    if (!messageDisplay) return;
    messageDisplay.innerHTML = "";

    if (!snapshot.empty) {
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

    // Update pagination buttons
    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
      prevBtn.style.display = currentPage === 0 ? "none" : "inline-block";
    }
    if (nextBtn) {
      nextBtn.disabled = currentPage >= totalPages - 1;
    }
  }

  guestForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const emotion = emotionInput.value;
    const message = messageInput.value.trim();
    if (!message) return;

    try {
      await addDoc(guestbookRef, {
        name,
        emotion,
        message,
        timestamp: serverTimestamp()
      });

      nameInput.value = "";
      emotionInput.value = "";
      messageInput.value = "";

      await checkTotalEntries();
      await loadPage(0);
    } catch (error) {
      console.error("Error adding message:", error);
      alert("Failed to add your message: " + error.message);
    }
  });

  if (prevBtn) prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      loadPage(currentPage - 1);
    }
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      loadPage(currentPage + 1);
    }
  });

  checkTotalEntries().then(() => loadPage(0));
});

function getSmartBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  const greetings = ["hey", "hi", "hello", "yo", "sup"];
  const questions = ["?", "what", "why", "how", "who", "when", "where"];
  const sadWords = ["sad", "tired", "bored", "lonely"];
  const happyWords = ["happy", "excited", "yay", "awesome"];
  const loveWords = ["love", "crush", "date", "boyfriend", "girlfriend"];
  const goodbyeWords = ["bye", "goodbye", "see ya", "later", "ttyl", "cya", "farewell"];

  if (goodbyeWords.some(word => msg.includes(word))) {
    return randomChoice(goodbyePhrases);
  }
  if (greetings.some(word => msg.includes(word))) {
    return randomChoice([
      "yo yo yo!", "what’s crackin’?", "hey hey!", "sup dawg?", "how YOU doin’?"
    ]);
  }
  if (questions.some(word => msg.includes(word))) {
    return randomChoice([
      "hmm good question...", "I was just thinking about that!", "no clue, dude",
      "you tell me 😏", "maybe ask Jeeves?"
    ]);
  }
  if (sadWords.some(word => msg.includes(word))) {
    return randomChoice([
      "bummer 😢", "same here", "want me to play a sad playlist?", "*virtual hug*", "feelin' those 00s vibes"
    ]);
  }
  if (happyWords.some(word => msg.includes(word))) {
    return randomChoice([
      "awesome!", "totally rad 😄", "party time!", "let’s celebrate!", "high five!"
    ]);
  }
  if (loveWords.some(word => msg.includes(word))) {
    return randomChoice([
      "aww, cute 💖", "you crushing hard?", "omg tell me everything", "heart eyes 😍", "classic 00s romance!"
    ]);
  }

  return randomChoice(phrases);
}


function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
