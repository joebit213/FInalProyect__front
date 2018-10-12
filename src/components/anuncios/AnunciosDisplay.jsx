import React from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input;


const AnunciosDisplay = ({loading, onSubmit})=>{
  return(
    <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Quieres publicar algo?</h2>
                <TextArea placeholder="Autosize height based on content lines" autosize />
                <Button loading={loading} type="primary" htmlType="submit" >Publicar</Button>
            </form>
  )
}

export default AnunciosDisplay