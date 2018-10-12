import React from 'react'
import { Input, Button } from 'antd'


const SignupDisplay = ({onChange, loading, signup, onSubmit})=>{
  return(
    <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Conviertete en un chambeador!</h2>
                <p>
                    <Input 
                        name="username"
                        type="text"
                        onChange={onChange}
                       // value={signup.username}
                        placeholder="Tu nombre de usuario" 
                    />
                    
                </p>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={onChange}
                    //value={signup.email}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={onChange}
                    //value={signup.password}
                    placeholder="Tu Password" 
                    />    
                </p>  
                <p>
                <Input 
                    name="password2"
                    type="password"
                    onChange={onChange}
                    //value={signup.password2}
                    placeholder="Repite tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >A chambear!</Button>
            </form>
  )
}

export default SignupDisplay