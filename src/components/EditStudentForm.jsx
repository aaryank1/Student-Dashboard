import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const EditStudentForm = ({ open, setOpen, student }) => {
    const [name, setName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [section, setSection] = useState('');
    const [roll, setRoll] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherContact, setFatherContact] = useState('');
    const [motherContact, setMotherContact] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (student) {
            setName(student.name);
            setStudentClass(student.studentClass);
            setSection(student.section);
            setRoll(student.roll);
            setDob(student.dob);
            setGender(student.gender);
            setFatherName(student.fatherName);
            setMotherName(student.motherName);
            setFatherContact(student.fatherContact);
            setMotherContact(student.motherContact);
            setEmail(student.email);
            setAddress(student.address);
        }
    }, [student]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const studentDoc = doc(db, 'students', student.id);
            await updateDoc(studentDoc, {
                name,
                studentClass,
                section,
                roll,
                dob,
                gender,
                fatherName,
                motherName,
                fatherContact,
                motherContact,
                email,
                address,
            });
            toast.success('Student updated successfully!');
            setOpen(false);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleUpdate} className='flex flex-col gap-6 text-lg sm:text-xl md:text-2xl' method="post">
            {/* ...similar input fields as AddStudentForm... */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input
                onChange={(e) => {setName(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='name'
                id='name'
                required
                value={name} />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="class">Class</label>
                <input
                onChange={(e) => {setStudentClass(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='class'
                id='class'
                required
                value={studentClass} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="section">Section</label>
                <input
                onChange={(e) => {setSection(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='section'
                id='section'
                required
                value={section} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="rollNo">Roll Number</label>
                <input
                onChange={(e) => {setRoll(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="number"
                name='rollNo'
                id='rollNo'
                required
                value={roll} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="dob">Date of Birth</label>
                <input
                onChange={(e) => {setDob(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="date"
                name='dob'
                id='dob'
                required
                value={dob} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="gender">Gender</label>
                <select
                onChange={(e) => {setGender(e.target.value)}}
                className='border text-center rounded-lg'
                name="gender"
                id="gender"
                required
                value={gender}>
                <option className='text-gray-400' value="">----Select----</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="fatherName">Father Name</label>
                <input
                onChange={(e) => {setFatherName(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='fatherName'
                id='fatherName'
                required
                value={fatherName} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="motherName">Mother Name</label>
                <input
                onChange={(e) => {setMotherName(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='motherName'
                id='motherName'
                required
                value={motherName} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="fatherContact">Father Contact</label>
                <input
                onChange={(e) => {setFatherContact(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type='tel'
                name='fatherContact'
                id='fatherContact'
                required
                value={fatherContact} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="motherContact">Mother Contact</label>
                <input
                onChange={(e) => {setMotherContact(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="tel"
                name='motherContact'
                id='motherContact'
                required
                value={motherContact} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input
                onChange={(e) => {setEmail(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="email"
                name='email'
                id='email'
                required
                value={email} />
            </div>
            
            <div className='flex flex-col gap-1'>
                <label htmlFor="address">Address</label>
                <input
                onChange={(e) => {setAddress(e.target.value)}}
                className='border border-black p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                type="text"
                name='address'
                id='address'
                required
                value={address} />
            </div>
            {/* ...other input fields... */}
            <div className='flex gap-4 justify-evenly items-center mt-4'>
                <button
                onClick={() => setOpen(false)}
                className='text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-800 cursor-pointer'
                type='button'>
                Cancel
                </button>
                
                <button
                className='text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer'
                type="submit">
                Update
                </button>
            </div>
        </form>
    );
};

export default EditStudentForm;
