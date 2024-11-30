
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { deleteStudentById } from "../service/studentService";
function DeleteComponent ({isShowModal, deleteStudent, handleCloseModal,handleIsLoading}) {
    const handleDelete = ()=>{
        deleteStudentById(deleteStudent.id);
        handleIsLoading();
        handleCloseModal();
    }
        return (
        isShowModal &&
        (<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete student</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body"> 
                        <p>Bạn có muốn xoá {deleteStudent.name}.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                        <button onClick={handleDelete} type="button" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>)
        )

    }


export default React.memo(DeleteComponent) ; 