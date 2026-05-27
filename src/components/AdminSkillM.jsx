import React, {useContext, useState} from 'react'
import { useForm } from "react-hook-form"
import { dataContext } from '../context/dataContext'

const AdminSkillM = () => {
    const {skillData, setSkillData} = useContext(dataContext)
    const { refetchData } = useContext(dataContext)

    const handleDeleteItem = async (idx, str) =>{
        const isYes = confirm(`Are you sure delete the ${str}?`);
        if(isYes){
            await fetch(`https://portfolio-xbxy.onrender.com/skill/${idx}`, {
                method: "DELETE"
            })
            await refetchData()
        }
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        await fetch("https://portfolio-xbxy.onrender.com/skill", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        await refetchData()
        reset();
    }

    return (
        <div className="skills manager">
            <div className="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Skills</h2>
                    <input type="text" {...register("SkillName", {required: {value: true, message: "This section is required"}, minLength: { value: 2, message: "Min length is 2." }, maxLength: { value: 10, message: "Max length exceeded." } })} className="title" placeholder='Enter Skill Name' />

                    {errors.SkillName && <div className="error">{errors.SkillName.message}</div>}
                    <input type="submit" />
                </form>
            </div>
            <div className="right">
                {skillData.map((item) => {
                    return (
                        <div key={item._id} className="item">
                            <h3>{item.SkillName}</h3>
                            <button onClick={() => {
                                handleDeleteItem(item._id, item.SkillName)
                            }}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminSkillM
