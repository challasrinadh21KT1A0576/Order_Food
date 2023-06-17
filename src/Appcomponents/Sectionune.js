import { useState,useEffect } from 'react'
import React from 'react'

export default function Sectionune() {
   const initialValues={username:"", email:"", password:""};
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState();
   const [isSubmit,setIsSubmit]=useState(false);

   const handleChange=(e)=>{
     console.log(e.target)
     const {name,value}=e.target;
     setFormValues({...formValues,[name]:value });
     console.log(formValues);
   };

    const handleSubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length===0 && isSubmit){
        console.log(formValues);
      }
    },[formErrors])

const validate=(values)=>{
    const errors ={}
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username){
        errors.usernamme="username is requriedd"
    }
    if (!values.email){
      errors.email="email is requriedd"
    } else if(regex.text(values.email)){
      errors.email="this is a not valid email format"
    }
  if (!values.password){
    errors.password="password is requriedd"
  } else if(regex.text(values.password > 10)){
    errors.password="password cannot exceedd more than 10 charecters";
  }
  return errors;
}

  return (
    <div>
      {Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui message success">sign is succesfully</div> ):(
      <pre>{JSON.stringify(formValues,undefined,2)}</pre>)}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <lable>Email</lable>
            <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange}/>

          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <lable>Email</lable>
            <input type="email" name="email" placeholder="email" value={formValues.email} onChange={handleChange}/>

          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <lable1>Password</lable1>
            <input type="password" name="password" placeholder="password" value={formValues.password} onChange={handleChange}/>

          </div>
          <button className="fluid ui button blue">submit</button>
        </div>
        <p>{formErrors.password}</p>
      </form>
      
    </div>
  )
}
