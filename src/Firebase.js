import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWnCfSO6SxOTQpICOesvdHScWB4zH_DTo",
  authDomain: "invoices-99154.firebaseapp.com",
  projectId: "invoices-99154",
  storageBucket: "invoices-99154.firebasestorage.app",
  messagingSenderId: "124216835716",
  appId: "1:124216835716:web:aa80ba2f517b9c826accd1",
  measurementId: "G-GKWJBF1ZLB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();