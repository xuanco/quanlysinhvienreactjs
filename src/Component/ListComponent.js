import React, { useCallback, useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../service/studentService";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


import DeleteComponent from "./DeleteComponent";
import DetailComponent from "./DetailComponent";
import EditComponent from "./EditComponent"
import {Link} from 'react-router-dom'


const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isShowModal,setIsShowModal] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [deleteStudent,setDeleteStudent] = useState({});
    const [detailStudent, setDetailStudent] = useState({});
    const [editStudent, setEditStudent] = useState({});
    const searchNameRef = useRef();

    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getAllStudent()
            ]
        ))
    }, []);
    const handleShowModal = (students)=>{
        setDeleteStudent(()=>({
            ...students 
        }));
        setIsShowModal(prevState=> !prevState);
    }
    
    const handleSearch = ()=>{
        const searchName = searchNameRef.current.value;
        const listSearch = searchByName(searchName)
        setStudentList (()=>[
            ...listSearch
        ])
    }
    const handleCloseModal= useCallback(()=>{
       setIsShowModal (prevState=> !prevState);
    },[]);
    const handleDetail = (students)=>{
        setDetailStudent(()=>({
            ...students 
        }));
        setIsShowDetail(prevState=> !prevState);
    }
    const handleCloseDetail= useCallback(()=>{
        setIsShowDetail(prevState=> !prevState);
     },[]);
    const handleEdit = (students)=>{
        setEditStudent(()=>({
            ...students 
        }));
        setIsShowEdit(prevState=> !prevState);
    }
    const handleCloseEdit= useCallback(()=>{
        setIsShowEdit(prevState=> !prevState);
     },[]);
    return(
        <>
                {/* <AddComponent handleIsLoading = {handleIsLoading}/> */}
                <h2>Student List</h2>
                <button className={'btn btn-sm btn-success'}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={'/student/create'}>Add new Product</Link>
                </button>
                <form>
                    <br></br>
                    <input placeholder="Search" ref={searchNameRef}/>
                    <button className={'btn btn-sm btn-success'} type="button" onClick={handleSearch}>Search</button>
                </form>
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList&&studentList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button onClick={()=>{
                                    handleEdit(e)
                                }} className={'btn btn-sm btn-success'}>Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>{handleShowModal(e)}} className={'btn btn-sm btn-danger'}>Delete
                                </button> 
                            </td>
                            <td>
                                <button onClick={()=>{
                                    handleDetail(e)
                                }} className={'btn btn-sm btn-success'}>Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleShowModal={handleShowModal} isShowModal={isShowModal} deleteStudent={deleteStudent} handleCloseModal={handleCloseModal}/>
                <DetailComponent isShowDetail={isShowDetail} detailStudent={detailStudent} handleCloseDetail={handleCloseDetail}/>
                <EditComponent isShowEdit={isShowEdit} editStudent={editStudent} handleCloseEdit={handleCloseEdit} />
            </>
    )
}
export default ListComponent;

