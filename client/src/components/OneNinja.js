import React, {useEffect} from 'react';
import {useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneNinja = () =>{
    const { idParam } = useParams();
    const [ninjaInfo, setNinjaInfo] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${idParam}`)
        .then(res=>{
            console.log(res)
            setNinjaInfo(res.data.results)
        })
        .catch(err=>{
            console.log("Error:", err)
        })
    },[idParam])

    const deleteClickHandler = ()=>{
        console.log("Attempting to delete: ", ninjaInfo._id)
        axios.delete(`http://localhost:8000/api/ninjas/${ninjaInfo._id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(res=>{
                console.log("Error: ", res)
            })
    }

    return(
        <div>
            <h1>Message about ninja with id of { idParam }</h1>
            <p>Name: {ninjaInfo.name}</p>
            <p>Number of Projects: {ninjaInfo.numProjects}</p>
            <p>Grad Date: {ninjaInfo.graduationData}</p>
            <p><button onClick={deleteClickHandler} className="btn btn-danger">Delete Ninja</button></p>
        </div>
    )
}

export default OneNinja;