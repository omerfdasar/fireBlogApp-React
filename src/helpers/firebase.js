import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWCtl_8K8uF70Lz_8LTqFJgYAQAaD5Zus",
  authDomain: "fire-blog-project.firebaseapp.com",
  databaseURL: "https://fire-blog-project-default-rtdb.firebaseio.com",
  projectId: "fire-blog-project",
  storageBucket: "fire-blog-project.appspot.com",
  messagingSenderId: "849184706930",
  appId: "1:849184706930:web:38faf3427d348d9b434deb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
