import React from 'react'
import logo from '../../../logo.svg'


let inp

function uploadPhoto (){
  console.log('lol')
  inp.click()
}



const PprofileDisplay = ({onChangeFile})=>{
  
  const data = JSON.parse(localStorage.getItem('user'))

  return(
    <div>
      <img style={{borderRadius:'50%'}} src={data.photoURL || logo} width="200" alt="user"/>
      <h1>{data.username}</h1>
      <p>{data.email}</p>
      <input accept="image/*" onChange={onChangeFile} ref={input=>inp=input} hidden type="file" />
       <br/>
      <img style={{cursor:"pointer"}} width="100" onClick={uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" alt='imgprofile' />
    </div>
 )
}

export default PprofileDisplay

