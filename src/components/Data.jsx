import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Data = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }
    return (
    <div>
        <ul>
            {users.map(item=>(
                <li key={item.id}>
                    Gracias <b>{item.name}</b>!
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Data

/*
useEffect(()=>{
        getData();
    },[]);

    const getData = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users= await data.json()
        console.log(users)
    }

ESTO DE ACÁ FUNKA COMO LO HACE BLUUWEB
*/