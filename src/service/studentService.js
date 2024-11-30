const studentList = [
    {
        id: 1,
        name: 'Nguyễn Xuân Thịnh',
        phone: '0123456789',
        email: 'thinhnguyen@gmail.com'
    },
    {
        id: 2,
        name: 'Trần Mộng Các',
        phone: '0121569871',
        email: 'heoquay@gmail.com'
    },
    {
        id: 3,
        name: 'Đỗ Viết Tuấn',
        phone: '01265844447',
        email: 'HoaMocLan@gmail.com'
    }
];

export function getAllStudent() {
    return studentList;
}

export function addNewStudent(student) {
    studentList.push(student);
}

export function deleteStudentById(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === id) {
            studentList.splice(i, 1); // Xóa học sinh theo id
            break;
        }
    }
}

// Sửa học sinh theo id và cập nhật thông tin mới
export function editStudentById(id, updatedStudent) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === id) {
            studentList[i] = { ...studentList[i], ...updatedStudent }; // Cập nhật thông tin học sinh
            break;
        }
    }
}

export function searchByName(name) {
    return studentList.filter(student => student.name.includes(name));
}
