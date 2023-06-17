import React,{useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [password,setPassword]=useState("")
    function show(){
      
        console.log(email,name,number,password)
        axios.post("http://localhost:7777/ad",{email:email,username:name,usernumber:number,password:password})
        .then((res)=>{
          console.log(res)
        })
        setEmail("")
        setName("")     
        setNumber("")
        setPassword("")
    }
  return (
    <div>
      <center><h2>please enter valid data for your food</h2></center>
     <p> EMAIL     :    <input type='text' value={email}  placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/></p>
     <p>Customer Name  :   <input type='text' value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/></p>
     <p>Contact Number  :   <input type='number' value={number} placeholder='enter contact number' onChange={(e)=>setNumber(e.target.value)}/></p>
     <p>ADDRESS  :   <input type='text' value={password}  placeholder='enter your address' onChange={(e)=>setPassword(e.target.value)}/></p>
     <button onClick={show}>submit</button>
    </div>
  )
}
