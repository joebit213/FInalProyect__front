import React from 'react'
import logo from '../../../logo.svg'


const PprofileDisplay = ()=>{

  const dataPu = JSON.parse(localStorage.getItem('user'))

  return(
    <div>
        <img style={{borderRadius:'50%'}} src={dataPu.photoURL || logo} width="200" alt="user"/>
        <h1>{dataPu.username}</h1>
        <p>{dataPu.email}</p>
    </div>
 )
}

export default PprofileDisplay

//<button onClick={this.getPrivateInfo} >Bajate mi pack privado ;)</button>
