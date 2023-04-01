import { collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
    updateDoc }
    from "firebase/firestore";
import { db } from "./firebaseConfig";

const collRef = collection(db, 'todos');
const taskRef = collection(db,'task')
const userRef = collection(db,'users')

//getting data from the firebase

export const getTodos = async() =>{
            const data = await getDocs(collRef);
            const arrData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            return arrData
};

//adding data to the firebase
export const addNewTodo = async(arrNew)=>{

    
    addDoc(collRef, arrNew)    
};


//updating data from firebase

export const updateTodo = async(docID, updateObj) => {

    const docRef = doc(db, 'todos', docID)
    await updateDoc(docRef, updateObj);
};


export const getTasks = async() =>{
    const data = await getDocs(taskRef);
    const arrData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    return arrData
};


export const addNewTask = async(arrNew)=>{

    
    addDoc(taskRef, arrNew)    
};


//updating data from firebase

export const updateTask = async(docID, updateObj) => {

    const docRef = doc(db, 'task', docID)
    await updateDoc(docRef, updateObj);
};

export const getUser = async() =>{
    const data = await getDocs(userRef);
    const arrData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    return arrData
};