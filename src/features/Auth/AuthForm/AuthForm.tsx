import * as React from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseSetup';
// import firebase from 'firebase/auth';


type Props={
    type: "signup" | "login"
}



const AuthForm=({type}: Props)=>{
    const [email, setEmail]=React.useState("");
    const [password, setPass]=React.useState("");
    // const [user, setUser]=React.useState<firebase.User | null>(null)


    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();

        if(type==="signup"){
            createUserWithEmailAndPassword(auth, email, password)
        .then(response=>{
        })
        .catch(error=>{
            console.log("Error ",error)
        });
        }else{
            signInWithEmailAndPassword(auth, email, password)
            .then((response)=>{
            })
            .catch(error=>{
                console.log("Error ",error)
            });
        }  
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </label>
            <label>
                Password
                <input type="text" value={password} onChange={(e)=>setPass(e.target.value)} required/>
            </label>
            <button type ="submit">{type==="signup" ? "Signup" : "Login"}</button>
        </form>
    )
};


export default AuthForm;