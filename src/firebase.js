import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCYTXAd1-P17HhKta6v-0qv6_4c8Ztvrg8",
  authDomain:"invest-with-ai-users.firebaseapp.com",
  projectId:"invest-with-ai-users",
  storageBucket: "invest-with-ai-users.appspot.com",
  messagingSenderId: "943102008834",
  appId: "1:943102008834:web:6482bfdd9cb09ff575511b",
  measurementId: "G-T34Z29ZYNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;