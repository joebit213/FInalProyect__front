import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../../services/userService.js'
import VprofileDisplay from './VprofileDisplay';



class VprofileContainer extends Component{

    state = {
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }

    getPrivateInfo = () => {
        axios.get('http://localhost:3000/private', {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>toastr.error("algo falló", e.message))
    }

    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
        .then(pic=>console.log(pic))
        .catch(e=>toastr.error('Error'))
    }


render(){
  return(
      <div>
        <VprofileDisplay
         onChangeFile={this.onChangeFile}
         uploadPhoto={this.uploadPhoto}
         getPrivateInfo={this.getPrivateInfo}
        />
      </div>
  )
}
}

export default VprofileContainer