import React, {useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore';
import db from '../Firebase';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        const data = await getDocs(collection(db,'usuarios'))
        const arrayData = await data.docs.map(doc=>(
            {
             id:doc.id,
             name:doc.name,
             age:doc.age,
             date:doc.date
            }
             ))
        const arrayDataFull = await data.docs.map(doc=>(
            {
             id:doc.id,
             ...doc.data()
            }
             ))
        setUsers(arrayDataFull)
    }

  return (
    <div>
        <h2>Estos son los ususarios que ingresaste</h2>
        <h3>Subidos y leidos posteriormente desde Firebase</h3>
        <ul>
            {users.map(item=>(
                <li key={item.id}>El nombre del usuario es <b>{item.name}</b>, tiene <b>{item.age}</b> años y se encarga de <b>{item.job}</b></li>
            ))}
        </ul>
    </div>
  )
}

export default Users