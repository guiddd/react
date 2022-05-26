import React, {useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore';
import db from '../Firebase';

const DataFB = () => {
    const [users,setUsers] = React.useState([]);
    
    useEffect(()=>{
            getData();
    },[])

    const getData = async ()=>{
        const data = await getDocs(collection(db,'users'));
        
        const arrayData = await data.docs.map(doc=>(
            {
             id:doc.id,
             name:doc.name,
             age:doc.age
            }
             ))
        const arrayDataFull = await data.docs.map(doc=>(
            {
             id:doc.id,
             ...doc.data()
            }
             ))
        setUsers(arrayDataFull)
        console.log(users)
    }
  
    return (
    <div>
        <h3>Bienvenidos usuarios!</h3>
        <ul>
            {users.map(user=>(
                <li key={user.id}><img src={user.imageUrl}/>{}{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default DataFB