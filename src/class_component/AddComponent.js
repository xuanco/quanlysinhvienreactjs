import React from "react";
import { addNewStudent, getAllStudent} from "../service/studentService";


class AddComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            student :{
                name: "",
                phone:"",
                email:""
            }
        }
        this.handleSave= this.handleSave.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleSave(){
        // goi api thêm mới
        addNewStudent(this.state.student);
        this.props.handleAddSuccess();
        this.setState({
            student: {
                name: "",
                phone: "",
                email: ""
            }
        });

    }
    handleOnChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState((preState)=>({
            ...preState,
            student:{
                ...preState.student,
                [event.target.name]: event.target.value,
            }

        }))

    }

    render() {
        return (
            <> {console.log("=============add render============")
}
                <h2>Add Student</h2>
                <form>
                    Name:
                    <input name={'name'} value={this.state.student.name} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    Phone:
                    <input name={'phone'} value={this.state.student.phone} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    Email:
                    <input name={'email'} value={this.state.student.email} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    <button className={'btn btn-sm btn-primary'} onClick={this.handleSave} type="button">Save</button>
                </form>
            </>

        );
    }
}
export default AddComponent ;