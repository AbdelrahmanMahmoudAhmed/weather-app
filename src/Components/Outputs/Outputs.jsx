import React from 'react'
import {Output} from './OutputStyle'

function Outputs(props) {
  
  return (
    
    <Output style={{display:props.handelDisply()}}>
      {
        props.country && <p className="prop-holder">
          country :&nbsp;
          <span className="result">{props.country}</span>
        </p>
      }
      {
        props.cityName && <p className="prop-holder">
          cityName :&nbsp;
          <span className="result">{props.cityName}</span>
        </p>
      }
      {
        props.description && <p className="prop-holder">
          description :&nbsp;
          <span className="result">{props.description}</span>
        </p>
      }
      {
        props.temp && <p className="prop-holder">
          temp :&nbsp;
          <span className="result">{props.temp}</span>
        </p>
      }
      {
        props.humidity && <p className="prop-holder">
          humidity :&nbsp;
          <span className="result">{props.humidity}</span>
        </p>
      }
      {
        props.pressure && <p className="prop-holder">
          pressure :&nbsp;
          <span className="result">{props.pressure}</span>
        </p>
      }
      {
        props.error && <p className="prop-holder">
          Sorry&nbsp;
          <span className="result">{props.error}</span>
        </p>
      }
    </Output>
  )
}

export default Outputs
