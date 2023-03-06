import { Button, Container } from '@mui/material'
import {React,useState, useEffect} from 'react'
import Select from 'react-select'
import axios from 'axios'


const FormSeguidores = () => {
  const opt = [
    { id: 'chocolate', nombre: 'Chocolate' },
    { id: 'strawberry', nombre: 'Strawberry' },
    { id: 'vanilla', nombre: 'Vanilla' }
  ]
  const [valorSelect, setvalorSelect] = useState([])

  useEffect(()=>{
    console.log('bloc')
    getPais()
  },[])
  
  
  const getPais = async () => {
    try {
      const url = 'https://developer.gatewayit.co/tornado/api/entidades-territoriales/paises'
      // const url = 'https://jsonplaceholder.typicode.com/users'
      const response = await axios.get(url)
      
      
      setvalorSelect(response.data)
      //console.log(response.data)
      //return(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  //seria la funcion para obtener el string y el valor seleccionado
  // const infoSelet=(Event)=>{
  //   console.log(Event)
  // }

  //seria igual que la funcio anterior pero obteniendo solo el valor
  const infoSelet=({value})=>{
    console.log(value)
    // setvalorSelect(value)
  }

  
  return (
    
      <Container>
        <h1>Proveedor: </h1>
        {/* <Button variant='contained' onClick={getPais}>fue</Button> */}
        <Select 
        defaultValue={{label:'selecciona un elemento', value:'default'}}
        options={valorSelect.map(item =>({ label: item.nombre, value: item.id }))} 
        onChange={infoSelet} />
      </Container>
    
  )
}

export default FormSeguidores