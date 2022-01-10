import * as React from 'react';
import { auth } from '../../firebaseSetup';


const TestsPage=()=>{

      const getUser=()=>{
        console.log(auth.currentUser);
    }

    return(
        <div>
            <h1>This is Tests Page</h1>
            <button type="button" onClick={()=>getUser()}>Get user</button>
        </div>
    )
}

export default TestsPage;