import React,{useState} from 'react'
import axios from 'axios'

export default function Update() {
    const [code,setCode]=useState("")
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [add,setAdd]=useState("")
    function display(){
      
        console.log(code,name,number,add)
        axios.post("http://localhost:7777/add",{id:code,name:name,number:number,add:add})
        .then((res)=>{
          console.log(res)
        })
        setCode("")
        setName("")     
        setNumber("")
        setAdd("")
    }
  return (
    <div >
      <center><h2>please enter valid data for your food</h2></center>
     <p>ITEM CODE      :    <input type='text' value={code}  placeholder='enter item code' onChange={(e)=>setCode(e.target.value)}/></p>
     <p>Customer Name  :   <input type='text' value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/></p>
     <p>Contact Number  :   <input type='number' value={number} placeholder='enter contact number' onChange={(e)=>setNumber(e.target.value)}/></p>
     <p>ADDRESS  :   <input type='text' value={add}  placeholder='enter your address' onChange={(e)=>setAdd(e.target.value)}/></p>
     <button onClick={display}>submit</button>
    </div>
  )
}
