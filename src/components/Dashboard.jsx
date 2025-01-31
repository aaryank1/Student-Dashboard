import React, { useEffect, useState } from 'react'
import { assets } from '../assets/img'
import { db } from '../config/firebase'
import { addDoc, getDocs, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import AddStudentModal from './AddStudentModal'
import AddStudentForm from './AddStudentForm'
import StudentsTable from './StudentsTable'

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await getDocs(collection(db, 'students'))
        setStudents(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
      catch (error) {
        console.error(error)
        toast.error(error.message)
      }
    }

    getStudents();
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'students', id));
      setStudents(students.filter(student => student.id !== id));
      toast.success('Student deleted successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex flex-col items-start justify-start p-6 h-screen w-full sm:w-4/5'>
      <button
        onClick={() => setOpen(true)}
        className='flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl text-white font-bold border px-4 py-2 rounded-lg bg-green-500 hover:bg-green-800 cursor-pointer'
      >
        <img src={assets.add_icon} alt="add_icon" className='pt-0.5' />
        Add Student
      </button>
      <AddStudentModal open={open} onClose={() => setOpen(false)}>
        <div className='w-full flex flex-col gap-8 items-center'>
          <div className='flex flex-col gap-4 items-center'>
            <img className='w-20 mt-4' src={assets.student_icon} alt="" />
            <h1 className='text-3xl font-bold'>Add Student</h1>
          </div>

          <AddStudentForm open={open} setOpen={setOpen} />

        </div>
      </AddStudentModal>

      <StudentsTable students={students} setStudents={setStudents} />
    </div>
  )
}

export default Dashboard