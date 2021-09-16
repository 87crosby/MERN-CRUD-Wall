import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const NewNinjaForm = () => {

    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        name: null,
        numProjects: null,
        graduationDate: null,
        isVeteran: false,
        profilePicUrl: null
    })

    let [validationErrors, setValidationErrors] = useState({});


    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
        if(e.target.type == "checkbox"){ //update state a little differently if the event target is the checkbox
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        } else{//for all the other input types, update state as we normally do
            setFormInfo({ 
                ...formInfo,
                [e.target.name]:e.target.value
            })

        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){
                    // If there are validation errors, show the errors
                    setValidationErrors(res.data.err.errors);

                } else {
                    // If there are no error in the submission then add info to wall
                    history.push("/");
                }
            })
            .catch(err=>console.log("errrrrr-->", err))
    }

    return (
        <div>
            <h3>Create a new ninja below</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message:""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange = {changeHandler} type="number" name="numProjects" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message:""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange = {changeHandler} type="date" name="graduationDate" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message:""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input onChange = {changeHandler} type="text" name="profilePicUrl" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.profilePicUrl?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Veteran?</label>
                    <input onChange = {changeHandler} type="checkbox" name="isVeteran" id="" />
                </div>
                {/* Veteran checkbox */}
                <input className= "btn btn-primary"type="submit" value="Create Ninja!" />

            </form>
        </div>
    );
};


export default NewNinjaForm;