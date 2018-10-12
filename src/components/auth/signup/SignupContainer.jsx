import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import SignupDisplay from './SignupDisplay'



class SignupContainer extends Component{

  state = {
    signup:{username:"scuba"},
    loading:false
}

onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const {signup} = this.state
    signup[field] = value
    this.setState({signup})
}

createUser = (e) => {
    e.preventDefault()
    const {signup} = this.state
    if(signup.password !== signup.password2) {
        return toastr.error('Las contraseñas no coinciden!')
    }
    axios.post('http://localhost:3000/signup', signup)
    .then(user=>{
        console.log(user)
        toastr.success("A chambear!")
    })
    .catch(e=>toastr.error("Ya hay un chambeador con ese nombre"))
}

    render(){
        return(
            <div>
              <SignupDisplay 
              onChange={this.onChange}
              onSubmit={this.createUser}
              />
            </div>
        )
    }
}

export default SignupContainer