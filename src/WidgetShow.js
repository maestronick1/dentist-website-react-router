import React from 'react'

const WidgetShow = (props) =>{
    return(
        <div>
            <h1>you entered this url parameter {props.match.params.id}</h1>
            <h2>One Procedure we do is (props.procedures[props.match.params.id]</h2>
        </div>
    )

}
    
 
  export default WidgetShow