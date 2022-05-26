import React, {useState} from 'react'
import {collection, getDocs, addDoc} from 'firebase/firestore';
import db from '../Firebase';
import { async } from '@firebase/util';

const Form = () => {
    const defaultData = {
        name:``,
        age:``,
        job:``
    }
    const [user,setUser] = useState(defaultData)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(user)

        try {
            const usuario = {
                name:user.name,
                age:user.age,
                job:user.job,
                date:Date.now()
            }
            const data = await addDoc(collection(db,"usuarios"),usuario)
            console.log("Datos subidos")
            setUser(defaultData)
            window.location.reload()
        }
        catch{
            console.log("Escritura de datos fallida")
        }
    }
  
    return (
    <div>
        <h2>Ingrese su usuario</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Nombre'
            name='name'
            className='form-control'
            onChange={(e)=>
                setUser({...user,
            name:e.target.value})}
            value={user.name}/>

            <input type="number"
            placeholder='Edad'
            name='age'
            className='form-control'
            onChange={(e)=>
                setUser({...user,
                age:e.target.value})}
            value={user.age}/>

            <input type="text"
            placeholder='Ocupación'
            name='job'
            className='form-control'
            onChange={(e)=>
                setUser({...user,
                job:e.target.value})}
            value={user.job}/>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form