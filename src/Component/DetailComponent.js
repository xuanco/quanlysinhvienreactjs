import React from "react";

function DetailComponent({isShowDetail, detailStudent, handleCloseDetail}){
    return(
        isShowDetail &&
        (<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Student</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">ID: {detailStudent.id}</label>
    
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Name: {detailStudent.name}</label>
                            {/* <input placeholder={detailStudent.name} type="text" class="form-control" id="recipient-name"/> */}
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Phone: {detailStudent.phone}</label>
                            
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Email: {detailStudent.email}</label>
                            
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={handleCloseDetail} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
                </div>
            </div>
        </div>)
    )
}
export default DetailComponent;