import React from 'react';

const ViewStudentModal = ({ open, onClose, student }) => {
    if (!student) return null;

    return (
        <div 
        onClick={onClose} 
        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20": "invisible"}`}
        >
            <div 
            onClick={e => e.stopPropagation()} 
            className={`bg-white w-10/12 h-2/3 lg:w-1/2 lg:h-5/6 rounded-xl overflow-auto shadow p-4 transition-all text-black ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className={`text-3xl absolute top-4 right-4 p-1 cursor-pointer rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`}>
                    X
                </button>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>Student Details</h1>
                    <p><strong>ID:</strong> {student.id}</p>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Class:</strong> {student.class}</p>
                    <p><strong>Roll Number:</strong> {student.roll}</p>
                    <p><strong>Date of Birth:</strong> {student.dob}</p>
                    <p><strong>Gender:</strong> {student.gender}</p>
                    <p><strong>Father's Name:</strong> {student.fatherName}</p>
                    <p><strong>Mother's Name:</strong> {student.motherName}</p>
                    <p><strong>Father's Contact:</strong> {student.fatherContact}</p>
                    <p><strong>Mother's Contact:</strong> {student.motherContact}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Address:</strong> {student.address}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewStudentModal;
