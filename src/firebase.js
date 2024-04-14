import { initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrAswYnnQJNlVwOo4gohLfI3migJLNUvg",
    authDomain: "chat-application-dcf81.firebaseapp.com",
    projectId: "chat-application-dcf81",
    storageBucket: "chat-application-dcf81.appspot.com",
    messagingSenderId: "891556867342",
    appId: "1:891556867342:web:c646dca87082e083ae3b5f"
};


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
