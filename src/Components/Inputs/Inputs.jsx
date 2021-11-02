import React from 'react'
import './InputStyle'
import {Form , Input , Submit} from './InputStyle'

function Inputs({handelSubmit}) {
 
  return (
    <Form onSubmit={handelSubmit}>
      <Input type="text" name="city" id="city"  placeholder='Enter City Name'/>
      <Input type="text" name="country" id="country" placeholder='Enter country Name' />
      <Submit type="submit" value="Show Results" />
    </Form>
  )
}

export default Inputs
