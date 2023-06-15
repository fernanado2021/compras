import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAU4G-P6YG2SOtDXEqDAZlf2dQetEaizzc",
  authDomain: "compras-21928.firebaseapp.com",
  projectId: "compras-21928",
  storageBucket: "compras-21928.appspot.com",
  messagingSenderId: "942456576362",
  appId: "1:942456576362:web:32065199814fb80d202d13"
};
export const initFirebase = initializeApp(firebaseConfig);