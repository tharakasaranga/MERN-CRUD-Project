// src/components/LoginPage.jsx
import React from 'react';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Backend එකට user data යවන්න
      navigate('/dashboard'); // Login වූ පසු redirect කරන්න
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Backend එකට user data යවන්න
      navigate('/dashboard'); // Login වූ පසු redirect කරන්න
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Mathavam</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

export default LoginPage;