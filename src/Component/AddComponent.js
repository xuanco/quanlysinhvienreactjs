import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { addNewStudent, getAllStudent } from "../service/studentService";
import {useNavigate} from 'react-router-dom';

function AddComponent({}){
    
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    
    const navigate = useNavigate();

    const handleSave = () => {
        addNewStudent({
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
        });
        console.log(getAllStudent());
        
        navigate('/student');
    }
    return(
        <> 
            <div className="form">
            <h2>Add Student</h2>
            <form style={{width:'50%'}}>
                {/* <label>Name:</label>
                <input name={'name'} ref={nameRef}/><br></br>
                <label>Phone:</label>
                <input name={'phone'} ref={phoneRef}/><br></br>
                <label>Email:</label>
                <input name={'email'} ref={emailRef}/><br></br>
                <button className={'btn btn-sm btn-primary'} onClick={handleSave} type="button">Save</button> */}
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input name={'name'} ref={nameRef} type="text" className="form-control" id="formGroupExampleInput" placeholder="Add name"/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Phone</label>
                    <input name={'phone'} ref={phoneRef} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Add phone"/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input name={'email'} ref={emailRef} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Add email"/>
                </div>
                <button className={'btn btn-sm btn-primary'} onClick={handleSave} type="button">Save</button>
            </form>
            </div>
        </>
    )
}
export default React.memo(AddComponent);

