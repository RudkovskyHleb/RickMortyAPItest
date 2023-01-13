import React, { useEffect, useState} from "react";

import {findUserInfo} from "../http/userAPI";


 function UserInfo(){
     const [infos, setInfo] = useState([
         { id: "", email: "", createdAt: "", updatedAt: "" }
     ]);
     useEffect(()=>{
         fetchData()

     },[])

       async function fetchData () {
       let id = localStorage.getItem('id')

        const info = await findUserInfo(id)
 setInfo([info.user])

    }



     return(
         <div className="App container" >
             <div className="row">
                 {infos.map((entry) => (
                     <div> ID:  {entry.id}
                         <div> email:  {entry.email} </div>

                     </div>
                 ))}
             </div>
         </div>
     );



}
export  default UserInfo



