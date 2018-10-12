import React from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input;

let inp

function uploadPhoto (){
  console.log('lol')
  inp.click()
}

const AnunciosDisplay = ({loading, onSubmit, onChangeFile})=>{
  return(
    <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Quieres publicar algo?</h2>
                <input accept="image/*" onChange={onChangeFile} ref={input=>inp=input} hidden type="file" />
                <img style={{cursor:"pointer"}} width="100" onClick={uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" alt='imgprofile' />
                <TextArea placeholder="Autosize height based on content lines" autosize />
                <Button loading={loading} type="primary" htmlType="submit" >Publicar</Button>
            </form>
  )
}

export default AnunciosDisplay