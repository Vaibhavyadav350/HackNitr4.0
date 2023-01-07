import React, { useState } from "react";
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function AddTemples(){
    const [title,setTitle]= React.useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(title !==""){
            await addDoc(collection(db,"temples"),{
                title,
                completed: false,
            });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <input
              type="text"
              placeholder="Enter Temples..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="btn_container">
            <button>Add</button>
          </div>
        </form>
      );
    }