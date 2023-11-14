import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFkAMEQOLx_RHuT-91KTjbncB_0PXC8VA",
  authDomain: "teckets-b3e61.firebaseapp.com",
  databaseURL: "https://teckets-b3e61-default-rtdb.firebaseio.com",
  projectId: "teckets-b3e61",
  storageBucket: "teckets-b3e61.appspot.com",
  messagingSenderId: "382274279134",
  appId: "1:382274279134:web:d01e3a309275a8608c144f"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, firebaseApp };