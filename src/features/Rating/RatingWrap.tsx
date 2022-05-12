import * as React from 'react';
import Rating from './Rating';
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from '../../firebaseSetup';
import { IUser } from '../../interfaces';


const RatingWrap = () => {
    const [usersArr, setUsersArr] = React.useState<IUser[]>([]);

    React.useEffect(()=>{
        getDocs(collection(firebaseDB, "users"))
        .then(responce=>{
                const users: any = responce.docs.map(doc=>doc.data());
            setUsersArr(users.sort((a: IUser,b: IUser)=>{
                return b.points - a.points;
            }))     
               
        })
    }, [])

    

    return (
        <>
   <Rating rating={usersArr}/>
     
      </>
    )
       

}

export default RatingWrap;