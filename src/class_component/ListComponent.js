import React from "react";
import { getAllStudent } from "../service/studentService";
import AddComponent from "./AddComponent";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

class ListComponent extends React.Component{
    constructor(prop){
        super(prop);this.state = {
            studentList: [],
            isAddSuccess: false,
        }
        
    }
    // sau khi render lần đầu tiên thì hàm sẽ chạy để lấy dữ liệu
    componentDidMount() {
        this.setState((preState) => ({
            ...preState,
            studentList: [...getAllStudent()]
        }));
    }
    // sau khi thêm mới thành công thì cần kiểm tra state thay đổi => lấy dữ liệu ở dưới lên và render lại
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isAddSuccess !== this.state.isAddSuccess) {
            this.setState((preState) => ({
                ...preState,
                studentList: [...getAllStudent()]
            }))
        }
    }
   // hàm cập nhật state để component render lại
    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: !pre.isAddSuccess,
        }))
    }
    render(){
       return(
        <>
                <AddComponent handleAddSuccess={this.handleAddSuccess.bind(this)}/>
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((e, i) => (
                        <tr key={e.email}>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button className={'btn btn-sm btn-success'}>Edit
                                </button>
                            </td>
                            <td>
                                <button className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </>
        )
    }
}
export default ListComponent;