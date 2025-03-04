import React from 'react'
import student from "./assets/student.jpg"
import teacher from "./assets/teacher.jpg"

export default function Auth() {
    return (
        <div className='w-full h-screen relative'>
            <img src={student} className='w-full h-full object-cover' alt="" />
            <div className=" absolute w-full h-full top-0 left-0" style={{ background: "linear-gradient(41deg, rgba(2,0,36,1) 0%, rgba(10,135,167,1) 35%, rgba(0,212,255,0) 100%)" }} ></div>
        </div>
    )
}
