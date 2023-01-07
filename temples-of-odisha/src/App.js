import logo from './logo.svg';
import './App.css';
import React from 'react';
import Title from './Components/Title';
import addTemples from './Components/AddTemples';
import AddTemples from './Components/AddTemples';
import Temples from './Components/Temples';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";


function App() {
  const[otemples,setemples]=React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "otemples"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let templeArray = [];
      querySnapshot.forEach((doc) => {
        templeArray.push({ ...doc.data(), id: doc.id });
      });
      setemples(templeArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (temples, title) => {
    await updateDoc(doc(db, "otemples", temples.id), { title: title });
  };
  const toggleComplete = async (temples) => {
    await updateDoc(doc(db, "otemples", temples.id), { completed: !temples.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "otemples", id));
  };

 
  return (
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddTemples/>
      </div>
      <div className="todo_container">
        {otemples.map((temples) => (
          <Temples
            key={temples.id}
            temples={temples}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
