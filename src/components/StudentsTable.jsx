import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import EditStudentModal from './EditStudentModal';
import EditStudentForm from './EditStudentForm';
import ViewStudentModal from './ViewStudentModal'; // Import the new modal
import { assets } from '../assets/img';

const StudentsTable = ({students, setStudents}) => {
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false); // State for view modal
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'students', id));
      setStudents(students.filter(student => student.id !== id));
      toast.success('Student deleted successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditOpen(true);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setViewOpen(true);
  };

  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>Student List</h1>
        <div className="overflow-x-auto">
            <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Class</th>
                    <th className="px-6 py-3">Roll Number</th>
                    <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {students.length > 0 ? (
                    students.map((student) => (
                        <tr key={student.id} className="text-center hover:bg-gray-100 transition">
                        <td className="px-6 py-4">{student.id}</td>
                        <td className="px-6 py-4">{student.name}</td>
                        <td className="px-6 py-4">{student.class}</td>
                        <td className="px-6 py-4">{student.roll}</td>
                        <td className="px-6 py-4 flex justify-center gap-3">
                            <button onClick={() => handleView(student)} className="text-blue-500 hover:text-blue-700 transition-transform cursor-pointer transform hover:scale-110">
                            <FaEye size={18} />
                            </button>
                            <button onClick={() => handleEdit(student)} className="text-green-500 hover:text-green-700 transition-transform cursor-pointer transform hover:scale-110">
                            <FaEdit size={18} />
                            </button>
                            <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:text-red-700 transition-transform cursor-pointer transform hover:scale-110">
                            <FaTrash size={18} />
                            </button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500 italic">No students found</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        <EditStudentModal open={editOpen} onClose={() => setEditOpen(false)}>
            <div className='w-full flex flex-col gap-8 items-center'>
                <div className='flex flex-col gap-4 items-center'>
                    <img className='w-20 mt-4' src={assets.edit_icon} alt="" />
                    <h1 className='text-3xl font-bold'>Edit Student</h1>
                </div>

                <EditStudentForm open={editOpen} setOpen={setEditOpen} student={selectedStudent} />

            </div>
        </EditStudentModal>
        <ViewStudentModal open={viewOpen} onClose={() => setViewOpen(false)} student={selectedStudent} /> {/* Add the view modal */}
    </div>
  );
};

export default StudentsTable;
