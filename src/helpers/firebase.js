import { initializeApp } from "firebase/app";
import firebase from "./firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCrediantial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(auth.currentUser, {
      displayName: email,
    });
    navigate("/");
    console.log(userCrediantial);
  } catch (error) {
    console.log(error.message);
  }
};
export const signIn = async (email, password, navigate) => {
  try {
    let userCrediantial = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCrediantial, "UserCrediantials");
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const logOut = (navigate) => {
  signOut(auth);
  toast.success("logged out");
  navigate("/login");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addBlog = (blog) => {
  const db = getDatabase();
  const blogRef = ref(db, "blog");
  const newBlogRef = push(blogRef);
  set(newBlogRef, {
    title: blog.title,
    image: blog.image,
    content: blog.content,
  });
};

export const callData = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogsDash, setBlogsDash] = useState();
  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const blogRef = ref(db, "blog");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const dataList = [];

      // i can also use shallow copy as using spread
      for (let id in data) {
        dataList.push({ id, ...data[id] });
      }
      setBlogsDash(dataList);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogsDash };
};

export const deleteBlog = (id) => {
  const db = getDatabase();
  const blogRef = ref(db, "blog");

  remove(ref(db, "blog/" + id));
};

export const editBlog = (blog) => {
  const db = getDatabase();
  const updates = {};
  updates["blog/" + blog.id] = blog;
  return update(ref(db), updates);
};
