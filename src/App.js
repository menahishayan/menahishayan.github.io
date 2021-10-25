import { Controller } from 'react-scrollmagic'
import './App.css'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'
import Scene6 from './Scene6'
import Scene7 from './Scene7'
import Scene8 from './Scene8'
import Scene9 from './Scene9'
import Scene10 from './Scene10'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXGKpJaCEsgpx0Py7y16zbkHbkaVuqk2g",
  authDomain: "shayan-personal.firebaseapp.com",
  databaseURL: "https://shayan-personal.firebaseio.com",
  projectId: "shayan-personal",
  storageBucket: "shayan-personal.appspot.com",
  messagingSenderId: "55744480941",
  appId: "1:55744480941:web:e372fee3a0ba786f6ca824",
  measurementId: "G-LXYEP6DPCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene1 />
            <Scene2 />
            <Scene3 />
            <Scene4 />
            <Scene5 />
            <Scene6 />
            <Scene7 />
            <Scene8 />
            <Scene9 />
            <Scene10 />
        </Controller>
    )
}

export default App;
