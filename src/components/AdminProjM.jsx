import React, {useContext, useState} from 'react'
import { useForm } from "react-hook-form"
import { dataContext } from '../context/dataContext'

const AdminProjM = () => {
    const {projData, setProjData} = useContext(dataContext)

    const handleDeleteItem = async (idx, str) =>{
        const isYes = confirm(`Are you sure delete the ${str}?`);
        if(isYes){
            await fetch(`https://portfolio-xbxy.onrender.com/project/${idx}`, {
                method: "DELETE"
            })
        }
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const frmdta = new FormData()
        frmdta.append("ProjectName", data.ProjectName)
        frmdta.append("ProjectDesc", data.ProjectDesc)
        frmdta.append("ProjectImg", data.ProjectImg[0])

        await fetch("https://portfolio-xbxy.onrender.com/project", {
            method: "POST",
            body: frmdta
        })
        reset();
    }

    return (
        <div className="projects manager">
            <div className="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Projects</h2>
                    <input type="text" {...register("ProjectName", {required: {value: true, message: "All sections are required"}, minLength: { value: 4, message: "Min length is 4." }, maxLength: { value: 20, message: "Max length exceeded." } })} className="title" placeholder='Enter Project Name' />

                    <textarea {...register("ProjectDesc", {required: {value: true, message: "All sections are required"}, minLength: { value: 4, message: "Min length is 4." }, maxLength: { value: 80, message: "Max length exceeded." } })} className="description" placeholder='Project Description'></textarea>

                    <input type="file" {...register("ProjectImg", {required: {value: true, message: "All sections are required"}})} accept='.jpg, .jpeg, .png' />

                    {errors.ProjectName && <div className="error">{errors.ProjectName.message}</div>}
                    {errors.ProjectDesc && <div className="error">{errors.ProjectDesc.message}</div>}
                    {errors.ProjectImg && <div className="error">{errors.ProjectImg.message}</div>}
                    <input type="submit" />
                </form>
            </div>
            <div className="right">
                {projData.map((item) => {
                    return (
                        <div key={item._id} className="item">
                            <h3>{item.ProjectName}</h3>
                            <p>{item.ProjectDesc}</p>
                            <button onClick={() => {
                                handleDeleteItem(item._id, item.ProjectName)
                            }}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminProjM
