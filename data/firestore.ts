import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

interface DataModel {
    id: string,
    title: string,
    is_done: boolean,
    created_at: string
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

let app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)

export async function fetchTodos() {
    try{
        const querySnapshot = await getDocs(collection(db, "todos"));

        if(querySnapshot.empty) return []
        const fetchedTodos:Array<DataModel> = []

        querySnapshot.forEach((doc) => {
            const aTodo = {
                id: doc.id,
                title: doc.data()["title"],
                is_done: doc.data()["is_done"],
                created_at: doc.data()["created_at"].toDate().toLocaleTimeString('ko'),
            }

            fetchedTodos.push(aTodo)
        })
        return fetchedTodos

    }catch (err){
        console.error('Error fetching todos:', err);
        throw err
    }
}
