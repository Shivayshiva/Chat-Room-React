import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBAvYpabUk07_d6PVchJbwKBaoPtRRehQI",
  authDomain: "chat-app-react-f8320.firebaseapp.com",
  databaseURL: "https://chat-app-react-f8320-default-rtdb.firebaseio.com",
  projectId: "chat-app-react-f8320",
  storageBucket: "chat-app-react-f8320.appspot.com",
  messagingSenderId: "77337740828",
  appId: "1:77337740828:web:58b6a37d5a6507248701d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

