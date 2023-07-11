import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLqb_Xr8dpi1FH8daCstkh1yGGb6cxMIM",
  authDomain: "challenge03-f04c2.firebaseapp.com",
  projectId: "challenge03-f04c2",
  storageBucket: "challenge03-f04c2.appspot.com",
  messagingSenderId: "1016185202426",
  appId: "1:1016185202426:web:c36a87a2cdcf99eb130b43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig, auth };


