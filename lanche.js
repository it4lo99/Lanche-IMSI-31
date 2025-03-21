// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, addDoc, doc, updateDoc, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Configuração do Firebase (cole os dados do seu Firebase aqui)
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SEU_ID",
    appId: "SUA_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta para outros arquivos JS usarem
export { db, collection, addDoc, doc, updateDoc, onSnapshot, query, where };

