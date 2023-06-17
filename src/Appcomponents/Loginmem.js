import React, { Component } from 'react'
import axios from 'axios'
export default class Loginmem extends Component {
  state={
    mem:[]
  }
  componentDidMount(){
      axios.get("http://localhost:7777/retrieve")
        .then((res)=>{
           console.log(res.data)
           this.setState({
             mem:res.data
           })
        })
  }
  render() {
    return (
      <div>
        {
          this.state.mem.map((pk)=>(
            <div key={pk._id}>
                <p><b>user email</b>:{pk.email}</p>
                <p><b>user name</b>:{pk.username}</p>
                <p><b>user contact number</b>:{pk.usernumber}</p>
                <p><b>user address</b>:{pk.password}</p>
                <hr></hr>

            </div>

          ))
        }
      </div>
    )
  }
}




