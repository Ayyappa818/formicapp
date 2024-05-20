import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
function StudentForm(){
    var studentForm=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            password:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("please fill the name first it is manadatory")
            .max(7),
            password:Yup.string().matches( )
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return <div>
        <form onSubmit={studentForm.handleSubmit}>
            <input type="text" name="firstname" onChange={studentForm.handleChange}/>
            <br />
            <input type="text" name="lastname" onChange={studentForm.handleChange}/>
            <br />
            <input type="text" name="age" onChange={studentForm.handleChange}/>
            <br />
            <input type="text" name="password" onChange={studentForm.handleChange}/>
            <br />
            <button type="submit">Show data</button>
        </form>
        {JSON.stringify(studentForm.errors)}
    </div>
}
export default StudentForm