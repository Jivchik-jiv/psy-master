import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseSetup";

type registerProps={
    email: string,
    password: string,
    avatarUrl: string,
    name: string
}

// export const registerUser=({email, password, name, avatarUrl}: registerProps)=>{
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(()=>{
//         debugger;
//         updateProfile(auth.currentUser!, {
//             displayName: name,
//             photoURL: avatarUrl,
//         }).then(()=>{debugger;})
//     })
//     .catch(error=>console.log(error));
// }