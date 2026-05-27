import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import { dataContext } from '../context/dataContext'

const AdminExpM = () => {
    const { expData, setExpData } = useContext(dataContext)

    const handleDeleteItem = async (idx, str) => {
        const isYes = confirm(`Are you sure delete the ${str}?`)
        if (isYes) {
            await fetch(`https://portfolio-xbxy.onrender.com/experience/${idx}`, {
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
        await fetch("https://portfolio-xbxy.onrender.com/experience", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        reset();
    }

    return (
        <div className="experience manager">
            <div className="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Work Experience</h2>
                    <input type="text" {...register("CompanyName", { required: { value: true, message: "All sections are required" }, minLength: { value: 4, message: "Min length is 4." }, maxLength: { value: 20, message: "Max length exceeded." } })} className="title" placeholder='Enter Company Name' />

                    <textarea {...register("CompanyDesc", { required: { value: true, message: "All sections are required" }, minLength: { value: 4, message: "Min length is 4." }, maxLength: { value: 150, message: "Max length exceeded." } })} className="description" placeholder='Enter Description'></textarea>

                    {errors.CompanyName && <div className="error">{errors.CompanyName.message}</div>}
                    {errors.CompanyDesc && <div className="error">{errors.CompanyDesc.message}</div>}
                    <input type="submit" />
                </form>
            </div>
            <div className="right">
                {expData.map((item) => {
                    return (
                        <div key={item._id} className="item">
                            <h3>{item.CompanyName}</h3>
                            <p>{item.CompanyDesc}</p>
                            <button onClick={() => {
                                handleDeleteItem(item._id, item.CompanyName)
                            }}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminExpM
