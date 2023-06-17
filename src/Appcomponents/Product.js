import React, { Component } from 'react'
import axios from 'axios'
export default class Product extends Component {
  state={
    items:[]
  }
  componentDidMount(){
      axios.get("http://localhost:7777/retrieve")
        .then((res)=>{
           console.log(res.data)
           this.setState({
             items:res.data
           })
        })
  }
  render() {
    return (
      <div>
        {
          this.state.items.map((pr)=>(
            <div key={pr._id}>
                <p><b>item id</b>:{pr.id}</p>
                <p><b>customer name</b>:{pr.name}</p>
                <p><b>customer contact number</b>:{pr.number}</p>
                <p><b>customer address</b>:{pr.add}</p>
                <hr></hr>

            </div>

          ))
        }
      </div>
    )
  }
}




